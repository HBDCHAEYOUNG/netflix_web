import { cn } from '@lib/utils'
import { useState } from 'react'

interface VideoCardProps {
	movie: {
		image: string
		title: string
		description: string
	}
}

export function VideoCard({ movie }: VideoCardProps) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<img
				src={movie.image}
				alt={movie.title}
				className={cn('rounded-md transition-transform duration-200 hover:scale-105', isHovered && 'scale-105')}
			/>
			{/* <div className={cn('hidden', isHovered && 'flex')}>
				<h3 className="text-lg font-bold text-white">{movie.title}</h3>
				<p className="mt-2 text-sm text-gray-200">{movie.description}</p>
			</div> */}
		</div>
	)
}
