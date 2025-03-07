import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/index'
import { fields, infoText, memberships, membershipTypes } from '@widgets/signup/const/signup'
import Button from '@ui/button/button'
import { cn } from '@lib/utils'

interface StepTwo2Props {
	membership: string
	setMembership: (value: string) => void
	onClickNext: () => void
}

export function StepTwo2({ membership, setMembership, onClickNext }: StepTwo2Props) {
	return (
		<div className="flex min-h-screen w-fit max-w-[560px] flex-col pb-40 pt-24">
			<p>2/3 단계</p>
			<h1 className="pb-6 pt-2 Medium-LargeTitle">Please select the membership you want.</h1>

			<Tabs defaultValue={membership} className="flex-col flex-center">
				<TabsList className="flex w-full gap-2 pb-14 pt-10">
					{membershipTypes.map(({ value, label, quality, gradient }) => (
						<TabsTrigger
							key={value}
							value={value}
							className={cn('flex-1 !rounded-xl border border-Grey/Grey-250 p-6', {
								'data-[state=active]:gradient2': gradient === 'gradient2',
								'data-[state=active]:gradient3': gradient === 'gradient3',
								'data-[state=active]:gradient4': gradient === 'gradient4',
							})}
							onClick={() => setMembership(value)}
						>
							{label} <br /> {quality}
						</TabsTrigger>
					))}
				</TabsList>
				{memberships.map((membership, index) => (
					<TabsContent key={index} value={membership.type} className="w-full">
						{fields.map(
							(field) =>
								membership[field.key as keyof typeof membership] && (
									<div
										className="flex justify-between whitespace-pre-wrap border-b border-Grey/Grey-250 py-5 text-TransparentWhite/70% Medium-Body [&:last-child]:border-b-0"
										key={field.key}
									>
										{field.label}
										<p className="Regular-Headline">{membership[field.key as keyof typeof membership]}</p>
									</div>
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
