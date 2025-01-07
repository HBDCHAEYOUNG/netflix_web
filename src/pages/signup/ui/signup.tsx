import { StepOne1, StepOne2, StepThree1, StepThree2, StepTwo1, StepTwo2 } from '@widgets/signup'
import { useState } from 'react'

export function Signup() {
	const [step, setStep] = useState(0)
	const [membership, setMembership] = useState('premium')
	const onClickNext = () => {
		if (step === 5) {
			setStep(0)
		} else {
			setStep(step + 1)
		}
	}
	return (
		<div className="flex-center">
			{step === 0 && <StepOne1 onClickNext={onClickNext} />}
			{step === 1 && <StepOne2 onClickNext={onClickNext} />}
			{step === 2 && <StepTwo1 onClickNext={onClickNext} />}
			{step === 3 && <StepTwo2 membership={membership} setMembership={setMembership} onClickNext={onClickNext} />}
			{step === 4 && <StepThree1 setStep={setStep} />}
			{step === 5 && <StepThree2 membership={membership} setStep={setStep} onClickNext={onClickNext} />}
		</div>
	)
}
