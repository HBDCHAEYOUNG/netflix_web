import { ProfileAdd } from '@features/profile'
import { zodResolver } from '@hookform/resolvers/zod'
import { profiles } from '@pages/profile/const/profiles'
import Button from '@ui/button/button'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { Dialog, DialogTrigger, InputText } from '@ui/index'
import { ProfileImg } from '@ui/profile/profileImg'
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
	})

	const { data } = useFetchAuth()
	const id = data?.id
	const { mutate: postProfile } = usePostProfile()

	const handleSubmit = () => {
		postProfile({
			id: id!,
			data: {
				name: form.getValues('name'),
				avatar:
					'https://occ-0-1361-325.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229&quot',
			},
		})
		form.reset()
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
							<DialogTitle className="!text-center !text-Primary/White">Add Profile</DialogTitle>
							<DialogDescription className="!text-Primary/White Regular-Body">
								Add a profile to register other users to watch Netflix.
							</DialogDescription>
						</DialogHeader>

						<ProfileImg image={profiles[0].image} className="w-16" />
						<Form.Item name="name" className="w-full">
							<InputText name="name" label="Name" className="bg-Grey/Grey-850" />
						</Form.Item>
						{/* <Form.Item name="child" className="w-full">
							<Switch name="child" label="Kides Profile" description="Show only children's series and movies" id="child" />
						</Form.Item> */}
					</Form>
					<DialogFooter>
						<DialogClose>
							<Button theme="white">save</Button>
							<Button theme="transparent" className="mt-2 !text-Primary/White" onClick={() => form.reset()}>
								Cancellation
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}
