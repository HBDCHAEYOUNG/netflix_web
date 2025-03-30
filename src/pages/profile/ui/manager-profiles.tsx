import { ProfileEdit } from '@features/profile'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@ui/button/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { InputText } from '@ui/index'
import { ProfileImg } from '@ui/profile/profileImg'
import { AddProfile } from '@widgets/profile'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useFetchAuth } from 'src/shared/models/auth.model'
import { useDeleteProfile, usePatchProfile } from 'src/shared/models/user.model'
import { z } from 'zod'

export function ManagerProfiles() {
	const form = useForm({
		resolver: zodResolver(
			z.object({
				name: z
					.string()
					.max(10, { message: '10글자 이하로 입력해주세요' })
					.min(1, { message: '1글자 이상 입력해주세요' }),
			}),
		),
	})
	const [selectedProfileId, setSelectedProfileId] = useState<string>('')

	const [open, setOpen] = useState(false)

	const { data } = useFetchAuth()
	const id = data?.id
	const { mutateAsync: patchProfile } = usePatchProfile()
	const { mutateAsync: deleteProfile } = useDeleteProfile()

	const handleSubmit = async () => {
		try {
			await patchProfile({
				profileId: Number(selectedProfileId),
				id: id!,
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

	const handleDeleteProfile = () => {
		if (confirm('삭제할거야?')) {
			try {
				deleteProfile({ id: id!, profileId: Number(selectedProfileId) })
			} catch (e: any) {
				alert(e.error.message)
				console.log('에러에러')
			}
		}
	}

	useEffect(() => {
		if (data?.profiles && selectedProfileId) {
			const selectedProfile = data?.profiles.find((profile: any) => profile.id.toString() === selectedProfileId)
			if (selectedProfile) {
				form.reset({
					name: selectedProfile.name,
				})
			}
		}
	}, [data?.profiles, selectedProfileId, form])

	return (
		<div className="mx-auto h-screen place-content-center max-w-wide">
			<div>
				<h1 className="!text-center Regular-LargeTitle">Manage your profile</h1>
				<div className="my-12 flex-wrap gap-8 flex-center">
					{data?.profiles?.map((profile: any) => (
						<Dialog key={profile.id} open={open} onOpenChange={setOpen}>
							<DialogTrigger onClick={() => setSelectedProfileId(profile.id.toString())}>
								<ProfileEdit image={profile.avatar} name={profile.name} />
							</DialogTrigger>
							<DialogContent>
								<Form form={form} onSubmit={handleSubmit} className="flex-col gap-7 flex-center">
									<DialogHeader>
										<DialogTitle className="!text-center text-Primary/White">Change profile</DialogTitle>
									</DialogHeader>

									<div className="w-full gap-2 flex-center">
										<ProfileImg image={profile.avatar} className="size-12" />
										<div className="flex flex-1 flex-col gap-2">
											<Form.Item name="name">
												<InputText name="name" label="Name" className="bg-Grey/Grey-850 text-Primary/White" />
											</Form.Item>
										</div>
									</div>
									<DialogFooter className="w-full">
										<div className="flex gap-2">
											<DialogClose asChild>
												<Button type="submit" theme="white">
													save
												</Button>
											</DialogClose>
											<DialogClose asChild>
												<Button theme="primary" className="!text-Primary/White" onClick={handleDeleteProfile}>
													profile delete
												</Button>
											</DialogClose>
										</div>

										<DialogClose asChild>
											<Button theme="secondary" className="!text-Primary/White" onClick={() => form.reset()}>
												Cancellation
											</Button>
										</DialogClose>
									</DialogFooter>
								</Form>
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
