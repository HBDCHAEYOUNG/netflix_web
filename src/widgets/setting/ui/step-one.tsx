import Button from '@ui/button/button'
import Form from '@ui/form/form'
import { InputText } from '@ui/index'
import { useForm } from 'react-hook-form'
import Person from '@icons/person.svg?react'

interface StepOneProps {
	onClickNext: () => void
}

export function StepOne({ onClickNext }: StepOneProps) {
	const form = useForm()
	return (
		<div className="mt-24 flex min-h-screen w-fit max-w-[400px] flex-col justify-center">
			<h1 className="Medium-LargeTitle">Register your Netflix profile</h1>
			<p className="my-6 text-TransparentWhite/70% Regular-Title3">
				Add up to 5 profiles for people living together and enjoy the benefits next time
			</p>
			<ol className="[&>li]:text-TransparentWhite/70% [&>li]:Regular-Title4">
				<li>• Personalized content recommendations</li>
				<li>• Different settings for each viewer</li>
				<li>• Personalized experience for each individual</li>
			</ol>
			<Form form={form} onSubmit={() => {}}>
				<h2 className="my-6">My profile</h2>
				<div className="flex-center">
					<Person className="size-10 [&>*]:stroke-Primary/White" />
					<Form.Item name="myprofile" label="Email" className="ml-2 w-full">
						<InputText label="name" />
					</Form.Item>
				</div>
				<h2 className="my-6">Would you like to add a profile?</h2>
				{Array.from({ length: 4 }).map((_, index) => (
					<div className="mb-2 flex-center">
						<Person className="size-10 [&>*]:stroke-Primary/White" />
						<Form.Item name={`profile${index + 1}`} className="ml-2 w-full">
							<InputText label="name" />
						</Form.Item>
					</div>
				))}
			</Form>
			<div className="my-6 w-full rounded-md bg-Grey/Grey-800 px-4 py-4">Only people who live together can use your account</div>
			<Button onClick={onClickNext} className="my-6 h-16 w-full Medium-Title2">
				next
			</Button>
		</div>
	)
}
