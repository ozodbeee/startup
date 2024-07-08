'use server'

import Course from '@/database/course.model'
import { connectToDatabase } from '@/lib/mongoose'
import { GetAllCoursesParams, GetCoursesParams, ICreateCourse } from './types'
import { ICourse, ILesson } from '@/app.types'
import { revalidatePath } from 'next/cache'
import User from '@/database/user.model'
import { cache } from 'react'
import Section from '@/database/section.model'
import Lesson from '@/database/lesson.model'
import { calculateTotalDuration } from '@/lib/utils'
import { FilterQuery } from 'mongoose'
import Purchase from '@/database/purchase.model'
import UserProgress from '@/database/user-progress.model'
import Review from '@/database/review.model'

export const createCourse = async (data: ICreateCourse, clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		await Course.create({ ...data, instructor: user._id })
		revalidatePath('/en/instructor/my-courses')
	} catch (error) {
		throw new Error('Soething went wrong while creating course!')
	}
}

export const getCourses = async (params: GetCoursesParams) => {
	try {
		await connectToDatabase()
		const { clerkId, page = 1, pageSize = 3 } = params

		const skipAmount = (page - 1) * pageSize

		const user = await User.findOne({ clerkId })
		const { _id } = user
		const courses = await Course.find({ instructor: _id })
			.skip(skipAmount)
			.limit(pageSize)

		const totalCourses = await Course.find({ instructor: _id }).countDocuments()
		const isNext = totalCourses > skipAmount + courses.length

		const allCourses = await Course.find({ instructor: _id })
			.select('purchases currentPrice')
			.populate({
				path: 'purchases',
				model: Purchase,
				select: 'course',
				populate: {
					path: 'course',
					model: Course,
					select: 'currentPrice',
				},
			})

		const totalStudents = allCourses
			.map(c => c.purchases.length)
			.reduce((a, b) => a + b, 0)

		const totalEarnings = allCourses
			.map(c => c.purchases)
			.flat()
			.map(p => p.course.currentPrice)
			.reduce((a, b) => a + b, 0)

		return { courses, isNext, totalCourses, totalEarnings, totalStudents }
	} catch (error) {
		throw new Error('Soething went wrong while getting course!')
	}
}

export const getCourseById = async (id: string) => {
	try {
		await connectToDatabase()
		const course = await Course.findById(id)
		return course as ICourse
	} catch (error) {
		throw new Error('Soething went wrong while getting course!')
	}
}

export const updateCourse = async (
	id: string,
	updateData: Partial<ICourse>,
	path: string
) => {
	try {
		await connectToDatabase()
		await Course.findByIdAndUpdate(id, updateData)
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong while updating course status!')
	}
}

export const deleteCourse = async (id: string, path: string) => {
	try {
		await connectToDatabase()
		await Course.findByIdAndDelete(id)
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong while deleting course!')
	}
}

export const getFeaturedCourses = cache(async () => {
	try {
		await connectToDatabase()
		const courses = await Course.find({ published: true })
			.limit(6)
			.sort({ createdAt: -1 })
			.select('previewImage title slug oldPrice currentPrice instructor')
			.populate({
				path: 'instructor',
				select: 'fullName picture',
				model: User,
			})

		return courses
	} catch (error) {
		throw new Error('Something went wrong while getting featured courses!')
	}
})

export const getDetailedCourse = cache(async (id: string) => {
	try {
		await connectToDatabase()

		const course = await Course.findById(id)
			.select(
				'title description instructor previewImage oldPrice currentPrice learning requirements tags updatedAt level category language'
			)
			.populate({
				path: 'instructor',
				select: 'fullName picture',
				model: User,
			})

		const sections = await Section.find({ course: id }).populate({
			path: 'lessons',
			model: Lesson,
		})

		const totalLessons: ILesson[] = sections
			.map(section => section.lessons)
			.flat()

		const reviews = await Review.find({ course: id, isFlag: false }).select(
			'rating'
		)

		const rating = reviews.reduce((total, review) => total + review.rating, 0)

		const purchasedStudents = await Purchase.find({
			course: id,
		}).countDocuments()

		const calcRating = (rating / reviews.length).toFixed(1)

		const data = {
			...course._doc,
			totalLessons: totalLessons.length,
			totalSections: sections.length,
			totalDuration: calculateTotalDuration(totalLessons),
			rating: calcRating === 'NaN' ? 0 : calcRating,
			raviewCount: reviews.length,
			purchasedStudents,
		}

		return data
	} catch (error) {
		throw new Error('Something went wrong while getting detailed course!')
	}
})

