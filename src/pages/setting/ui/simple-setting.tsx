import { StepZero } from '@widgets/setting/ui/step-zero'
import { useState } from 'react'

export function SimpleSetting() {
	const [step, setStep] = useState(0)
	const onClickNext = () => {
		setStep(step + 1)
	}
	return (
		<div className="flex-center">
			<StepZero onClickNext={onClickNext} />
		</div>
	)
}
