import { Profile, ProfileAdd } from '@features/profile'
import profileImage from '@images/profile.png'
import Button from '@ui/button/button'
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

	const onClickManageProfile = () => {
		router('/profiles/manage')
	}

	return (
		<div className="mx-auto h-screen max-w-[80%] place-content-center text-center">
			<h1 className="px-6 !text-center Regular-Title1 sm:Regular-LargeTitle">Select the profile you want to watch Netflix on.</h1>

			<div className="my-[2vw] flex-wrap gap-[2vw] flex-center">
				{profiles.map((profile) => (
					<Profile key={profile.id} image={profile.image} name={profile.name} onClick={onClickProfile} />
				))}
				<ProfileAdd onClick={onClickManageProfile} />
			</div>
			<Button theme="outline" className="mx-auto h-[42px] max-w-[178px] Regular-Headline" onClick={onClickManageProfile}>
				Manage Your Profile
			</Button>
		</div>
	)
}