export const getAllCourses = async (params: GetAllCoursesParams) => {
	try {
		await connectToDatabase()
		const { searchQuery, filter, page = 1, pageSize = 6 } = params

		const skipAmount = (page - 1) * pageSize

		const query: FilterQuery<typeof Course> = {}

		if (searchQuery) {
			query.$or = [{ title: { $regex: new RegExp(searchQuery, 'i') } }]
		}

		let sortOptions = {}

		switch (filter) {
			case 'newest':
				sortOptions = { createdAt: -1 }
				break
			case 'popular':
				sortOptions = { students: -1 }
				break
			case 'lowest-price':
				sortOptions = { currentPrice: 1 }
				break
			case 'highest-price':
				sortOptions = { currentPrice: -1 }
				break
			case 'english':
				query.language = 'english'
				break
			case 'uzbek':
				query.language = 'uzbek'
				break
			case 'russian':
				query.language = 'russian'
				break
			case 'turkish':
				query.language = 'turkish'
				break
			case 'beginner':
				query.level = 'beginner'
				break
			case 'intermediate':
				query.level = 'intermediate'
				break
			case 'advanced':
				query.level = 'advanced'
				break
			default:
				break
		}

		const courses = await Course.find(query)
			.select('previewImage title slug _id oldPrice currentPrice instructor')
			.populate({
				path: 'instructor',
				select: 'fullName picture',
				model: User,
			})
			.skip(skipAmount)
			.limit(pageSize)
			.sort(sortOptions)

		const totalCourses = await Course.countDocuments(query)
		const isNext = totalCourses > skipAmount + courses.length

		return { courses, isNext, totalCourses }
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const purchaseCourse = async (course: string, clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		const checkCourse = await Course.findById(course)
			.select('purchases')
			.populate({
				path: 'purchases',
				model: Purchase,
				match: { user: user._id },
			})

		if (checkCourse.purchases.length > 0)
			return JSON.parse(JSON.stringify({ status: 200 }))

		const purchase = await Purchase.create({ user: user._id, course })

		await Course.findByIdAndUpdate(course, {
			$push: { purchases: purchase._id },
		})

		return JSON.parse(JSON.stringify({ status: 200 }))
	} catch (error) {
		throw new Error('Something went wrong while purchasing course!')
	}
}

export const getDashboardCourse = async (clerkId: string, courseId: string) => {
	try {
		await connectToDatabase()
		const course = await Course.findById(courseId).select('title')
		const sections = await Section.find({ course: courseId })
			.select('title')
			.sort({ position: 1 })
			.populate({
				path: 'lessons',
				model: Lesson,
				select: 'title userProgress',
				options: { sort: { position: 1 } },
				populate: {
					path: 'userProgress',
					match: { userId: clerkId },
					model: UserProgress,
					select: 'lessonId',
				},
			})

		const lessons = sections.map(section => section.lessons).flat()
		const lessonIds = lessons.map(lesson => lesson._id)

		const validCompletedLessons = await UserProgress.find({
			userId: clerkId,
			lessonId: { $in: lessonIds },
			isCompleted: true,
		})

		const progressPercentage =
			(validCompletedLessons.length / lessons.length) * 100

		return { course, sections, progressPercentage }
	} catch (error) {
		throw new Error('Something went wrong while getting dashboard course!')
	}
}

export const addFavoriteCourse = async (courseId: string, clerkId: string) => {
	try {
		await connectToDatabase()
		const isFavourite = await User.findOne({
			clerkId,
			favouriteCourses: courseId,
		})

		if (isFavourite) {
			throw new Error('Course already added to favorite')
		}

		const user = await User.findOne({ clerkId })

		await User.findByIdAndUpdate(user._id, {
			$push: { favouriteCourses: courseId },
		})
	} catch (error) {
		throw new Error('Something went wrong while adding favorite course!')
	}
}

export const addArchiveCourse = async (courseId: string, clerkId: string) => {
	try {
		await connectToDatabase()
		const isArchive = await User.findOne({
			clerkId,
			archiveCourses: courseId,
		})

		if (isArchive) {
			throw new Error('Course already added to archive')
		}

		const user = await User.findOne({ clerkId })

		await User.findByIdAndUpdate(user._id, {
			$push: { archiveCourses: courseId },
		})
	} catch (error) {
		throw new Error('Something went wrong while adding favorite course!')
	}
}
