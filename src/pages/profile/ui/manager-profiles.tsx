import { ProfileEdit } from '@features/profile'
import Button from '@ui/button/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { InputText } from '@ui/index'
import { ProfileImg } from '@ui/profile/profileImg'
import { AddProfile } from '@widgets/profile'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useFetchAuth } from 'src/shared/models/auth.model'
import { useFetchUser, usePatchProfile } from 'src/shared/models/user.model'

export function ManagerProfiles() {
	const form = useForm()
	const [selectedProfileId, setSelectedProfileId] = useState<string>('')

	const [open, setOpen] = useState(false)

	const { data } = useFetchAuth()
	const id = data?.id
	const { data: user } = useFetchUser(id!)
	const profiles = user?.profiles
	const { mutate: patchProfile } = usePatchProfile()

	const handleSubmit = () => {
		const profile = profiles?.find((profile) => profile.id.toString() === selectedProfileId)

		try {
			patchProfile({
				id: id!.toString(),
				profileId: profile.id.toString(),
				data: {
					name: form.getValues('name'),
				},
			})
			setOpen(false)
		} catch (e: any) {
			alert(e.error.message)
			console.log('에러에러')
		}
	}

	useEffect(() => {
		if (profiles && selectedProfileId) {
			const selectedProfile = profiles.find((profile) => profile.id.toString() === selectedProfileId)
			if (selectedProfile) {
				form.reset({
					name: selectedProfile.name,
				})
			}
		}
	}, [profiles, selectedProfileId, form])

	return (
		<div className="mx-auto h-screen place-content-center max-w-wide">
			<div>
				<h1 className="!text-center Regular-LargeTitle">Manage your profile</h1>
				<div className="my-12 flex-wrap gap-8 flex-center">
					{profiles?.map((profile) => (
						<Dialog key={profile.id} open={open} onOpenChange={setOpen}>
							<DialogTrigger onClick={() => setSelectedProfileId(profile.id.toString())}>
								<ProfileEdit image={profile.image} name={profile.name} />
							</DialogTrigger>
							<DialogContent>
								<Form form={form} onSubmit={handleSubmit} className="flex-col gap-7 flex-center">
									<DialogHeader>
										<DialogTitle className="!text-center text-Primary/White">Change profile</DialogTitle>
									</DialogHeader>

									<div className="w-full gap-2 flex-center">
										<ProfileImg image={profile.image || img} className="size-12" />
										<div className="flex flex-1 flex-col gap-2">
											<Form.Item name="name">
												<InputText name="name" label="Name" className="bg-Grey/Grey-850 text-Primary/White" />
											</Form.Item>
											{/* <Form.Item name="gender">
												<Select label="Gender" items={['Male', 'Female', 'Other']} />
											</Form.Item> */}
										</div>
									</div>
								</Form>
								<DialogFooter>
									<DialogClose>
										<Button theme="white">save</Button>
										<Button theme="transparent" className="mt-2 !text-Primary/White">
											Cancellation
										</Button>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					))}
					<AddProfile />
				</div>

				<Link to="/profiles">
					<Button theme="outline" className="mx-auto h-[42px] max-w-[178px] Regular-Headline">
						Complete
					</Button>
				</Link>
			</div>
		</div>
	)
}
