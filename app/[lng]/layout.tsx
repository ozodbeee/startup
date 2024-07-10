import type { Metadata } from 'next'
import { Roboto, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'
import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme.provider'
import { languages } from '@/i18n/settings'
import { dir } from 'i18next'
import { ClerkProvider } from '@clerk/nextjs'
import { localization } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'
import NextTopLoader from 'nextjs-toploader'

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
	metadataBase: new URL('https://startup.ozod.ac'),
	title: 'Ozod praktikum | Dasturlash kurslari',
	description:
		"Ozod Praktikum Next.js dasturlash kurslari, amaliyotlar, startup loyihalar va asosiysi sifatli ta'limdir.",
	authors: [{ name: 'Ozodbek Muhtorjonov', url: 'https://startup.ozod.ac' }],
	icons: { icon: '/logo.svg' },
	openGraph: {
		title: 'Ozod praktikum | Dasturlash kurslari',
		description:
			"Ozod Praktikum Next.js dasturlash kurslari, amaliyotlar, startup loyihalar va asosiysi sifatli ta'limdir.",
		type: 'website',
		url: 'https://startup.ozod.ac',
		locale: 'uz_UZ',
		images: 'https://ibb.co/QQ9KBkr',
		countryName: 'Uzbekistan',
		siteName: 'Ozod',
		emails: 'muhtorjonovozodbek1@gmail.com',
	},
	keywords:
		"Praktikum, Praktikum sammi, NextJS, NextJS to'liq kurs, NextJS kurs, NextJS dasturlash, Startup, Startup loyiha, Startup ozod, Ozod, Ozod praktikum, Ozod dasturlash, Ozod startup, Ozod kurs, Ozod kurslari, Ozod dasturlash kurslari, Ozod startup kurslari, Ozod startup loyihalari, Ozod startup loyiha, Ozod startup loyihasi, Ozod startup loyihasi dasturlash",
}

export async function generateStaticParams() {
	return languages.map(lng => ({ lng }))
}

interface Props extends ChildProps {
	params: { lng: string }
}

export default function RootLayout({ children, params: { lng } }: Props) {
	const local = localization(lng)

	return (
		<ClerkProvider localization={local}>
			<html lang={lng} dir={dir(lng)} suppressHydrationWarning>
				<body
					className={`${roboto.variable} ${spaceGrotesk.variable} custom-scrollbar overflow-x-hidden`}
					suppressHydrationWarning
				>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<Toaster position='top-center' />
						<NextTopLoader
							color='#2299DD'
							initialPosition={0.08}
							crawlSpeed={200}
							height={2}
							crawl={true}
							showSpinner={false}
							easing='ease'
							speed={200}
							shadow='0 0 10px #2299DD,0 0 5px #2299DD'
							zIndex={1600}
							showAtBottom={false}
						/>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
