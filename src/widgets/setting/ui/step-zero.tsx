import Clap from '@icons/clap.svg?react'
import Button from '@ui/button/button'

interface StepZeroProps {
	onClickNext: () => void
}
export function StepZero({ onClickNext }: StepZeroProps) {
	return (
		<div className="flex min-h-screen w-fit max-w-[380px] flex-col justify-center">
			<Clap className="mx-auto" />
			<h1 className="pt-6 Medium-LargeTitle">Congratulations on joining Netflix!</h1>
			<span className="pb-6 pt-2 !font-light text-TransparentWhite/70% Regular-Title3">
				Your membership has started. <br /> You can cancel anytime in the 'Account' section.
			</span>
			<Button onClick={onClickNext} className="h-16 w-full Medium-Title2">
				next
			</Button>
			0 : 축하드립니다 1 : 프로필등록 2 : 프로필 정보 추가 3 : 좋아하는 콘텐츠 선택 4 : 멤버쉽 시작
		</div>
	)
}
