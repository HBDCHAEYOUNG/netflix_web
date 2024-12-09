import { ProfileAdd, ProfileEdit } from '@features/profile'
import PlusIcon from '@icons/circle-plus.svg?react'
import profileImage from '@images/profile.png'
import Button from '@ui/button/button'
import Form from '@ui/form/form'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger, InputText } from '@ui/index'
import { ProfileImg } from '@ui/profile/profileImg'
import { useForm } from 'react-hook-form'
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

export function ManagerProfiles() {
	const router = useNavigate()
	const form = useForm()

	const onClickProfile = () => {
		console.log('onClickProfile')
	}
	const onClickAddProfile = () => {
		console.log('onClickAddProfile')
	}
	const onClickSave = () => {
		router('/profiles')
	}
	const handleSubmit = () => {
		console.log('handleSubmit')
	}

	return (
		<div className="h-screen flex-col gap-[67px] flex-center">
			<h1 className="Regular-LargeTitle">Manage your profile</h1>

			<div className="grid grid-cols-3 gap-7 sm:flex">
				{profiles.map((profile) => (
					<ProfileEdit key={profile.id} image={profile.image} name={profile.name} onClick={onClickProfile} />
				))}

				<Drawer>
					<DrawerTrigger>
						<ProfileAdd image={<PlusIcon />} name="Add Profile" onClick={onClickAddProfile} className="col-span-3 w-full" />
					</DrawerTrigger>
					<DrawerContent>
						<Form form={form} onSubmit={handleSubmit} className="flex-col gap-7 flex-center">
							<DrawerHeader>
								<DrawerTitle className="!text-center !font-bold Regular-LargeTitle">Add Profile</DrawerTitle>
								<DrawerDescription className="!text-center Regular-Body">
									Add a profile to register other users to watch Netflix.
								</DrawerDescription>
							</DrawerHeader>

							<ProfileImg image={profileImage} className="w-16" />
							<Form.Item
								name="name"
								renderItem={(field) => <InputText name="name" label="Name" className="h-[56px] w-[314px]" {...field} />}
							/>
						</Form>
					</DrawerContent>
				</Drawer>
			</div>
			<Button theme="outline" className="h-[42px] w-[178px] Regular-Headline" onClick={onClickSave}>
				Complete
			</Button>
		</div>
	)
}
