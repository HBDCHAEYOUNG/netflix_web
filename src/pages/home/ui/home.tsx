import { Headline, ScreensPreview } from '@entities/home'
import Icon from '@icons/arrow-right.svg?react'
import HeroImage from '@images/bg1.png'
import shadow from '@images/shadow.png'
import Button from '@ui/button/button'
import Form from '@ui/form/form'
import { InputText } from '@ui/index'
import { useForm } from 'react-hook-form'
import { sections } from '../const/home'

function Home() {
	const form = useForm()

	const handleSubmit = () => {
		console.log('submit')
		console.log(form.watch('email'))
	}

	return (
		<div className="flex flex-col">
			<section className="relative aspect-frame h-full bg-red-400 flex-center">
				<img src={HeroImage} alt="hero-image" className="absolute w-full" />
				<img src={shadow} alt="shadow" className="absolute w-full" />

				<div className="w-full flex-col">
					<h1 className="mx-auto mb-4 w-fit Bold-Title1">Unlimited movies, TV shows, and more</h1>
					<p className="mx-auto mb-6 w-fit Regular-Title2">Watch anywhere. Cancel anytime.</p>

					<p className="mx-auto mb-4 w-fit Regular-Title4">Ready to watch? Enter your email to create or restart your membership. test</p>
					<Form form={form} onSubmit={handleSubmit} className="gap-2 flex-center">
						<Form.Item
							name="email"
							className="space-y-0 flex-center"
							renderItem={(field) => <InputText name="email" label="Email address" className="h-[56px] w-[368px]" {...field} />}
						/>
						<Button className="h-[56px] w-[208px] flex-center Medium-Title3" rightIcon={<Icon className="ml-4" />}>
							Get Started
						</Button>
					</Form>
				</div>
			</section>

			{sections.map((section, index) => (
				<section key={index} className="relative flex-col flex-center">
					{section.component}
					<div className="my-[72px] flex-center">
						<Headline title={section.headline.title} description={section.headline.description} />
						<ScreensPreview frame={section.screensPreview.frame} screenshot={section.screensPreview.screenshot} />
					</div>
				</section>
			))}
		</div>
	)
}

export default Home
