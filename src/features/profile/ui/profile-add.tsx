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
				'flex-col flex-center [&:hover]:cursor-pointer [&>div]:hover:bg-Grey/Grey-20 [&>p]:hover:text-Grey/Grey-20 [&_path]:hover:fill-white',
				className,
			)}
			onClick={onClick}
		>
			<div className="relative aspect-square h-[10vw] max-h-[200px] min-h-[84px] w-[10vw] min-w-[84px] max-w-[200px] rounded-sm flex-center">
				<div className="mx-auto aspect-square rounded-sm flex-center">
					<PlusIcon />
				</div>
			</div>
			<p className="my-2 w-full !text-center text-Grey/Grey-200 Regular-Headline">Add Profile</p>
		</div>
	)
}
