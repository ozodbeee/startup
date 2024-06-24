import TopBar from '@/components/shared/top-bar'
import AllCourses from './_components/all-courses'

function Page() {
	return (
		<>
			<TopBar label='allCourses' description='allCourseDescription' />
			<AllCourses />
		</>
	)
}

export default Page
