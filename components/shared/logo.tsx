import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<Image src={'/logo.svg'} alt='logo' width={50} height={50} />
			<h1 className='font-SpaceGrotesk text-4xl font-bold'>OZOD.AC</h1>
		</Link>
	)
}

export default Logo
