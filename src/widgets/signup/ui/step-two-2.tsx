import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/index'
import { fields, membership } from '@pages/signup/const/signup'
import Button from '@ui/button/button'

const MEMBERSHIP_TYPES = [
	{ value: 'advertising', label: 'Advertising Standard', quality: '1080p', gradient: 'gradient2' },
	{ value: 'standard', label: 'Standard', quality: '1080p', gradient: 'gradient3' },
	{ value: 'premium', label: 'Premium', quality: '4K + HDR', gradient: 'gradient4' },
]

const COMMON_TAB_CLASSES = 'flex-1 !rounded-xl border border-Grey/Grey-250 p-6'

const infoText = `Learn more about our advertising memberships . If you choose an advertising membership, you will be asked to provide your date of birth to serve you personalized ads and for other purposes consistent with Netflix’s Privacy Policy .

Availability of Full HD (1080p), UHD (4K), and HDR picture quality may vary depending on the Internet service and device performance used. Not all content is available in all picture quality levels. For more information, see Terms of Use .

Only people who live together can use the account together. Standard membership allows 1 additional member, Premium allows up to 2 additional members. Learn more . Premium membership allows 4 simultaneous connections, Standard or Advertising Standard allows 2 simultaneous connections.

Live events are available to all Netflix members and include ads.`

interface StepTwo2Props {
	setPayment: (value: string) => void
	onClickNext: () => void
}

export function StepTwo2({ setPayment, onClickNext }: StepTwo2Props) {
	return (
		<div className="flex min-h-screen w-fit max-w-[560px] flex-col pt-24">
			<p>2/3 단계</p>
			<h1 className="pb-6 pt-2 Medium-LargeTitle">Please select the membership you want.</h1>

			<Tabs defaultValue="premium" className="flex-col flex-center">
				<TabsList className="w-full gap-2 pb-14 pt-10">
					{MEMBERSHIP_TYPES.map(({ value, label, quality, gradient }) => (
						<TabsTrigger
							key={value}
							value={value}
							className={`${COMMON_TAB_CLASSES} data-[state=active]:${gradient}`}
							onClick={() => setPayment(value)}
						>
							{label} <br /> {quality}
						</TabsTrigger>
					))}
				</TabsList>
				{membership.map((membership, index) => (
					<TabsContent key={index} value={membership.type} className="w-full">
						{fields.map(
							(field) =>
								membership[field.key as keyof typeof membership] && (
									<p
										className="flex justify-between whitespace-pre-wrap border-b border-Grey/Grey-250 py-5 text-TransparentWhite/70% Medium-Body [&:last-child]:border-b-0"
										key={field.key}
									>
										{field.label}
										<p className="Regular-Headline">{membership[field.key as keyof typeof membership]}</p>
									</p>
								),
						)}
					</TabsContent>
				))}
			</Tabs>

			<p className="whitespace-pre-wrap pt-6 text-TransparentWhite/50% Regular-Body">{infoText}</p>
			<Button onClick={onClickNext} className="mt-6 h-16 w-full Medium-Title2">
				next
			</Button>
		</div>
	)
}
