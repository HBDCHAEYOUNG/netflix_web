import { cn } from '@lib/utils'

interface RatingProps {
	rating: string
}

export function Rating({ rating }: RatingProps) {
	console.log(rating)
	return (
		<p
			className={cn(
				'h-7 w-7 rounded-md bg-Secondary/Blue-300 !text-center !text-2xl Bold-Title1',
				rating === '19' && 'bg-Secondary/Red-200',
			)}
		>
			{rating}
		</p>
	)
}
