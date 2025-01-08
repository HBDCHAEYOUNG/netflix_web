import Button from '@ui/button/button'

interface StepTwoProps {
	onClickNext: () => void
}

export function StepTwo({ onClickNext }: StepTwoProps) {
	return (
		<div>
			<Button onClick={onClickNext} className="h-16 w-full Medium-Title2">
				next
			</Button>
		</div>
	)
}
