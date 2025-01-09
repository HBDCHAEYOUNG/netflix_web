import { StepOne, StepZero, StepTwo } from '@widgets/setting'
import { useState } from 'react'

export function SimpleSetting() {
	const [step, setStep] = useState(0)
	const onClickNext = () => {
		setStep(step + 1)
	}
	return (
		<div className="flex-center">
			{step === 0 && <StepZero onClickNext={onClickNext} />}
			{step === 1 && <StepOne onClickNext={onClickNext} />}
			{step === 2 && <StepTwo onClickNext={onClickNext} />}
		</div>
	)
}
