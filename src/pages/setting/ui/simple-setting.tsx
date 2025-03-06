import { StepOne, StepThree, StepTwo, StepZero } from '@widgets/setting'
import { Process } from '@widgets/setting/ui/process'
import { useState } from 'react'

export function SimpleSetting() {
	const [step, setStep] = useState(0)
	const [progress, setProgress] = useState(0)
	const onClickNext = () => {
		if (step === 3) return
		setStep(step + 1)
		scrollTo({ top: 0, behavior: 'smooth' })
		if (step !== 0) setProgress(progress + 50)
	}
	return (
		<div className="flex flex-col items-center">
			{step !== 0 && <Process step={step} progress={progress} setStep={setStep} setProgress={setProgress} />}

			{step === 0 && <StepZero onClickNext={onClickNext} />}
			{step === 1 && <StepOne onClickNext={onClickNext} />}
			{step === 2 && <StepTwo onClickNext={onClickNext} />}
			{step === 3 && <StepThree />}
		</div>
	)
}
