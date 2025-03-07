import Lock from '@icons/lock.svg?react'
import usePortOne from '@lib/use-port-one'
import Button from '@ui/button/button'
import { useFetchAuth } from 'src/shared/models/auth.model'
import { usePatchUser } from 'src/shared/models/user.model'

interface StepThree1Props {
	setStep: (value: number) => void
	membership: string
	onClickNext: () => void
}

export function StepThree1({ setStep, membership, onClickNext }: StepThree1Props) {
	usePortOne()

	const { data: me } = useFetchAuth()
	const { mutateAsync: patchUser } = usePatchUser()

	const handlePayment = () => {
		const IMP = window.IMP

		const amount = membership === '1' ? 17000 : membership === '2' ? 13500 : 5500

		IMP.request_pay(
			{
				channelKey: 'channel-key-ca778845-0368-4e1d-9caf-cb3276f661d0', // 콘솔에서 확인한 채널키 사용
				pay_method: 'card',
				merchant_uid: `payment-${crypto.randomUUID()}`,
				name: membership === '1' ? 'Premium 멤버십' : membership === '2' ? 'Standard 멤버십' : 'Advertising 멤버십',
				amount: amount,
				// buyer_email: 'example@email.com',  // 구매자 이메일
				// buyer_name: '구매자이름',          // 구매자 이름
				// buyer_tel: '010-1234-5678',      // 구매자 전화번호
			},
			async (response) => {
				if (response.success) {
					// 결제 성공 시 처리
					if (!me) return
					await patchUser({
						id: me.id,
						data: { role: membership as UpdateUserDtoRoleEnumDto },
					})
					console.log('결제 성공:', response)
					onClickNext()
				} else {
					// 결제 실패 시 처리
					console.log('결제 실패:', response.error_msg)
				}
			},
		)
	}

	return (
		<div className="min-h-screen w-fit flex-col gap-6 flex-center">
			<Lock />
			<p>3/3 단계</p>
			<h1 className="Medium-LargeTitle">Select payment method</h1>
			<p className="!text-center !font-light text-TransparentWhite/50% Regular-Title3">
				Your payment information is encrypted and you can <br /> change your payment method at any time.
				<span className="block pt-4 font-semibold text-TransparentWhite/70%">
					Enjoy with confidence. <br /> Cancel easily online.
				</span>
			</p>

			<Button
				theme="outline"
				onClick={() => setStep(3)}
				className="h-full !place-content-between px-4 py-4 text-TransparentWhite/70% Regular-Title4 [&>p]:hover:underline"
			>
				<span className="flex flex-col Medium-Headline">
					{membership === '1' ? '17,000' : membership === '2' ? '13,500' : '5,500'}won per month
					<p className="mt-1 text-Grey/Grey-25 Regular-Body">
						{membership === '1' ? 'Premium' : membership === '2' ? 'Standard' : 'Advertising'}
					</p>
				</span>
				<p className="cursor-pointer text-Secondary/Blue-200 Regular-Headline">change</p>
			</Button>

			<Button type="submit" onClick={handlePayment} className="h-16 w-full Medium-Title2">
				Start Paid Membership
			</Button>
		</div>
	)
}
