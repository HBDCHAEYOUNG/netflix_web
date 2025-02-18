import { Profile } from '@features/profile'
import Button from '@ui/button/button'
import { AddProfile } from '@widgets/profile'
import { Link } from 'react-router-dom'
import { useFetchAuth } from 'src/shared/models/auth.model'
import { useFetchUser } from 'src/shared/models/user.model'

export function Profiles() {
	const { data } = useFetchAuth()
	const id = data?.id
	const { data: user } = useFetchUser(id!)
	const profiles = user?.profiles

	return (
		<div className="mx-auto h-screen place-content-center text-center max-w-wide">
			<h1 className="px-6 !text-center Regular-LargeTitle">Select the profile you want to watch Netflix on.</h1>

			<div className="my-12 flex-wrap gap-8 flex-center">
				{/* {profiles.map((profile) => (
					<Profile key={profile.id} image={profile.image} name={profile.name} />
				))} */}
				{profiles?.map((profile) => <Profile key={profile.id} image={profile.image} name={profile.name} />)}
				<AddProfile />
			</div>
			<Button theme="outline" className="mx-auto h-[42px] max-w-[178px] Regular-Headline">
				<Link to="manage">Manage Your Profile</Link>
			</Button>
		</div>
	)
}
