import { cn } from '@lib/utils'
import { Progress } from '@ui/_shardcn/progress'
import { StepOne, StepZero, StepTwo, StepThree } from '@widgets/setting'
import { useState } from 'react'
import CheckIcon from '@icons/checkmark.svg?react'

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
			{step !== 0 && (
				<div className="relative w-[400px] pb-12 pt-[68px]">
					<Progress value={progress} className="h-1 w-full" />
					<div
						onClick={() => {
							setStep(1)
							setProgress(0)
						}}
						className={cn(
							`pointer-events-none absolute top-[56px] z-50 size-8 rounded-full bg-Primary/White !text-Primary/Red flex-center`,
							(step === 2 || step === 3) && 'pointer-events-auto cursor-pointer bg-Primary/Red',
						)}
					>
						{step === 2 || step === 3 ? <CheckIcon className="size-5 [&>path]:fill-Primary/White" /> : '01'}
					</div>
					<div
						onClick={() => {
							if (step === 3) {
								setStep(2)
								setProgress(50)
							}
						}}
						className={cn(
							`absolute left-[46%] top-[56px] z-50 size-8 cursor-pointer rounded-full bg-Primary/White !text-Primary/Red flex-center`,
							step === 3 && 'bg-Primary/Red',
							step !== 3 && 'pointer-events-none',
						)}
					>
						{step === 3 ? <CheckIcon className="size-5 [&>path]:fill-Primary/White" /> : '02'}
					</div>

					<div className="pointer-events-none absolute left-[92%] top-[56px] z-50 size-8 rounded-full bg-Primary/White !text-Primary/Red flex-center">
						03
					</div>
				</div>
			)}

			{step === 0 && <StepZero onClickNext={onClickNext} />}
			{step === 1 && <StepOne onClickNext={onClickNext} />}
			{step === 2 && <StepTwo onClickNext={onClickNext} />}
			{step === 3 && <StepThree />}
		</div>
	)
}
