import CheckRing from '@icons/check-ring.svg?react'
import Checkmark from '@icons/checkmark.svg?react'
import Button from '@ui/button/button'

const texts = [
	`No contract, no penalty. Cancel\n anytime, coolly.`,
	`A world of endless content for\n one price.`,
	`Enjoy Netflix on all your\n devices.`,
]

interface StepTwo1Props {
	onClickNext: () => void
}

export function StepTwo1({ onClickNext }: StepTwo1Props) {
	return (
		<div className="min-h-screen w-fit flex-col flex-center">
			<CheckRing className="mb-6" />
			<p>2/3 단계</p>
			<h1 className="py-6 !text-center Medium-LargeTitle">
				Please select the
				<br />
				membership you want.
			</h1>
			<div>
				{texts.map((text, index) => (
					<p key={index} className="flex whitespace-pre-wrap pb-4 !font-light Regular-Title3">
						<Checkmark className="w-10 [&>path]:fill-Primary/Red" />
						{text}
					</p>
				))}
			</div>
			<Button onClick={onClickNext} className="mt-4 h-16 w-full Medium-Title2">
				next
			</Button>
		</div>
	)
}
