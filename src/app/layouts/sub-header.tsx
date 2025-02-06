import { SelectGenres } from '@features/header'
import { cn } from '@lib/utils'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const genres = [
	'Korean Drama',
	'American Drama',
	'British Drama',
	'Asian Drama',
	'Entertainment from all over the world in one place!',
	'animated film',
	'comedy',
	'romance',
]

export function SubHeader({ path }: { path: string }) {
	const [scrolled, setScrolled] = useState(false)
	const [searchParams] = useSearchParams()

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
			<h1 className={cn('mr-10 flex items-center gap-3 text-4xl font-bold', searchParams.get('genre') && 'hidden')}>{path}</h1>
			{searchParams.get('genre') && (
				<>
					<Link to="/series" className="flex cursor-pointer items-center gap-3 text-xl font-thin text-Grey/Grey-25">
						{path}

						<p className="text-xl font-thin text-Grey/Grey-25"> |</p>
					</Link>
					<span className="ml-3 text-4xl font-bold">{searchParams.get('genre')}</span>
				</>
			)}

			{!searchParams.get('genre') && <SelectGenres items={genres} label="Genre" />}
		</header>
	)
}
