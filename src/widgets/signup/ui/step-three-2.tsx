import Button from '@ui/button/button'
import Form from '@ui/form/form'
import { CheckboxBasic, InputText } from '@ui/index'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UpdateUserDtoRoleEnumDto } from 'src/shared/api/data-contracts'
import { useFetchAuth } from 'src/shared/models/auth.model'
import { usePatchUser } from 'src/shared/models/user.model'

const inputItems = [
	{ name: 'cardNumber', label: 'Card Number' },
	{ name: 'period', label: 'Expiration period' },
	{ name: 'name', label: 'name' },
	{ name: 'birthDate', label: 'Birth date' },
]

const checkboxItems = [
	{
		name: 'allAgreement',
		label: 'I am 19 years of age or older and agree to all of the terms and conditions below.',
		className: 'border-y border-Grey/Grey-250 py-6',
		labelClassName: 'text-Primary/White',
	},
	{
		name: 'termsAgreement',
		label: 'I agree to the Netflix terms of use and Privacy Policy.',
		className: 'pt-6',
	},
	{
		name: 'privacyAgreement',
		label: 'I agree to provide my personal information to third parties',
		className: 'pt-2',
	},
	{
		name: 'marketingAgreement',
		label:
			"If you do not cancel your membership, your Netflix membership will automatically continue, and the membership fee (currently 17,000 won) will be charged monthly to your registered payment method. You can cancel your membership at any time on the 'Account' page of www.netflix.com. In this case, your membership will be canceled at the end of the billing cycle, and you will continue to use the service for the remaining period. However, if you cancel your membership immediately without using Netflix content through your account within 7 days of the billing date, you can request a full refund of the membership fee charged for that billing cycle.",
		className: 'py-2 ',
	},
]
interface StepThree2Props {
	membership: string
	setStep: (value: number) => void
	onClickNext: () => void
}

export function StepThree2({ membership, setStep, onClickNext }: StepThree2Props) {
	const form = useForm()
	const navigate = useNavigate()

	const { data: me } = useFetchAuth()
	const { mutateAsync: patchUser } = usePatchUser()

	const handleSubmit = async () => {
		try {
			if (!me) return
			await patchUser({
				id: me.id,
				data: { role: membership as UpdateUserDtoRoleEnumDto },
			})

			onClickNext()
			navigate('/auth/simple-setting')
		} catch (error) {
			console.error(error)
		}
	}

	console.log(me)
	return (
		<div className="flex min-h-screen w-fit max-w-[440px] flex-col pb-40 pt-24">
			<p>3/3 단계</p>
			<h1 className="pb-6 pt-2 Medium-LargeTitle">Register a credit or check card</h1>
			<Form form={form} onSubmit={handleSubmit} className="flex flex-col gap-2">
				{inputItems.map((item) => (
					<Form.Item key={item.name} name={item.name}>
						<InputText name={item.name} label={item.label} className="h-[56px]" />
					</Form.Item>
				))}

				<div className="mb-6 flex w-full items-center justify-between rounded-md bg-Grey/Grey-850 px-4 py-4">
					<span className="flex flex-col Medium-Headline">
						{membership === '3' ? '17,000' : membership === '2' ? '13,500' : '5,500'}won per month
						<p className="mt-1 text-Grey/Grey-25 Regular-Body">
							{membership === '3' ? 'Premium' : membership === '2' ? 'Standard' : 'Advertising'}
						</p>
					</span>
					<p className="cursor-pointer text-Secondary/Blue-200 Regular-Headline" onClick={() => setStep(3)}>
						change
					</p>
				</div>

				{checkboxItems.map((item) => (
					<Form.Item key={item.name} name={item.name} className={item.className}>
						<CheckboxBasic
							label={item.label}
							labelClassName={`Regular-Headline text-TransparentWhite/70% ${item.labelClassName}`}
							size="!size-8"
							className="items-start"
						/>
					</Form.Item>
				))}
				<Button type="submit" className="mt-6 h-16 w-full Medium-Title2">
					Start Paid Membership
				</Button>
			</Form>
		</div>
	)
}
