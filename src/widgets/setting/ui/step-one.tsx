import Button from '@ui/button/button'

interface StepOneProps {
	onClickNext: () => void
}

export function StepOne({ onClickNext }: StepOneProps) {
	return (
		<div>
			<Button onClick={onClickNext} className="h-16 w-full Medium-Title2">
				next
			</Button>
		</div>
	)
}
