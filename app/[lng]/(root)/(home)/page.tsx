'use client'

import useTranslate from '@/hooks/use-translate'

function Page() {
	const t = useTranslate()

	return <div className='mt-24'>{t('home')}</div>
}

export default Page
