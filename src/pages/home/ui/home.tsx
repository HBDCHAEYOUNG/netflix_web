import Icon from '@icons/arrow-right.svg?react'
import HeroImage from '@images/bg1.png'
import shadow from '@images/shadow.png'
import popcorn from '@images/popcorn.png'
import Button from '@ui/button/button'
import Form from '@ui/form/form'
import { InputText } from '@ui/index'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import tv from '@images/tv.png'
import screenshot1 from '@images/screenshot1.png'
import { Headline } from '@entities/home'
function Home() {
	const form = useForm()

	const handleSubmit = () => {
		console.log('submit')
		console.log(form.watch('email'))
	}

	return (
		<div className="flex flex-col [&>*]:whitespace-nowrap">
			<section className="relative">
				<img src={HeroImage} alt="hero-image" className="w-full" />
				<img src={shadow} alt="shadow" className="absolute left-0 top-0 w-full" />

				<div className="absolute left-0 top-0 mt-[280px] flex w-full flex-col items-center flex-center">
					<h1 className="block Bold-Title1">Unlimited movies, TV shows, and more</h1>
					<p className="mb-6 block">Watch anywhere. Cancel anytime.</p>
					<p className="FRegular-Title4 mb-4">Ready to watch? Enter your email to create or restart your membership. test</p>

					<Form form={form} onSubmit={handleSubmit} className="flex gap-2 flex-center">
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
			<section className="relative">
				<div className="absolute top-[-72px] mx-auto h-[144px] w-full gap-8 rounded-md flex-center gradient1">
					<img src={popcorn} alt="popcorn" className="opacity-75" />
					<div>
						<p className="mb-1 Medium-Headline">The Netflix you love for just $6.99.</p>
						<p className="mb-2 Regular-Body">Get the Standard with ads plan.</p>
						<Link to="#" className="flex text-Secondary/Blue-200 underline">
							Learn more
							<Icon className="ml-4 w-4 [&>*]:stroke-Secondary/Blue-200" />
						</Link>
					</div>
				</div>

				<div className="my-[72px] flex-center">
					<Headline
						title="Enjoy on your TV"
						description={`Watch on Smart TVs,\nPlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.`}
					/>
					<div className="relative">
						<img src={tv} alt="tv" />
						<img src={screenshot1} alt="screenshot1" className="absolute left-[71.22px] top-[85.24px]" />
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
