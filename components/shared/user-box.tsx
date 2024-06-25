'use client'

import { SignOutButton, useUser } from '@clerk/nextjs'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from '../ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Avatar, AvatarImage } from '../ui/avatar'
import Link from 'next/link'
import useTranslate from '@/hooks/use-translate'
import { Separator } from '../ui/separator'

function UserBox() {
	const { user } = useUser()
	const t = useTranslate()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className='size-12 cursor-pointer'>
					<AvatarImage src={user?.imageUrl} className='object-cover' />
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-80'
				align='start'
				alignOffset={11}
				forceMount
			>
				<div className='flex flex-col space-y-4 p-2'>
					<div className='flex items-center gap-x-2'>
						<div className='rounded-md bg-secondary p-1'>
							<Avatar className='size-8'>
								<AvatarImage src={user?.imageUrl} />
							</Avatar>
						</div>

						<div className='space-y-1'>
							<p className='line-clamp-1 font-SpaceGrotesk text-sm'>
								{user?.fullName}
							</p>
							<p className='text-xs font-medium leading-none text-muted-foreground'>
								{user?.emailAddresses[0].emailAddress}
							</p>
						</div>
					</div>
				</div>

				<DropdownMenuSeparator />
				<Link href={'/instructor'}>
					<DropdownMenuItem className='w-full cursor-pointer text-muted-foreground'>
						Instructor
					</DropdownMenuItem>
				</Link>
				<Link href={'/user-profile'}>
					<DropdownMenuItem className='w-full cursor-pointer text-muted-foreground'>
						{t('manageAccount')}
					</DropdownMenuItem>
				</Link>
				<Separator className='my-1' />
				<DropdownMenuItem
					asChild
					className='w-full cursor-pointer text-muted-foreground'
				>
					<SignOutButton>{t('logout')}</SignOutButton>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserBox
