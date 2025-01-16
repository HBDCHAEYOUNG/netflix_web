import { StepOne, StepZero, StepTwo, StepThree } from '@widgets/setting'
import { useState } from 'react'

export function SimpleSetting() {
	const [step, setStep] = useState(0)
	const onClickNext = () => {
		if (step === 3) return
		setStep(step + 1)
		scrollTo({ top: 0, behavior: 'smooth' })
	}
	return (
		<div className="flex-center">
			{step === 0 && <StepZero onClickNext={onClickNext} />}
			{step === 1 && <StepOne onClickNext={onClickNext} />}
			{step === 2 && <StepTwo onClickNext={onClickNext} />}
			{step === 3 && <StepThree />}
		</div>
	)
}
