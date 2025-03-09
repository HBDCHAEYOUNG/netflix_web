import Clap from '@icons/clap.svg?react'
import Button from '@ui/button/button'

interface StepZeroProps {
	onClickNext: () => void
}
export function StepZero({ onClickNext }: StepZeroProps) {
	return (
		<div className="min-h-screen w-fit flex-col flex-center">
			<Clap className="mx-auto" />
			<h1 className="pt-6 Medium-LargeTitle">Congratulations on joining Netflix!</h1>
			<p className="pt-2 !text-center !font-light text-TransparentWhite/70% Regular-Title3">
				Your membership has started. <br /> You can cancel anytime in the 'Account' section.
			</p>
			<Button onClick={onClickNext} className="my-12 h-16 w-full max-w-[380px] Medium-Title2">
				next
			</Button>
		</div>
	)
}
