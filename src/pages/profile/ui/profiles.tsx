import { Profile } from '@features/profile'
import PlusIcon from '@icons/circle-plus.svg?react'
import profileImage from '@images/profile.png'
import { useNavigate } from 'react-router-dom'

const profiles = [
	{
		id: 1,
		name: 'Profile 1',
		image: profileImage,
	},
	{
		id: 2,
		name: 'Profile 2',
		image: profileImage,
	},
	{
		id: 3,
		name: 'Profile 3',
		image: profileImage,
	},
]

export function Profiles() {
	const router = useNavigate()
	const onClickProfile = () => {
		console.log('onClickProfile')
	}

	const onClickAddProfile = () => {
		router('/manage-profiles')
	}

	return (
		<div className="h-screen flex-col gap-[67px] flex-center">
			<h1 className="Regular-LargeTitle">Who’s watching?</h1>

			<div className="grid grid-cols-3 gap-7 sm:flex">
				{profiles.map((profile) => (
					<Profile key={profile.id} image={profile.image} name={profile.name} onClick={onClickProfile} />
				))}
				<Profile image={<PlusIcon />} name="Add Profile" onClick={onClickAddProfile} />
			</div>
			<p className="h-[42px] w-[178px] cursor-pointer border border-Grey/Grey-200 p-[10px] text-Grey/Grey-200 flex-center Regular-Headline hover:border-Primary/White hover:text-Primary/White">
				Manage Profiles
			</p>
		</div>
	)
}
