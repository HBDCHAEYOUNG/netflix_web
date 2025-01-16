import { cn } from '@lib/utils'

interface ProfileImgProps {
	image: string
	className?: string
}

export function ProfileImg({ image, className }: ProfileImgProps) {
	return (
		<div className={cn('aspect-square flex-center', className)}>
			<img src={image} alt="ProfileImg" className="aspect-square w-full" />
		</div>
	)
}
