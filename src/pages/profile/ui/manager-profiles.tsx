import profileImage from '@images/profile.png'
import PlusIcon from '@icons/circle-plus.svg?react'
import { useNavigate } from 'react-router-dom'
import { ProfileAdd, ProfileEdit } from '@features/profile'
import Button from '@ui/button/button'

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

export function ManagerProfiles() {
	const router = useNavigate()
	const onClickProfile = () => {
		console.log('onClickProfile')
	}
	const onClickAddProfile = () => {
		console.log('onClickAddProfile')
	}
	const onClickSave = () => {
		router('/profiles')
	}

	return (
		<div className="h-screen flex-col gap-[67px] flex-center">
			<h1 className="Regular-LargeTitle">Manage your profile</h1>

			<div className="grid grid-cols-3 gap-7 sm:flex">
				{profiles.map((profile) => (
					<ProfileEdit key={profile.id} image={profile.image} name={profile.name} onClick={onClickProfile} />
				))}
				<ProfileAdd image={<PlusIcon />} name="Add Profile" onClick={onClickAddProfile} className="col-span-3 w-full" />
			</div>
			<Button theme="outline" className="h-[42px] w-[178px] Regular-Headline" onClick={onClickSave}>
				Save
			</Button>
		</div>
	)
}
