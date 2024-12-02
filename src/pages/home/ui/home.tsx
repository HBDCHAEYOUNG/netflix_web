import HeroImage from '@images/bg1.png'
import shadow from '@images/shadow.png'
import ButtonBasic from '@ui/button/button-basic'
import Form from '@ui/form/form'
import { InputText } from '@ui/index'
import { useForm } from 'react-hook-form'
import Icon from '@icons/arrow-right.svg?react'

function Home() {
	const form = useForm()
	const handleSubmit = () => {
		console.log('submit')
		console.log(form.watch('email'))
	}
	return (
		<>
			<section>
				<img src={HeroImage} alt="hero-image" className="fixed left-0 top-0 w-full" />
				<img src={shadow} alt="shadow" className="fixed left-0 top-0 w-full" />

				<div className="mt-[280px] flex w-full flex-col items-center [&>*]:z-30">
					<h1 className="block Bold-Title1">Unlimited movies, TV shows, and more</h1>
					<p className="mb-6 block">Watch anywhere. Cancel anytime.</p>
					<p className="FRegular-Title4 mb-4">Ready to watch? Enter your email to create or restart your membership. test</p>

					<Form form={form} onSubmit={handleSubmit} className="flex gap-2 flex-center">
						<Form.Item
							name="email"
							className="space-y-0 flex-center"
							renderItem={(field) => <InputText name="email" label="Email address" className="h-[56px] w-[368px]" {...field} />}
						/>
						<ButtonBasic className="h-[56px] w-[208px] flex-center Medium-Title3">
							Get Started <Icon />
						</ButtonBasic>
					</Form>
				</div>
			</section>
		</>
	)
}

export default Home
