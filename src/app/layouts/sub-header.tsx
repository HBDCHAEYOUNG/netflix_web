import { SelectGenres } from '@features/header'
import { cn } from '@lib/utils'
import { useEffect, useState } from 'react'

const genres = [
	'Korean Drama',
	'American Drama',
	'British Drama',
	'Asian Drama',
	'Entertainment from all over the world in one place!',
	'animated film',
	'comedy',
	'romance',
	'drama genere',
	'Action',
	'Adventure',
	'Fantasy',
	'Horror',
	'Mystery',
	'Sci-Fi',
	'Thriller',
	'Western',
]

export function SubHeader({ path }: { path: string }) {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0
			setScrolled(isScrolled)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<header
			className={cn(
				'fixed top-16 z-20 flex h-[68px] w-full items-center transition-colors duration-700 common-padding',
				scrolled && 'bg-Primary/Black',
			)}
		>
			<h1 className="mr-10 text-4xl font-bold">{path}</h1>
			<SelectGenres items={genres} label="Genre" />
		</header>
	)
}
