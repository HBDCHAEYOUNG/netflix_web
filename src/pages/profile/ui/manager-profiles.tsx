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
import { Link } from 'react-router-dom'

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
	const form = useForm()

	const handleSubmit = () => {
		console.log('handleSubmit')
	}
	return (
		<div className="mx-auto h-screen place-content-center max-w-wide">
			<div>
				<h1 className="!text-center Regular-LargeTitle">Manage your profile</h1>
				<div className="my-12 flex-wrap gap-8 flex-center">
					{profiles.map((profile) => (
						<Dialog>
							<DialogTrigger>
								<ProfileEdit image={profile.image} name={profile.name} />
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
							<ProfileAdd />
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

				<Button theme="outline" className="mx-auto h-[42px] max-w-[178px] Regular-Headline">
					<Link to="/profiles">Complete</Link>
				</Button>
			</div>
		</div>
	)
}
