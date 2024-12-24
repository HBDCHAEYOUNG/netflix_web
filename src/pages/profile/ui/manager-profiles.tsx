import { ProfileAdd, ProfileEdit } from '@features/profile'
import profileImage from '@images/profile.png'
import Button from '@ui/button/button'
import { Switch } from '@ui/button/switch'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { DrawerFooter, InputText } from '@ui/index'
import { ProfileImg } from '@ui/profile/profileImg'
import { Select } from '@ui/select/select'
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
		<div className="mx-auto h-screen max-w-[80%] place-content-center gap-[67px] text-center">
			<div>
				<h1 className="px-6 !text-center Regular-Title1 sm:Regular-LargeTitle">Select the profile you want to watch Netflix on.</h1>
				<div className="my-[2vw] flex-wrap gap-[2vw] flex-center">
					{profiles.map((profile) => (
						<Dialog>
							<DialogTrigger>
								<ProfileEdit image={profile.image} name={profile.name} onClick={onClickProfile} />
							</DialogTrigger>
							<DialogContent>
								<Form form={form} onSubmit={handleSubmit} className="flex-col gap-7 flex-center">
									<DialogHeader>
										<DialogTitle className="!text-center">Change profile</DialogTitle>
									</DialogHeader>

									<div className="w-full gap-2 flex-center">
										<ProfileImg image={profileImage} className="" />
										<div className="flex flex-1 flex-col gap-2">
											<Form.Item name="name">
												<InputText name="name" label="Name" className="bg-Grey/Grey-850 text-Primary/White" />
											</Form.Item>
											<Form.Item name="gender">
												<Select label="Gender" items={['Male', 'Female', 'Other']} />
											</Form.Item>
										</div>
									</div>
								</Form>
								<DrawerFooter>
									<Button theme="white">save</Button>
									<Button theme="transparent">Cancellation</Button>
								</DrawerFooter>
							</DialogContent>
						</Dialog>
					))}
					<Dialog>
						<DialogTrigger>
							<ProfileAdd onClick={onClickAddProfile} />
						</DialogTrigger>
						<DialogContent>
							<Form form={form} onSubmit={handleSubmit} className="flex-col gap-7 flex-center">
								<DialogHeader>
									<DialogTitle className="!text-center">Add Profile</DialogTitle>
									<DialogDescription className="Regular-Body">Add a profile to register other users to watch Netflix.</DialogDescription>
								</DialogHeader>

								<ProfileImg image={profileImage} className="w-16" />
								<Form.Item name="name" className="w-full">
									<InputText name="name" label="Name" className="bg-Grey/Grey-850" />
								</Form.Item>
								<Form.Item name="child" className="w-full">
									<Switch name="child" label="Kides Profile" description="Show only children's series and movies" id="child" />
								</Form.Item>
							</Form>
							<DialogFooter>
								<Button theme="white">save</Button>
								<Button theme="transparent">Cancellation</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>

				<Button theme="outline" className="mx-auto h-[42px] max-w-[178px] Regular-Headline" onClick={onClickSave}>
					Complete
				</Button>
			</div>
		</div>
	)
}
