// import { cn } from '@lib/utils'
// import { useState } from 'react'
// import PlusIcon from '@icons/plus.svg?react'
// import PlayIcon from '@icons/play.svg?react'
// import ThumbIcon from '@icons/thumb-up.svg?react'
// import ArrowIcon from '@icons/arrowdown.svg?react'
// import HdIcon from '@icons/hd.svg?react'
// import { Rating } from '@ui/label/rating'
// import { Popover, PopoverContent, PopoverTrigger } from '@ui/_shardcn/popover'
// import Button from '@ui/button/button'
// import Play from '@icons/play.svg?react'
// import movietitle from '@images/movie-title.png'

interface VideoCardProps {
	movie: {
		image: string
		title: string
		description: string
		duration: string
		genre: string
		rating: string
		releaseDate: string
	}
}

export function VideoCard({ movie }: VideoCardProps) {
	return (
		<div className="aspect-video w-full transition-all">
			<img src={movie.image} alt={movie.title} className="aspect-video w-full" />
			{/* {isHovered && (
				<div className="flex w-[240px] flex-col gap-4 rounded-md bg-Grey/Grey-900">
					<img src={movie.image} alt={`movieimage:${movietitle}`} className="w-full" />
					<div className="mx-4 flex gap-2 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:rounded-full [&>svg]:border [&>svg]:border-white [&>svg]:p-2">
						<PlayIcon />
						<PlusIcon />
						<ThumbIcon className="mr-auto" />
						<Popover>
							<PopoverTrigger>
								<ArrowIcon className="[&>svg]:h-8 [&>svg]:w-8 [&>svg]:rounded-full [&>svg]:border [&>svg]:border-white [&>svg]:p-2" />
							</PopoverTrigger>
							<PopoverContent className="w-calc(100vw-224px) relative mx-28 bg-Primary/Black">
								<img src={movie.image} alt={`movieimage:${movie.title}`} className="w-full" />
								<div className="absolute left-[20px] top-1/2 max-w-[518px]">
									<img src={movietitle} alt="movietitle:House of ninjas" className="w-40" />
									<nav className="mt-4 gap-4 flex-center [&>svg]:h-8 [&>svg]:w-8 [&>svg]:rounded-full [&>svg]:border [&>svg]:border-white [&>svg]:p-2">
										<Button theme="white" className="max-w-[119px]">
											<Play className="[&>path]:fill-black" />
											reproduction
										</Button>
										<PlusIcon />
										<ThumbIcon className="mr-auto" />
									</nav>
								</div>
								<div className="flex">
									<div className="basis-2/3">
										<p>{movie.releaseDate.slice(0, 4)}</p>
										<p>{movie.description}</p>
									</div>
									<div className="basis-1/3">
										<p>{movie.genre}</p>
									</div>
								</div>
							</PopoverContent>
						</Popover>
					</div>
					<div className="mx-4 gap-2 flex-center">
						<Rating rating={movie.rating} />
						<p className="text-TransparentWhite/70%">{movie.duration}</p>
						<HdIcon />
					</div>
					<p className="mx-4 mb-4">{movie.genre}</p>
				</div>
			)} */}
		</div>
	)
}
