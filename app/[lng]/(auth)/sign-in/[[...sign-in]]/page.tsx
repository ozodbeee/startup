'use client'

import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export default function Page() {
	const { resolvedTheme } = useTheme()

	return (
		<div className='mt-10'>
			<SignIn
				appearance={{
					baseTheme: resolvedTheme === 'dark' ? dark : undefined,
				}}
				path='/:lng/sign-in'
				afterSignInUrl={'/:lng/'}
				afterSignUpUrl={'/:lng/'}
			/>
		</div>
	)
}
