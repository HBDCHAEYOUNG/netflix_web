import { ProfileImg } from '@ui/index'
import { useNavigate } from 'react-router-dom'
import { usePostProfileAccess } from 'src/shared/models/user.model'

interface ProfileUserProps {
	image: string
	name: string
	id: number
	profileId: number
}

export function Profile({ image, name, id, profileId }: ProfileUserProps) {
	const { mutateAsync: postProfileAccess } = usePostProfileAccess()

	const navigate = useNavigate()

	const handleClickProfile = async () => {
		try {
			await postProfileAccess({ profileId, id })
			alert('프로필 접근 완료')
			navigate('/')
		} catch (error) {
			console.error(error)
			alert('프로필 접근 실패')
		}
	}
	return (
		<div
			key={name}
			className="w-[154px] [&:hover]:cursor-pointer [&>div]:hover:outline [&>div]:hover:outline-[3px] [&>div]:hover:outline-Grey/Grey-20 [&>p]:hover:text-Grey/Grey-20"
			onClick={handleClickProfile}
		>
			<ProfileImg image={image} />
			<p className="my-2 !text-center text-Grey/Grey-200 Regular-Headline">{name}</p>
		</div>
	)
}
