import { Profile } from '@features/profile'
import { WithAuth } from '@hooks/with-auth'
import Button from '@ui/button/button'
import { AddProfile } from '@widgets/profile'
import { Link } from 'react-router-dom'
import { useFetchAuth } from 'src/shared/models/auth.model'

function Profiles() {
	const { data, isLoading } = useFetchAuth()

	if (isLoading) return <div className="h-screen flex-center">Loading...</div>
	if (!data) return <div className="h-screen flex-center">No data available.</div>

	const profileCount = (data as any)?.profileCount
	const roleProfileCount = (data as any)?.role < 2 ? 4 : 2
	const maxProfileCount = profileCount < roleProfileCount

	return (
		<div className="mx-auto h-screen place-content-center text-center max-w-wide">
			<h1 className="px-6 !text-center Regular-LargeTitle">Select the profile you want to watch Netflix on.</h1>

			<div className="my-12 flex-wrap gap-8 flex-center">
				{(data as any)?.profiles?.map((profile: any) => (
					<Profile key={profile.id} image={profile.avatar} name={profile.name} profileId={profile.id} id={data.id} />
				))}
				{maxProfileCount && <AddProfile />}
			</div>
			<Link to="manage">
				<Button theme="outline" className="mx-auto h-[42px] max-w-[178px] Regular-Headline">
					Manage Your Profile
				</Button>
			</Link>
		</div>
	)
}

export default WithAuth(Profiles)
