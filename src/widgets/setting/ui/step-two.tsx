import Button from '@ui/button/button'
import Form from '@ui/form/form'
import { CheckboxBasic, Select } from '@ui/index'
import { useForm } from 'react-hook-form'

interface StepTwoProps {
	onClickNext: () => void
}

export function StepTwo({ onClickNext }: StepTwoProps) {
	const form = useForm()
	return (
		<div className="flex min-h-screen max-w-[400px] flex-col justify-center pt-24">
			<h1 className="Medium-LargeTitle">Let's add some information to Woohyuk's profile</h1>
			<p className="my-6 !font-normal text-TransparentWhite/70% Regular-Title3">
				Just let us know a few things for personalized ads, viewing ratings settings, and other purposes in line with Netflix's policies.
			</p>
			<Form form={form} onSubmit={() => {}}>
				<h3 className="mb-6 Regular-Title3">Date of Birth</h3>
				<Form.Item name="day" className="mb-2">
					<Select
						label="Day"
						items={Array.from({ length: 31 }, (_, i) => i + 1).map((item) => item.toString())}
						itemClassName="text-Primary/White"
					/>
				</Form.Item>
				<Form.Item name="month" className="mb-2">
					<Select
						label="Month"
						items={[
							'January',
							'February',
							'March',
							'April',
							'May',
							'June',
							'July',
							'August',
							'September',
							'October',
							'November',
							'December',
						]}
						itemClassName="text-Primary/White"
					/>
				</Form.Item>
				<Form.Item name="year" className="mb-2">
					<Select
						label="Year"
						items={Array.from({ length: 100 }, (_, i) => 2025 - i).map((item) => item.toString())}
						itemClassName="text-Primary/White"
					/>
				</Form.Item>
				<h3 className="my-6 Regular-Title3">Gender</h3>
				<Form.Item name="gender" className="mb-6">
					<Select label="Gender" items={['Male', 'Female', 'Other']} itemClassName="text-Primary/White" />
				</Form.Item>

				<Form.Item name="agree">
					<CheckboxBasic
						label="I agree to provide information for personalized ads, viewing ratings settings, and other purposes in accordance with Netflix's Privacy Policy"
						labelClassName="Regular-Headline text-TransparentWhite/70%"
						size="!size-8"
						className="items-start"
					/>
				</Form.Item>
			</Form>
			<Button onClick={onClickNext} className="mt-12 h-16 w-full Medium-Title2">
				next
			</Button>
		</div>
	)
}
