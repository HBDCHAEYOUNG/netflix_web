import { cn } from '@lib/utils'
import { useState } from 'react'
import PlusIcon from '@icons/plus.svg?react'
import PlayIcon from '@icons/play.svg?react'
import ThumbIcon from '@icons/thumb-up.svg?react'
import ArrowIcon from '@icons/arrowdown.svg?react'
import HdIcon from '@icons/hd.svg?react'
import { Rating } from '@ui/label/rating'
interface VideoCardProps {
	movie: {
		image: string
		title: string
		description: string
		duration: string
		genre: string
		rating: string
	}
}

export function VideoCard({ movie }: VideoCardProps) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<img src={movie.image} alt={movie.title} className={cn('rounded-md')} />
			{isHovered && (
				<div className="flex w-fit flex-col gap-4 bg-Primary/Black">
					<img src={movie.image} alt={`movieimage:${movie.title}`} className="w-[240px]" />
					<div className="mx-4 flex gap-2 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:rounded-full [&>svg]:border [&>svg]:border-white [&>svg]:p-2">
						<PlayIcon />
						<PlusIcon />
						<ThumbIcon />
						<ArrowIcon className="ml-auto" />
					</div>
					<div className="mx-4 gap-2 flex-center">
						<Rating rating={movie.rating} />
						<p className="text-TransparentWhite/70%">{movie.duration}</p>
						<HdIcon />
					</div>
					<p className="mx-4">{movie.genre}</p>
				</div>
			)}
		</div>
	)
}
