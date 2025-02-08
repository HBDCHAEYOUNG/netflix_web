import { ProfileAdd } from '@features/profile'
import { profiles } from '@pages/profile/const/profiles'
import Button from '@ui/button/button'
import { Switch } from '@ui/button/switch'
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { Dialog, DialogTrigger, InputText } from '@ui/index'
import { ProfileImg } from '@ui/profile/profileImg'
import { useForm } from 'react-hook-form'

export function AddProfile() {
	const form = useForm()

	const handleSubmit = () => {
		console.log('handleSubmit')
	}
	return (
		<div>
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

						<ProfileImg image={profiles[0].image} className="w-16" />
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
	)
}
