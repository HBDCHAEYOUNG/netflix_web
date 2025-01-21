import HeroImage from '@images/bg1.png'
import Form from '@ui/form/form'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../model/login.schema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@ui/button/button'
import ArrowIcon from '@icons/arrow-right.svg?react'
import { Accordion, AccordionItem, CheckboxBasic, InputText } from '@ui/index'
import { Link, useNavigate } from 'react-router-dom'
import { AccordionContent, AccordionTrigger } from '@radix-ui/react-accordion'
import { AuthStore } from '@store/auth-store'

function Login() {
	const { setLogin } = AuthStore()
	const navigate = useNavigate()

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
	})

	const handleSubmit = (data: z.infer<typeof loginSchema>) => {
		console.log(data)
		setLogin()
		navigate('/')
	}

	console.log(form.watch())
	return (
		<section className="relative h-screen flex-col flex-center">
			<img src={HeroImage} alt="hero-image" className="absolute h-full w-full object-cover opacity-50" />

			<div className="relative h-[680px] w-[450px] bg-TransparentBlack/60% px-[68px] py-[48px]">
				<h1 className="mb-7 Bold-Title1">Sign In</h1>
				<Form form={form} onSubmit={handleSubmit} className="flex w-full flex-col items-center gap-4">
					<Form.Item name="email">
						<InputText name="email" label="Email Address" className="h-[56px] w-[314px]" />
					</Form.Item>
					<Form.Item name="password">
						<InputText name="password" label="Password" className="h-[56px] w-[314px]" />
					</Form.Item>
					<Button className="h-[56px] w-[314px] flex-center Medium-Title3" rightIcon={<ArrowIcon className="ml-4" />}>
						Sign In
					</Button>
					<Form.Item name="remember" className="mt-1 w-full">
						<CheckboxBasic label="Remember me" labelClassName="Regular-Body" />
					</Form.Item>
				</Form>
				<p className="mt-4 text-gray-400 Regular-Body">
					Don't have an account?{' '}
					<Link to="/landing" className="font-bold text-white">
						Sign up
					</Link>
				</p>
				<p className="mt-4 text-gray-400 Regular-Body">
					This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
					<Accordion type="single" collapsible className="inline font-bold text-white">
						<AccordionItem value="item-1" className="mb-2 inline w-full bg-transparent Regular-Body">
							<AccordionTrigger className="text-Secondary/Blue-200 Regular-Body [&[data-state=open]]:hidden">Learn more.</AccordionTrigger>
							<AccordionTrigger className="hidden text-Secondary/Blue-200 Regular-Body [&[data-state=open]]:inline">
								Close.
							</AccordionTrigger>
							<AccordionContent className="text-gray-400 Regular-Body">
								The information collected by Google reCAPTCHA is subject to Google's Privacy Policy and Terms of Service, and is used to
								provide, maintain and improve the reCAPTCHA service and for general security purposes (not used for personalized advertising
								by Google).
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</p>
			</div>
		</section>
	)
}

export default Login
