import ThumbUp from '@icons/thumb-up-fill.svg?react'
import { cn } from '@lib/utils'
import Button from '@ui/button/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@ui/index'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { useInfiniteFetchMovies } from 'src/shared/models'

export function StepThree() {
	const [likeContents, setLikeContents] = useState<string[]>([])

	const { data: movies, fetchNextPage } = useInfiniteFetchMovies(10)
	console.log(111, movies)

	const profileData = JSON.parse(sessionStorage.getItem('profileData') || '{}')
	console.log(profileData)

	const { ref, inView } = useInView({
		rootMargin: '0px 0px 0px 0px',
		threshold: 0.95,
	})

	const onClickContent = (content: string) => {
		setLikeContents((prev) => [...prev, content])
		if (likeContents.find((prev) => content === prev)) {
			setLikeContents((prev) => prev.filter((prev) => content !== prev))
		}
	}

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [inView])

	return (
		<div className="mt-10 flex min-h-screen w-full flex-col">
			<h1 className="mx-auto max-w-base Medium-LargeTitle">WooHyuk, choose your 3 favorite contents</h1>
			<p className="mx-auto my-6 !font-normal text-TransparentWhite/70% max-w-base Regular-Title3">
				We'll help you find series and movies that perfectly match your taste. Choose content that you like.
			</p>

			<Carousel opts={{ slidesToScroll: 'auto', dragFree: true }}>
				<CarouselContent className="px-14">
					{movies?.pages
						.flatMap((page) => page.data)
						.map((movie, index, array) => (
							<CarouselItem
								key={index}
								className={cn('relative basis-1/5 cursor-pointer transition-all duration-700')}
								onClick={() => onClickContent(`content${index + 1}`)}
							>
								<img
									src={movie.thumbnail}
									alt={`content${index + 1}`}
									className={`aspect-[23/13] h-full rounded-md object-cover ${likeContents.find((content) => content === `content${index + 1}`) && 'opacity-60'} cursor-pointer hover:opacity-40`}
									ref={index === array.length - 1 ? ref : undefined}
								/>
								{likeContents.find((content) => content === `content${index + 1}`) && (
									<ThumbUp className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2" />
								)}
							</CarouselItem>
						))}
				</CarouselContent>

				<CarouselPrevious className="absolute left-0 top-1/2 z-10 h-full w-10 -translate-y-1/2 cursor-pointer hover:scale-150 hover:bg-black/50" />
				<CarouselNext className="absolute right-0 top-1/2 h-full w-10 -translate-y-1/2 cursor-pointer hover:scale-150 hover:bg-black/50" />
			</Carousel>

			<Link to={likeContents.length > 2 ? '/profiles' : '#'}>
				<Button
					theme={likeContents.length > 2 ? 'primary' : 'secondary'}
					className={cn(
						'mx-auto my-12 h-16 w-[400px] Medium-Title2',
						likeContents.length > 2 ? 'cursor-pointer' : 'cursor-not-allowed',
					)}
				>
					{likeContents.length > 2 ? 'Complete!' : 'Select 3 contents'}
				</Button>
			</Link>
		</div>
	)
}
