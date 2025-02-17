import { ProfileEdit } from '@features/profile'
import Button from '@ui/button/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { DrawerClose, DrawerFooter, InputText } from '@ui/index'
import { ProfileImg } from '@ui/profile/profileImg'
import { AddProfile } from '@widgets/profile'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { UserProfileDto } from 'src/shared/api/data-contracts'
import { useFetchAuth } from 'src/shared/models/auth.model'
import { useFetchUser, usePatchProfile } from 'src/shared/models/user.model'

const img =
	'https://occ-0-1361-325.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229&quot'

export function ManagerProfiles() {
	const form = useForm()
	const [selectedProfileId, setSelectedProfileId] = useState<string>('')

	const { data } = useFetchAuth()
	const id = data?.id
	const { data: user } = useFetchUser(id!)
	const profiles = user?.profiles
	const { mutate: patchProfile } = usePatchProfile()

	const handleSubmit = (profile: UserProfileDto) => {
		try {
			patchProfile({
				id: id!.toString(),
				profileId: profile.id.toString(),
				data: {
					name: form.getValues('name'),
				},
			})
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
						<Dialog>
							<DialogTrigger onClick={() => setSelectedProfileId(profile.id.toString())}>
								<ProfileEdit image={profile.image || img} name={profile.name} />
							</DialogTrigger>
							<DialogContent>
								<Form form={form} onSubmit={(profile) => handleSubmit(profile)} className="flex-col gap-7 flex-center">
									<DialogHeader>
										<DialogTitle className="!text-center">Change profile</DialogTitle>
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
								<DrawerFooter>
									<DrawerClose>
										<Button theme="white">save</Button>
										<Button theme="transparent" className="mt-2">
											Cancellation
										</Button>
									</DrawerClose>
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
