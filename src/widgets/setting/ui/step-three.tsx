import Button from '@ui/button/button'
import likeMovie from '@images/likemovie.jpg'
import { useState } from 'react'
import ThumbUp from '@icons/thumb-up-fill.svg?react'
import { Link } from 'react-router-dom'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@ui/index'

export function StepThree() {
	const [likeContents, setLikeContents] = useState<string[]>([])

	const onClickContent = (content: string) => {
		setLikeContents((prev) => [...prev, content])
		if (likeContents.find((prev) => content === prev)) {
			setLikeContents((prev) => prev.filter((prev) => content !== prev))
		}
	}
	return (
		<div className="flex min-h-screen w-full flex-col justify-center pt-24">
			<h1 className="mx-auto max-w-base Medium-LargeTitle">WooHyuk, choose your 3 favorite contents</h1>
			<p className="mx-auto my-6 !font-normal text-TransparentWhite/70% max-w-base Regular-Title3">
				We'll help you find series and movies that perfectly match your taste. Choose content that you like.
			</p>
			<Carousel opts={{ slidesToScroll: 'auto', loop: true }} className="my-6">
				<CarouselContent className="pl-[156px]">
					{Array.from({ length: 12 }).map((_, index) => (
						<CarouselItem key={index} className="relative w-[10%] basis-[10%]">
							<img
								src={likeMovie}
								alt={`content${index + 1}`}
								className={`${likeContents.find((content) => content === `content${index + 1}`) && 'opacity-60'} cursor-pointer hover:opacity-40`}
								onClick={() => onClickContent(`content${index + 1}`)}
							/>
							{likeContents.find((content) => content === `content${index + 1}`) && (
								<ThumbUp className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2" />
							)}
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute left-0 z-10 h-full w-8 hover:scale-150 hover:bg-TransparentBlack/30%" />
				<CarouselNext className="absolute right-0 z-10 h-full w-8 hover:scale-150 hover:bg-TransparentBlack/30%" />
			</Carousel>
			<Button theme={likeContents.length > 2 ? 'primary' : 'secondary'} className="mx-auto my-12 h-16 w-[400px] Medium-Title2">
				{likeContents.length > 2 ? <Link to="/profiles">Complete!</Link> : 'Select 3 contents'}
			</Button>
		</div>
	)
}
