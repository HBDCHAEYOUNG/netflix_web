import ArrowIcon from '@icons/arrowdown.svg?react'
import HdIcon from '@icons/hd.svg?react'
import PlayIcon from '@icons/play.svg?react'
import PlusIcon from '@icons/plus.svg?react'
import ThumbIcon from '@icons/thumb-up.svg?react'
import movietitle from '@images/movie-title.png'
import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Rating } from '@ui/label/rating'
import { useState } from 'react'

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
	const [isHovered, setIsHovered] = useState(false)
	return (
		<div
			className="relative aspect-video w-full transition-all"
			onMouseOver={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{isHovered ? (
				<div className="flex w-[240px] flex-col gap-4 rounded-md bg-Grey/Grey-900">
					<img src={movie.image} alt={`movieimage:${movietitle}`} className="w-full" />
					<div className="mx-4 flex gap-2 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:rounded-full [&>svg]:border [&>svg]:border-white [&>svg]:p-2">
						<PlayIcon />
						<PlusIcon />
						<ThumbIcon className="mr-auto" />
						<Dialog>
							<DialogTrigger>
								<ArrowIcon />
							</DialogTrigger>
							<DialogContent className="w-calc(100vw-224px) relative mx-28 bg-Primary/Black">{/* <Detail /> */}</DialogContent>
						</Dialog>
					</div>
					<div className="mx-4 flex items-center gap-2 [&>svg]:h-4 [&>svg]:w-4">
						<Rating rating={movie.rating} />
						<p className="text-TransparentWhite/70% Regular-Smallbody">{movie.duration}</p>
						<HdIcon />
					</div>
					<p className="mx-4 mb-4">{movie.genre}</p>
				</div>
			) : (
				<img src={movie.image} alt={movie.title} className="aspect-video w-full" />
			)}
		</div>
	)
}
