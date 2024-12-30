import Button from '@ui/button/button'
import { useState } from 'react'
import Checkmark from '@icons/checkmark.svg?react'
import ArrowRight from '@icons/arrow-right.svg?react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/_shardcn/tabs'
import { cn } from '@lib/utils'
import Form from '@ui/form/form'
import { useForm } from 'react-hook-form'
import { CheckboxBasic, InputText } from '@ui/index'

const membership = [
	{
		type: 'advertising',
		price: '5,500 won',
		picture: 'well',
		resolution: '1080p(Full HD)',
		supportedDevices: 'TV, computer, smartphone, tablet',
		concurrentUsers: '2',
		storageDevice: '2',
		advertisement: 'Fewer ads than you might think',
	},
	{
		type: 'standard',
		price: '13,500 won',
		picture: 'well',
		resolution: '1080p(Full HD)',
		supportedDevices: 'TV, computer, smartphone, tablet',
		concurrentUsers: '2',
		storageDevice: '2',
		advertisement: 'No Advertisement',
	},
	{
		type: 'premium',
		price: '17,000 won',
		picture: 'The best',
		resolution: '4K(UHD) + HDR',
		supportedDevices: 'TV, computer, smartphone, tablet',
		concurrentUsers: '4',
		storageDevice: '6',
		advertisement: 'No Advertisement',
	},
]
const fields = [
	{ label: 'Monthly fee', key: 'price' },
	{ label: 'Picture and sound quality', key: 'picture' },
	{ label: 'Resolution', key: 'resolution' },
	{ label: 'Supported devices', key: 'supportedDevices' },
	{ label: `Number of concurrent users\n among household members`, key: 'concurrentUsers' },
	{ label: 'Storage device', key: 'storageDevice' },
	{ label: 'Advertisement', key: 'advertisement' },
]

