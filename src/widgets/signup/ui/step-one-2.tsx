import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@ui/button/button'
import Form from '@ui/form/form'
import { CheckboxBasic, InputText } from '@ui/index'
import { useForm } from 'react-hook-form'
import { signupSchema, SignupSchemaType } from '../model/signup.schema'

interface StepOne2Props {
	setStep: (step: number) => void
}

const formLabels = {
	inputs: [
		{ name: 'email', label: 'Email' },
		{ name: 'password', label: 'Add Your Password' },
	],
	checkboxes: [
		{
			name: 'poricyAgreement',
			label: 'Yes, I agree to the collection and use of my personal information in accordance with the Netflix Privacy Policy.',
		},
		{ name: 'termsAgreement', label: 'Yes, please send me emails notifying me of Netflix special offers. (Optional)' },
	],
}

export function StepOne2({ setStep }: StepOne2Props) {
	const form = useForm<SignupSchemaType>({
		resolver: zodResolver(signupSchema),
		mode: 'all',
		defaultValues: {
			email: sessionStorage.getItem('email') || '',
		},
	})

	const handleSubmit = () => {
		setStep(2)
	}

	return (
		<div className="flex min-h-screen w-fit flex-col justify-center">
			<p>1/3 단계</p>
			<div className="w-[440px]">
				<h1 className="pb-6 pt-2 Medium-LargeTitle">Start your membership by setting a password</h1>
				<p className="mb-6 !font-light Regular-Title3">
					Complete your Netflix subscription in just a few more steps! <br />
					All the complicated steps are gone.
				</p>
				<Form form={form} onSubmit={handleSubmit}>
					{formLabels.inputs.map(({ name, label }) => (
						<Form.Item key={name} name={name}>
							<InputText name={name} label={label} className="mt-2 h-[56px]" />
						</Form.Item>
					))}
					{formLabels.checkboxes.map(({ name, label }) => (
						<Form.Item key={name} name={name}>
							<CheckboxBasic label={label} labelClassName="Regular-Headline" size="!size-8" className="mt-6 items-start" />
						</Form.Item>
					))}
					<Button type="submit" className="mt-6 h-16 w-full Medium-Title2">
						next
					</Button>
				</Form>
			</div>
		</div>
	)
}
