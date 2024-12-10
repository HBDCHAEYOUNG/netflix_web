import { ProfileAdd, ProfileEdit } from '@features/profile'
import profileImage from '@images/profile.png'
import Button from '@ui/button/button'
import Form from '@ui/form/form'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
	InputText,
} from '@ui/index'
import { ProfileImg } from '@ui/profile/profileImg'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@icons/plus-wide.svg?react'
import { Switch } from '@ui/button/switch'

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
		<div className="mx-auto h-screen max-w-[80%] place-content-center gap-[67px] text-center">
			<div>
				<h1 className="px-6 !text-center Regular-Title1 sm:Regular-LargeTitle">Select the profile you want to watch Netflix on.</h1>

				<ul className="my-2 inline-block [&>li]:inline-block">
					{profiles.map((profile) => (
						<ProfileEdit key={profile.id} image={profile.image} name={profile.name} onClick={onClickProfile} />
					))}

					<Drawer>
						<DrawerTrigger>
							<ProfileAdd onClick={onClickAddProfile} />
						</DrawerTrigger>
						<DrawerContent>
							<Form form={form} onSubmit={handleSubmit} className="flex-col gap-7 flex-center">
								<DrawerHeader>
									<DrawerClose className="my-4 flex w-full justify-end">
										<CloseIcon className="h-12 w-12 rotate-45" />
									</DrawerClose>
									<DrawerTitle className="!text-center !font-bold Regular-LargeTitle">Add Profile</DrawerTitle>
									<DrawerDescription className="Regular-Body">Add a profile to register other users to watch Netflix.</DrawerDescription>
								</DrawerHeader>

								<ProfileImg image={profileImage} className="w-16" />
								<Form.Item name="name" className="w-full" renderItem={(field) => <InputText name="name" label="Name" {...field} />} />
								<Form.Item
									name="child"
									className="w-full"
									renderItem={(field) => (
										<Switch name="child" label="Kides Profile" description="Show only children's series and movies" id="child" {...field} />
									)}
								/>
							</Form>
							<DrawerFooter>
								<Button theme="white">save</Button>
								<Button theme="transparent">Cancellation</Button>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</ul>

				<Button theme="outline" className="mx-auto h-[42px] max-w-[178px] Regular-Headline" onClick={onClickSave}>
					Complete
				</Button>

				<div className="flex items-center space-x-2">
					<Switch id="airplane-mode" />
					<label htmlFor="airplane-mode">Airplane Mode</label>
				</div>
			</div>
		</div>
	)
}
