import { zodResolver } from '@hookform/resolvers/zod'
import Person from '@icons/person.svg?react'
import Button from '@ui/button/button'
import Form from '@ui/form/form'
import { InputText } from '@ui/index'
import { useForm } from 'react-hook-form'
import { useFetchAuth } from 'src/shared/models/auth.model'
import { usePostProfile } from 'src/shared/models/user.model'
import { z } from 'zod'

interface StepOneProps {
	onClickNext: () => void
}

export function StepOne({ onClickNext }: StepOneProps) {
	const { data } = useFetchAuth()
	const { mutate: postProfile } = usePostProfile()

	const id = data?.id
	const profileLength = data?.role < 2 ? 3 : 1

	const form = useForm({
		resolver: zodResolver(
			z.object({
				profile1: z
					.string({ message: 'please enter your name' })
					.min(1, { message: 'please enter your name' })
					.max(5, { message: '5 characters or less' }),
				profile2: z.string().max(5, { message: '5 characters or less' }).optional(),
				profile3: z.string().max(5, { message: '5 characters or less' }).optional(),
				profile4: z.string().max(5, { message: '5 characters or less' }).optional(),
			}),
		),
		mode: 'all',
	})

	const handleSubmit = () => {
		try {
			// First profile (required)
			postProfile({
				id: id!,
				data: {
					name: form.getValues('profile1'),
					avatar:
						'https://occ-0-1361-325.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229&quot',
				},
			})

			// Additional profiles (optional)
			for (let i = 2; i <= profileLength + 1; i++) {
				const profileName = form.getValues(`profile${i}`)
				if (profileName) {
					postProfile({
						id: id!,
						data: {
							name: profileName,
							avatar:
								'https://occ-0-1361-325.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229&quot',
						},
					})
				}
			}
			onClickNext()
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className="flex min-h-screen w-fit max-w-[400px] flex-col justify-center gap-6">
			<h1 className="Medium-LargeTitle">Register your Netflix profile</h1>
			<p className="text-TransparentWhite/70% Regular-Title3">
				Add up to 5 profiles for people living together and enjoy the benefits next time
			</p>
			<ol className="[&>li]:text-TransparentWhite/70% [&>li]:Regular-Title4">
				<li>• Personalized content recommendations</li>
				<li>• Different settings for each viewer</li>
				<li>• Personalized experience for each individual</li>
			</ol>
			<Form form={form} onSubmit={handleSubmit} className="flex flex-col gap-6">
				<h2>My profile</h2>
				<div className="flex-center">
					<Person className="size-10 [&>*]:stroke-Primary/White" />
					<Form.Item name="profile1" className="ml-2 w-full">
						<InputText label="name" />
					</Form.Item>
				</div>
				<h2>Would you like to add a profile?</h2>
				{Array.from({ length: profileLength }).map((_, index) => (
					<div className="mb-2 flex-center">
						<Person className="size-10 [&>*]:stroke-Primary/White" />
						<Form.Item name={`profile${index + 2}`} className="ml-2 w-full">
							<InputText label="name" />
						</Form.Item>
					</div>
				))}
				<div className="w-full rounded-md bg-Grey/Grey-800 px-4 py-4">
					Only people who live together can use your account
				</div>
				<Button type="submit" className="h-16 w-full Medium-Title2">
					next
				</Button>
			</Form>
		</div>
	)
}