export function Signup() {
	const [step, setStep] = useState(0)
	const [payment, setPayment] = useState('premium')

	const form = useForm()

	const onClickNext = () => {
		if (step === 5) {
			setStep(0)
		} else {
			setStep(step + 1)
		}
	}

	return (
		<div className={cn('h-full min-h-screen flex-col flex-center', step === 5 && 'pt-24')}>
			<p>
				{step === 0 || step === 1 ? 1 : step === 2 || step === 3 ? 2 : step === 4 || step === 5 ? 3 : 0}
				/3 단계
			</p>
			{step === 0 && (
				<div>
					<h1 className="pb-6 pt-2 !text-center Medium-LargeTitle">Finish setting up your account</h1>
					<p className="!text-center !font-light Regular-Title3">
						Customized content service, Netflix! <br /> Set a password and watch Netflix.
					</p>
				</div>
			)}
			{step === 1 && (
				<div className="w-[440px]">
					<h1 className="pb-6 pt-2 Medium-LargeTitle">
						Start your membership by
						<br /> setting a password
					</h1>
					<p className="mb-6 !font-light Regular-Title3">
						Complete your Netflix subscription in just a few more steps! <br />
						All the complicated steps are gone.
					</p>
					<Form form={form} onSubmit={() => {}} className="flex flex-col gap-2">
						<Form.Item name="email">
							<InputText name="email" label="Email" className="h-[56px] w-[415px]" />
						</Form.Item>
						<Form.Item name="password">
							<InputText name="password" label="Add Your Password" className="h-[56px] w-[415px]" />
						</Form.Item>
						<Form.Item name="poricyAgreement" className="pt-6">
							<CheckboxBasic
								label="Yes, I agree to the collection and use of my personal information in accordance with the Netflix Privacy Policy."
								labelClassName="Regular-Headline"
								size="!size-8"
								className="items-start"
							/>
						</Form.Item>
						<Form.Item name="termsAgreement" className="pt-6">
							<CheckboxBasic
								label="Yes, please send me emails notifying me of Netflix special offers. (Optional)"
								labelClassName="Regular-Headline"
								size="!size-8"
								className="items-start"
							/>
						</Form.Item>
					</Form>
				</div>
			)}
			{step === 2 && (
				<div className="flex-col flex-center">
					<h1 className="w-[350px] pb-6 pt-2 !text-center Medium-LargeTitle">Please select the membership you want.</h1>
					{[
						'No contract, no penalty. Cancel anytime, coolly.',
						'A world of endless content for one price.',
						'Enjoy Netflix on all your devices.',
					].map((text, index) => (
						<p key={index} className="mb-4 flex w-[280px] !font-light Regular-Title3">
							<Checkmark className="mr-4 size-10 [&>path]:fill-Primary/Red" />
							{text}
						</p>
					))}
				</div>
			)}
			{step === 3 && (
				<div className="w-[580px]">
					<h1 className="pb-6 pt-2 Medium-LargeTitle">Please select the membership you want.</h1>

					<Tabs defaultValue="account" className="flex-col flex-center">
						<TabsList className="flex w-full gap-2 pb-14 pt-10">
							<TabsTrigger
								value="advertising"
								className="flex-1 !rounded-xl border border-Grey/Grey-250 p-6"
								onClick={() => setPayment('advertising')}
							>
								Advertising Standard <br /> 1080p
							</TabsTrigger>
							<TabsTrigger
								value="standard"
								className="flex-1 !rounded-xl border border-Grey/Grey-250 p-6"
								onClick={() => setPayment('standard')}
							>
								Standard <br />
								1080p
							</TabsTrigger>
							<TabsTrigger
								value="premium"
								className="flex-1 !rounded-xl border border-Grey/Grey-250 p-6"
								onClick={() => setPayment('premium')}
							>
								premium <br />
								4K + HDR
							</TabsTrigger>
						</TabsList>
						{membership.map((membership, index) => (
							<TabsContent key={index} value={membership.type} className="w-full">
								{fields.map((field) => (
									<p
										className="flex justify-between whitespace-pre-wrap border-b border-Grey/Grey-250 py-5 text-Grey/Grey-50 Medium-Body [&:last-child]:border-b-0"
										key={field.key}
									>
										{field.label}
										<p className="text-Grey/Grey-20 Regular-Headline">{membership[field.key as keyof typeof membership]}</p>
									</p>
								))}
							</TabsContent>
						))}
					</Tabs>

					<p className="whitespace-pre-wrap pt-6 Regular-Smallbody">
						{`광고형 멤버십에 대해 자세히 알아보세요. 광고형 멤버십을 선택하면, 맞춤형 광고와 Netflix의 개인정보 처리방침에 부합하는 기타 목적을 위해 생년월일을 제공해 주셔야 합니다.

풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는 인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다. 모든 콘텐츠가 모든 화질로 제공되지는 않습니다. 자세한 내용은 이용 약관을 확인하세요.

함께 거주하는 사람들만 계정을 함께 이용할 수 있습니다. 스탠다드 멤버십은 추가 회원을 1명, 프리미엄은 최대 2명까지 등록할 수 있습니다. 자세히 알아보기. 프리미엄 멤버십은 동시접속 4명, 스탠다드 또는 광고형 스탠다드는 2명까지 가능합니다.

라이브 이벤트는 모든 넷플릭스 멤버십으로 이용 가능하며 광고가 포함됩니다.`}
					</p>
				</div>
			)}
			{step === 4 && (
				<div className="flex-col flex-center">
					<h1 className="pb-6 pt-2 Medium-LargeTitle">Select payment method</h1>
					<p className="!text-center !font-light Regular-Title3">
						Your payment information is encrypted and you can <br /> change your payment method at any time.
						<span className="mt-4 block font-semibold text-Grey/Grey-20">
							Enjoy with confidence. <br /> Cancel easily online.
						</span>
					</p>
					<Button
						theme="outline"
						onClick={() => {
							setStep(5)
						}}
						className="mt-6 h-full !place-content-between px-4 py-6 text-Grey/Grey-20 Regular-Title4"
					>
						Credit or check card
						<ArrowRight className="size-5" />
					</Button>
					<Button
						theme="outline"
						onClick={() => {
							setStep(5)
						}}
						className="mt-2 h-full !place-content-between px-4 py-6 text-Grey/Grey-20 Regular-Title4"
					>
						Easy payment
						<ArrowRight className="size-5" />
					</Button>
					<Button
						theme="outline"
						onClick={() => {
							setStep(5)
						}}
						className="mt-2 h-full !place-content-between px-4 py-6 text-Grey/Grey-20 Regular-Title4"
					>
						Integrate into your carrier's rates
						<ArrowRight className="size-5" />
					</Button>
				</div>
			)}
			{step === 5 && (
				<div className="w-[415px] flex-col flex-center">
					<h1 className="pb-6 pt-2 Medium-LargeTitle">Register a credit or check card</h1>
					<Form form={form} onSubmit={() => {}} className="flex flex-col gap-2">
						<Form.Item name="cardNumber">
							<InputText name="cardNumber" label="Card Number" className="h-[56px] w-[415px]" />
						</Form.Item>
						<Form.Item name="period">
							<InputText name="period" label="Expiration period" className="h-[56px] w-[415px]" />
						</Form.Item>
						<Form.Item name="name">
							<InputText name="name" label="name" className="h-[56px] w-[415px]" />
						</Form.Item>
						<Form.Item name="birthDate">
							<InputText name="birthDate" label="Birth date" className="h-[56px] w-[415px]" />
						</Form.Item>

						<div className="flex w-full items-center justify-between rounded-md bg-Grey/Grey-850 px-4 py-4">
							<span className="flex flex-col Medium-Headline">
								{payment === 'premium' ? '17,000' : payment === 'standard' ? '13,500' : '5,500'}won per month
								<p className="mt-1 text-Grey/Grey-25 Regular-Body">{payment}</p>
							</span>
							<p className="cursor-pointer text-Secondary/Blue-200 Regular-Headline" onClick={() => setStep(3)}>
								change
							</p>
						</div>

						<Form.Item name="allAgreement" className="border-b border-Grey/Grey-250 py-6">
							<CheckboxBasic
								label="I am 19 years of age or older and agree to all of the terms and conditions below."
								labelClassName="Regular-Headline"
								size="!size-8"
								className="items-start"
							/>
						</Form.Item>
						<Form.Item name="termsAgreement" className="pt-6">
							<CheckboxBasic
								label="I to the Netflix terms of use and Privacy Policy."
								labelClassName="Regular-Headline"
								size="!size-8"
								className="items-start"
							/>
						</Form.Item>
						<Form.Item name="privacyAgreement" className="pt-2">
							<CheckboxBasic
								label="I agree to provide my personal information to third parties"
								labelClassName="Regular-Headline"
								size="!size-8"
								className="items-start"
							/>
						</Form.Item>
						<Form.Item name="marketingAgreement" className="pt-2">
							<CheckboxBasic
								label="If you do not cancel your membership, your Netflix membership will automatically continue, and the membership fee (currently 17,000 won) will be charged monthly to your registered payment method. You can cancel your membership at any time on the 'Account' page of www.netflix.com. In this case, your membership will be canceled at the end of the billing cycle, and you will continue to use the service for the remaining period. However, if you cancel your membership immediately without using Netflix content through your account within 7 days of the billing date, you can request a full refund of the membership fee charged for that billing cycle."
								labelClassName="Regular-Headline"
								size="!size-8"
								className="items-start"
							/>
						</Form.Item>
					</Form>
				</div>
			)}

			{step !== 4 && (
				<Button onClick={onClickNext} className="mt-6 h-16 w-[340px] Medium-Title2">
					{step === 2 ? 'agree and continue' : step === 5 ? 'Start Paid Membership' : 'next'}
				</Button>
			)}
		</div>
	)
}
