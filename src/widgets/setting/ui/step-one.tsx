import { zodResolver } from '@hookform/resolvers/zod'
import Person from '@icons/person.svg?react'
import Button from '@ui/button/button'
import Form from '@ui/form/form'
import { InputText } from '@ui/index'
import { useForm } from 'react-hook-form'
import { useFetchAuth } from 'src/shared/models/auth.model'
import { z } from 'zod'

interface StepOneProps {
	onClickNext: () => void
}

export function StepOne({ onClickNext }: StepOneProps) {
	const form = useForm({
		resolver: zodResolver(
			z.object({
				name: z.string().max(5, { message: '5자 이내로 입력해주세요.' }),
			}),
		),
		mode: 'all',
	})

	const { data } = useFetchAuth()
	const profileLength = data?.role < 2 ? 3 : 1

	const handleSubmit = () => {
		sessionStorage.setItem('profileData', JSON.stringify(form.getValues()))
		onClickNext()
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
				<Button type="submit" onClick={handleSubmit} className="h-16 w-full Medium-Title2">
					next
				</Button>
			</Form>
		</div>
	)
}
