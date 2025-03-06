import { cn } from '@lib/utils'
import CheckIcon from '@icons/checkmark.svg?react'
import { Progress } from '@ui/_shardcn/progress'
interface ProcessProps {
	step: number
	progress: number
	setStep: (step: number) => void
	setProgress: (progress: number) => void
}

export function Process({ step, progress, setStep, setProgress }: ProcessProps) {
	return (
		<div className="relative w-[400px] pb-12 pt-[68px] [&_*]:font-bold [&_*]:!text-Primary/Red [&_nav]:absolute [&_nav]:top-[56px] [&_nav]:z-50 [&_nav]:size-8 [&_nav]:rounded-full [&_nav]:bg-Primary/White [&_nav]:!text-Primary/Red [&_nav]:flex-center">
			<Progress value={progress} className="h-1 w-full" />
			<nav
				onClick={() => {
					setStep(1)
					setProgress(0)
				}}
				className={cn(
					`pointer-events-none flex-center`,
					(step === 2 || step === 3) && 'pointer-events-auto cursor-pointer !bg-Primary/Red',
				)}
			>
				{step === 2 || step === 3 ? <CheckIcon className="size-5 [&>path]:fill-Primary/White" /> : '01'}
			</nav>
			<nav
				onClick={() => {
					if (step === 3) {
						setStep(2)
						setProgress(50)
					}
				}}
				className={cn(
					`absolute left-[46%] size-8 cursor-pointer`,
					step === 3 && '!bg-Primary/Red',
					step !== 3 && 'pointer-events-none',
				)}
			>
				{step === 3 ? <CheckIcon className="size-5 [&>path]:fill-Primary/White" /> : '02'}
			</nav>

			<nav className="pointer-events-none left-[92%]">03</nav>
		</div>
	)
}
