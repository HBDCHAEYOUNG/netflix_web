import { StepTwo1 } from '@widgets/signup/ui/step-two-1'
import { useState } from 'react'

export function SignupTest() {
	const [step, setStep] = useState(0)
	// const [payment, setPayment] = useState('premium')

	const onClickNext = () => {
		if (step === 5) {
			setStep(0)
		} else {
			setStep(step + 1)
		}
	}

	return (
		<div className="min-h-screen w-fit flex-col flex-center">
			<StepTwo1 onClickNext={onClickNext} />
		</div>
	)
}
