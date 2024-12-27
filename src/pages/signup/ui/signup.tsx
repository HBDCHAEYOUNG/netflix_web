import Button from '@ui/button/button'
import { useState } from 'react'
import Checkmark from '@icons/checkmark.svg?react'

export function Signup() {
	const [step, setStep] = useState(0)

	const onClickNext = () => {
		setStep(step + 1)
	}

	return (
		<div className="h-screen flex-col flex-center">
			<p>{step === 0 ? 1 : step}/3 단계</p>
			{step === 0 && (
				<div>
					<h1 className="pb-6 pt-2 Medium-LargeTitle">계정 설정 마무리하기</h1>
					<p className="w-[280px] !text-center !font-light Regular-Title3">
						맞춤형 콘텐츠 서비스, 넷플릭스! 비밀번호를 설정하고 넷플릭스를 시청하세요.
					</p>
				</div>
			)}
			{step === 1 && (
				<div>
					<h1 className="pb-6 pt-2 Medium-LargeTitle">계정 설정 마무리하기</h1>
					<p className="w-[280px] !text-center !font-light Regular-Title3">
						맞춤형 콘텐츠 서비스, 넷플릭스! 비밀번호를 설정하고 넷플릭스를 시청하세요.
					</p>
				</div>
			)}
			{step === 2 && (
				<div className="flex-col flex-center">
					<h1 className="w-[230px] pb-6 pt-2 !text-center Medium-LargeTitle">원하는 멤버십을 선택하세요.</h1>
					{[
						'無약정, 無위약금. 해지도 쿨하게 언제든지.',
						'하나의 요금으로 즐기는 끝없는 콘텐츠의 세계.',
						'가지고 계신 모든 디바이스에서 넷플릭스를 즐겨보세요.',
					].map((text, index) => (
						<p key={index} className="mb-4 flex w-[280px] !font-light Regular-Title3">
							<Checkmark className="mr-4 size-10 [&>path]:fill-Primary/Red" />
							{text}
						</p>
					))}
				</div>
			)}
			{step === 3 && (
				<div className="w-9/12">
					<h1 className="pb-6 pt-2 Medium-LargeTitle">원하는 멤버십을 선택하세요.</h1>
					<p className="whitespace-pre-wrap">
						{`광고형 멤버십에 대해 자세히 알아보세요. 광고형 멤버십을 선택하면, 맞춤형 광고와 Netflix의 개인정보 처리방침에 부합하는 기타 목적을 위해 생년월일을 제공해 주셔야 합니다.

풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는 인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다. 모든 콘텐츠가 모든 화질로 제공되지는 않습니다. 자세한 내용은 이용 약관을 확인하세요.

함께 거주하는 사람들만 계정을 함께 이용할 수 있습니다. 스탠다드 멤버십은 추가 회원을 1명, 프리미엄은 최대 2명까지 등록할 수 있습니다. 자세히 알아보기. 프리미엄 멤버십은 동시접속 4명, 스탠다드 또는 광고형 스탠다드는 2명까지 가능합니다.

라이브 이벤트는 모든 넷플릭스 멤버십으로 이용 가능하며 광고가 포함됩니다.`}
					</p>
				</div>
			)}
			<Button onClick={onClickNext} className="mt-6 h-16 w-[340px] Medium-Title2">
				다음
			</Button>
		</div>
	)
}
