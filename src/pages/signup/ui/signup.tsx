import { StepOne1, StepOne2, StepThree1, StepThree2, StepTwo1, StepTwo2 } from '@widgets/signup'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Signup() {
	const [step, setStep] = useState(0)
	const [membership, setMembership] = useState('premium')

	const navigate = useNavigate()

	const onClickNext = () => {
		console.log('호호잇')
		if (step === 5) {
			navigate('/simple-settings')
		} else {
			setStep(step + 1)
			scrollTo({ top: 0, behavior: 'smooth' })
		}
	}
	return (
		<div className="flex-center">
			{step === 0 && <StepOne1 onClickNext={onClickNext} />}
			{step === 1 && <StepOne2 setStep={setStep} />}
			{step === 2 && <StepTwo1 onClickNext={onClickNext} />}
			{step === 3 && <StepTwo2 membership={membership} setMembership={setMembership} onClickNext={onClickNext} />}
			{step === 4 && <StepThree1 setStep={setStep} />}
			{step === 5 && <StepThree2 membership={membership} setStep={setStep} onClickNext={onClickNext} />}
		</div>
	)
}
