import { ProfileImg } from '@ui/index'
import { Link } from 'react-router-dom'

interface ProfileUserProps {
	image: string
	name: string
}

export function Profile({ image, name }: ProfileUserProps) {
	return (
		<Link
			to="/"
			key={name}
			className="w-[154px] [&:hover]:cursor-pointer [&>div]:hover:outline [&>div]:hover:outline-[3px] [&>div]:hover:outline-Grey/Grey-20 [&>p]:hover:text-Grey/Grey-20"
		>
			<ProfileImg image={image} />
			<p className="my-2 !text-center text-Grey/Grey-200 Regular-Headline">{name}</p>
		</Link>
	)
}
