import Button from '@ui/button/button'
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
		<div className="flex min-h-screen w-fit flex-col pt-24">
			<Button onClick={onClickNext} className="mt-6 h-16 w-full Medium-Title2">
				next
			</Button>
		</div>
	)
}
