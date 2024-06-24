import type { Metadata } from 'next'
import { Roboto, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'
import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme.provider'
import { languages } from '@/i18n/settings'
import { dir } from 'i18next'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '700', '900'],
	variable: '--font-roboto',
})

const spaceGrotesk = SpaceGrotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
	title: 'Startup - Project',
	description: 'Startup next-js project',
	icons: {
		icon: '/logo.svg',
	},
}

export async function generateStaticParams() {
	return languages.map(lng => ({ lng }))
}

interface Props extends ChildProps {
	params: { lng: string }
}

export default function RootLayout({ children, params: { lng } }: Props) {
	return (
		<html lang={lng} dir={dir(lng)} suppressHydrationWarning>
			<body
				className={`${roboto.variable} ${spaceGrotesk.variable}`}
				suppressHydrationWarning
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
