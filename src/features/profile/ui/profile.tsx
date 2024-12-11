import { ProfileImg } from '@ui/index'
import { Link } from 'react-router-dom'

interface ProfileUserProps {
	image: string
	name: string
	onClick: () => void
}

export function Profile({ image, name, onClick }: ProfileUserProps) {
	return (
		<Link
			to="#"
			key={name}
			className="w-[10vw] min-w-[84px] max-w-[200px] [&:hover]:cursor-pointer [&>div]:hover:outline [&>div]:hover:outline-Primary/White [&>p]:hover:text-Primary/White"
			onClick={onClick}
		>
			<ProfileImg image={image} />
			<p className="my-2 !text-center text-Grey/Grey-200 Regular-Headline">{name}</p>
		</Link>
	)
}
