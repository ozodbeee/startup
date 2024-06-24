import { authMiddleware } from '@clerk/nextjs/server'
import createMiddleware from 'next-intl/middleware'

const intlMiddleware = createMiddleware({
	locales: ['en', 'ru', 'uz', 'tr'],
	defaultLocale: 'en',
})

export default authMiddleware({
	beforeAuth: req => intlMiddleware(req),
	publicRoutes: [
		'/:lng',
		'/:lng/courses',
		'/:lng/courses/:slug',
		'/:lng/blogs',
		'/:lng/blogs/:slug',
		'/:lng/contacts',
		'/en/instructor/settings(.*)',
	],
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
