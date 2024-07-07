import { getLastLesson } from '@/actions/lesson.action'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

interface Props {
	params: { courseId: string; lng: string }
}

async function Page({ params: { courseId, lng } }: Props) {
	const { userId } = auth()
	const { lessonId, sectionId } = await getLastLesson(userId!, courseId)

	return redirect(`/${lng}/dashboard/${courseId}/${lessonId}?s=${sectionId}`)
}

export default Page
