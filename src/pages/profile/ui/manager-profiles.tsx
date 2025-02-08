import { ProfileEdit } from '@features/profile'
import Button from '@ui/button/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { DrawerFooter, InputText } from '@ui/index'
import { ProfileImg } from '@ui/profile/profileImg'
import { Select } from '@ui/select/select'
import { Link } from 'react-router-dom'
import { profiles } from '../const/profiles'
import { useForm } from 'react-hook-form'
import { AddProfile } from '@widgets/profile'

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
										<ProfileImg image={profile.image} className="" />
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
					<AddProfile />
				</div>

				<Button theme="outline" className="mx-auto h-[42px] max-w-[178px] Regular-Headline">
					<Link to="/profiles">Complete</Link>
				</Button>
			</div>
		</div>
	)
}
