import { Process } from '@widgets/setting/ui/process'
import { StepOne } from '@widgets/setting/ui/step-one'
import { StepThree } from '@widgets/setting/ui/step-three'
import { StepTwo } from '@widgets/setting/ui/step-two'
import { useState } from 'react'

export function SimpleSetting() {
	const [step, setStep] = useState(1)
	const [progress, setProgress] = useState(1)
	const onClickNext = () => {
		if (step === 3) return
		setStep(step + 1)
		scrollTo({ top: 1, behavior: 'smooth' })
		if (step !== 1) setProgress(progress + 50)
	}
	return (
		<div className="flex flex-col items-center">
			{step !== 0 && <Process step={step} progress={progress} setStep={setStep} setProgress={setProgress} />}

			{step === 1 && <StepOne onClickNext={onClickNext} />}
			{step === 2 && <StepTwo onClickNext={onClickNext} />}
			{step === 3 && <StepThree />}
		</div>
	)
}
