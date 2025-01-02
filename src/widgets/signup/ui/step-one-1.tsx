import Devices from '@icons/devices.svg?react'
import Button from '@ui/button/button'

interface StepOne1Props {
	onClickNext: () => void
}

export function StepOne1({ onClickNext }: StepOne1Props) {
	return (
		<div>
			<Devices className="mb-6" />
			<p>1/3 단계</p>
			<h1 className="my-2 Medium-LargeTitle">
				Finish setting up your <br /> account
			</h1>
			<p className="mb-6 !font-light Regular-Title3">
				Customized content service, Netflix! <br /> Set a password and watch Netflix.
			</p>

			<Button onClick={onClickNext} className="h-16 w-full Medium-Title2">
				next
			</Button>
		</div>
	)
}
