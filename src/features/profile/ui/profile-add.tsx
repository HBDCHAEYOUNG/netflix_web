import { cn } from '@lib/utils'

interface ProfileAddProps {
	image: React.ReactNode
	name: string
	onClick: () => void
	className?: string
}

export function ProfileAdd({ image, name, onClick, className }: ProfileAddProps) {
	return (
		<div
			key={name}
			className={cn(
				'flex-col gap-4 flex-center [&:hover]:cursor-pointer [&>div]:hover:bg-Primary/White [&>p]:hover:text-Primary/White [&_path]:hover:fill-white',
				className,
			)}
			onClick={onClick}
		>
			<div className="relative aspect-square w-[144px] rounded-sm flex-center">{image}</div>
			<p className="text-center text-Grey/Grey-200 Regular-Headline">{name}</p>
		</div>
	)
}
