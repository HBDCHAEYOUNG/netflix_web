import { ProfileAdd } from '@features/profile'
import { zodResolver } from '@hookform/resolvers/zod'
import { avatars } from '@pages/profile/const/profiles'
import Button from '@ui/button/button'
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { Dialog, DialogTrigger, InputText } from '@ui/index'
import { ProfileImg } from '@ui/profile/profileImg'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useFetchAuth } from 'src/shared/models/auth.model'
import { usePostProfile } from 'src/shared/models/user.model'
import { z } from 'zod'

export function AddProfile() {
	const form = useForm({
		resolver: zodResolver(
			z.object({
				name: z.string().max(5, { message: '5자 이내로 입력해주세요.' }),
			}),
		),
		mode: 'all',
	})

	const { data } = useFetchAuth()
	const id = data?.id
	const { mutate: postProfile } = usePostProfile()
	const [open, setOpen] = useState(false)
	const [randomAvatar] = useState(avatars[Math.floor(Math.random() * avatars.length)])

	const handleSubmit = () => {
		if (data?.role < 2 && data?.profiles.length === 4) {
			setOpen(false)
			alert('프로필은 최대 4개까지 생성할 수 있습니다.')
			return
		}
		if (data?.role > 1 && data?.profiles.length === 2) {
			setOpen(false)
			alert('프로필은 최대 4개까지 생성할 수 있습니다.')
			return
		}
		try {
			postProfile({
				id: id!,
				data: {
					name: form.getValues('name'),
					avatar: randomAvatar,
				},
			})
			form.reset()
			alert('프로필 추가 완료')
		} catch (e: any) {
			alert(e.error.message)
			console.log('에러에러')
		}
	}

	return (
		<div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<ProfileAdd />
				</DialogTrigger>
				<DialogContent>
					<Form form={form} onSubmit={handleSubmit} className="flex-col gap-7 flex-center">
						<DialogHeader>
							<DialogTitle className="!text-center !text-Primary/White">Add Profile</DialogTitle>
							<DialogDescription className="!text-Primary/White Regular-Body">
								Add a profile to register other users to watch Netflix.
							</DialogDescription>
						</DialogHeader>

						<ProfileImg image={randomAvatar} className="w-16" />
						<Form.Item name="name" className="w-full">
							<InputText name="name" label="Name" className="bg-Grey/Grey-850" />
						</Form.Item>
					</Form>
					<DialogFooter>
						<DialogClose asChild>
							<Button type="submit" theme="white" onClick={handleSubmit}>
								save
							</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button theme="secondary" className="!text-Primary/White" onClick={() => form.reset()}>
								Cancellation
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}
