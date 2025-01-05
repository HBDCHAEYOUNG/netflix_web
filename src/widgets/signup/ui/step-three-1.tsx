import ArrowRight from '@icons/arrow-right.svg?react'
import Lock from '@icons/lock.svg?react'
import Button from '@ui/button/button'

interface StepThree1Props {
	setStep: (value: number) => void
}

const paymentOptions = ['Credit or check card', 'Easy payment', "Integrate into your carrier's rates"]

export function StepThree1({ setStep }: StepThree1Props) {
	return (
		<div className="min-h-screen w-fit flex-col flex-center">
			<Lock />
			<h1 className="py-6 Medium-LargeTitle">Select payment method</h1>
			<p className="pb-6 !text-center !font-light text-TransparentWhite/50% Regular-Title3">
				Your payment information is encrypted and you can <br /> change your payment method at any time.
				<span className="block pt-4 font-semibold text-TransparentWhite/70%">
					Enjoy with confidence. <br /> Cancel easily online.
				</span>
			</p>

			{paymentOptions.map((option, index) => (
				<Button
					key={index}
					theme="outline"
					onClick={() => setStep(5)}
					className="mt-2 h-full !place-content-between px-4 py-6 text-TransparentWhite/70% Regular-Title4"
				>
					{option}
					<ArrowRight className="size-5" />
				</Button>
			))}
		</div>
	)
}
