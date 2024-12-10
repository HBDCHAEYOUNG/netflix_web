import { cn } from '@lib/utils'
import PlusIcon from '@icons/circle-plus.svg?react'

interface ProfileAddProps {
	onClick: () => void
	className?: string
}

export function ProfileAdd({ onClick, className }: ProfileAddProps) {
	return (
		<div
			className={cn(
				'[&:hover]:cursor-pointer [&>div]:hover:bg-Grey/Grey-20 [&>p]:hover:text-Grey/Grey-20 [&_path]:hover:fill-white',
				className,
			)}
			onClick={onClick}
		>
			<div className="relative aspect-square w-[10vw] min-w-[50px] max-w-[200px] rounded-sm flex-center">
				<div className="mx-auto aspect-square w-[10vw] min-w-[50px] max-w-[200px] rounded-sm flex-center">
					<PlusIcon />
				</div>
			</div>
			<p className="my-2 w-full !text-center text-Grey/Grey-200 Regular-Headline">Add Profile</p>
		</div>
	)
}
