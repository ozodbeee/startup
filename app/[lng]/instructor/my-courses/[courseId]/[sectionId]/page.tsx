import React from 'react'
import Header from '../../../_components/header'
import { Separator } from '@/components/ui/separator'
import { getSectionById } from '@/actions/section.action'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeftCircle, Settings, Settings2 } from 'lucide-react'
import Action from './_components/action'
import SectionField from './_components/section-field'
import Lessons from './_components/lessons'

interface Params {
	params: { sectionId: string; courseId: string }
}

async function Page({ params }: Params) {
	const sectionJSON = await getSectionById(params.sectionId)

	const section = JSON.parse(JSON.stringify(sectionJSON))

	return (
		<>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Link
						href={`/en/instructor/my-courses/${params.courseId}`}
						className='mt-3'
					>
						<Button
							size={'icon'}
							variant={'outline'}
							className='border border-gray-600'
						>
							<ChevronLeftCircle />
						</Button>
					</Link>

					<Header
						title={section.title}
						description='Manage your section and see how it is performing.'
					/>
				</div>
				<Action {...section} />
			</div>
			<Separator className='my-3 bg-muted-foreground' />

			<div className='grid grid-cols-2 gap-4'>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2'>
						<span className='font-SpaceGrotesk text-3xl font-medium'>
							Lessons
						</span>{' '}
						<Settings2 />
					</div>
					<Lessons section={section} />
				</div>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2'>
						<span className='font-SpaceGrotesk text-3xl font-medium'>
							Section field
						</span>{' '}
						<Settings />
					</div>
					<SectionField {...section} />
				</div>
			</div>
		</>
	)
}

export default Page
