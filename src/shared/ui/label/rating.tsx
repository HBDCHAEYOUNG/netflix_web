import { cn } from '@lib/utils'

interface RatingProps {
	rating: string
}

export function Rating({ rating }: RatingProps) {
	console.log(rating)
	return (
		<p
			className={cn(
				'h-9 w-9 rounded-md bg-Secondary/Blue-300 p-1 !text-center !text-3xl Bold-Title1',
				rating === '19' && 'bg-Secondary/Red-200',
			)}
		>
			{rating}
		</p>
	)
}
