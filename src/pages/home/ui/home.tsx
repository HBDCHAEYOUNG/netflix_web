import { Headline } from '@entities/home'
import { zodResolver } from '@hookform/resolvers/zod'
import ArrowIcon from '@icons/arrow-right.svg?react'
import HeroImage from '@images/bg1.png'
import shadow from '@images/shadow.png'
import Button from '@ui/button/button'
import Form from '@ui/form/form'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, InputText } from '@ui/index'
import { useForm } from 'react-hook-form'
import { faq, sections } from '../const/home'
import { EmailSchema, emailSchema } from '../const/home.type'

function Home() {
	const form = useForm<EmailSchema>({
		resolver: zodResolver(emailSchema),
	})

	const handleSubmit = () => {
		console.log('submit')
		console.log(form.watch('email'))
	}

	return (
		<div className="flex flex-col">
			<section className="relative aspect-frame h-full bg-red-400 flex-center">
				<img src={HeroImage} alt="hero-image" className="absolute w-full" />
				<img src={shadow} alt="shadow" className="absolute w-full" />

				<div className="relative w-full flex-col">
					<h1 className="mx-auto mb-4 w-fit Bold-Title1">Unlimited movies, TV shows, and more</h1>
					<p className="mx-auto mb-6 w-fit Regular-Title2">Watch anywhere. Cancel anytime.</p>

					<p className="mx-auto mb-4 w-fit Regular-Title4">Ready to watch? Enter your email to create or restart your membership. test</p>
					<Form form={form} onSubmit={handleSubmit} className="flex justify-center gap-2">
						<Form.Item
							name="email"
							renderItem={(field) => <InputText name="email" label="Email address" className="h-[56px] w-[368px]" {...field} />}
						/>
						<Button className="h-[56px] w-[208px] flex-center Medium-Title3" rightIcon={<ArrowIcon className="ml-4" />}>
							Get Started
						</Button>
					</Form>
				</div>
			</section>

			{sections.map((section, index) => (
				<section key={index} className="relative flex-col border-b-8 border-Grey/Grey-800 py-[72px] flex-center">
					{section.component}
					<div className="flex w-full items-center justify-between max-width-desktop">
						<Headline title={section.headline.title} description={section.headline.description} />
						<img src={section.image} alt="tv" />
					</div>
				</section>
			))}

			<section className="flex-col border-b-8 border-Grey/Grey-800 py-[72px] flex-center">
				<Headline title="Frequently Asked Questions" />

				<Accordion type="single" collapsible className="mx-auto mt-6 w-full max-width-desktop">
					{faq.map((item, index) => (
						<AccordionItem key={index} value={`item-${index + 1}`} className="mb-2 w-full">
							<AccordionTrigger>{item.question}</AccordionTrigger>
							<AccordionContent>{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>

				<label className="mb-4 mt-12 Regular-Title4">Create or restart your membership</label>
				<Button className="h-[56px] w-[208px] flex-center Medium-Title3">Get Started</Button>
			</section>
		</div>
	)
}

export default Home
