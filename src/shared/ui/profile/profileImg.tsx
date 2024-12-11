import { cn } from '@lib/utils'

interface ProfileImgProps {
	image: string
	className?: string
}

export function ProfileImg({ image, className }: ProfileImgProps) {
	return (
		<div className={cn('aspect-square rounded-sm flex-center', className)}>
			<img src={image} alt="ProfileImg" className="aspect-square rounded-sm" />
		</div>
	)
}
