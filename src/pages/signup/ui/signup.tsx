import { StepOne1, StepOne2, StepThree1, StepThree2, StepTwo1, StepTwo2 } from '@widgets/signup'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Signup() {
	const location = useLocation()
	const [step, setStep] = useState(0)
	const [membership, setMembership] = useState('3')
	const navigate = useNavigate()

	const onClickNext = () => {
		if (step === 5) {
			navigate('/simple-settings')
		} else {
			setStep(step + 1)
			console.log('next page!')
			scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	useEffect(() => {
		if (location.state?.initialStep !== undefined) {
			setStep(location.state.initialStep)
		}
	}, [location.state])

	return (
		<div className="flex-center">
			{step === 0 && <StepOne1 onClickNext={onClickNext} />}
			{step === 1 && <StepOne2 setStep={setStep} />}
			{step === 2 && <StepTwo1 onClickNext={onClickNext} />}
			{step === 3 && <StepTwo2 membership={membership} setMembership={setMembership} onClickNext={onClickNext} />}
			{step === 4 && <StepThree1 setStep={setStep} membership={membership} onClickNext={onClickNext} />}
			{step === 5 && <StepThree2 membership={membership} onClickNext={onClickNext} />}
		</div>
	)
}

export default Signup
