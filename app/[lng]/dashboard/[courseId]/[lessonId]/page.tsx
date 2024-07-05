import { getLesson } from '@/actions/lesson.action'
import { translation } from '@/i18n/server'
import parse from 'html-react-parser'
import VideoLesson from './_components/video-lesson'

interface Props {
	params: { lessonId: string; courseId: string; lng: string }
}
async function Page({ params: { courseId, lessonId, lng } }: Props) {
	const { t } = await translation(lng)
	const lesson = await getLesson(lessonId)

	return (
		<>
			<VideoLesson lesson={JSON.parse(JSON.stringify(lesson))} />
			{lesson.content && (
				<div className='rounded-md bg-gradient-to-b from-background to-secondary px-4 pb-4 pt-1 md:px-8'>
					<h1 className=' mb-2 font-SpaceGrotesk text-xl font-medium text-primary'>
						{t('usefullInformation')}
					</h1>
					<div className='prose dark:prose-invert max-w-none flex-1'>
						{parse(lesson.content)}
					</div>
				</div>
			)}
		</>
	)
}

export default Page
