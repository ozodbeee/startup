'use client'

import { UserProfile } from '@clerk/nextjs'
import { useTheme } from 'next-themes'
import { dark } from '@clerk/themes'
import Header from '../../_components/header'

function Page() {
	const { resolvedTheme } = useTheme()

	return (
		<>
			<Header title='Settings' description='Manage your account settings' />

			<div className='mt-6'>
				<UserProfile
					routing='path'
					path='/en/instructor/settings'
					appearance={{
						baseTheme: resolvedTheme === 'dark' ? dark : undefined,
						variables: {
							colorBackground: resolvedTheme === 'dark' ? '#020817' : '#fff',
						},
					}}
				/>
			</div>
		</>
	)
}

export default Page
