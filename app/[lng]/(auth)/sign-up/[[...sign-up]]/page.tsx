'use client'

import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export default function Page() {
	const { resolvedTheme } = useTheme()

	return (
		<div className='mt-[60px]'>
			<SignUp
				appearance={{
					baseTheme: resolvedTheme === 'dark' ? dark : undefined,
				}}
				path='/:lng/sign-up'
				afterSignInUrl={'/:lng/'}
				afterSignUpUrl={'/:lng/'}
			/>
		</div>
	)
}
