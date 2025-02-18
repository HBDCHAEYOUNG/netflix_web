import Form from '@ui/form/form'
import { useForm } from 'react-hook-form'
import { loginSchema, LoginSchemaType } from '../model/login.schema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@ui/button/button'
import { Accordion, AccordionItem, CheckboxBasic, InputText } from '@ui/index'
import { Link, useNavigate } from 'react-router-dom'
import { AccordionContent, AccordionTrigger } from '@radix-ui/react-accordion'
import { AuthStore } from '@store/auth-store'
import auth from 'src/shared/api/auth'
import HeroImage from '@images/bg1.png'
import ArrowIcon from '@icons/arrow-right.svg?react'
import EyeIcon from '@icons/eye-open.svg?react'
import EyeSlashIcon from '@icons/eye-close.svg?react'
import { useState } from 'react'

function Login() {
	const [isPasswordVisible, setIsPasswordVisible] = useState('password')

	const { setLogin } = AuthStore()
	const navigate = useNavigate()

	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
		mode: 'all',
	})

	const handleSubmit = async (data: z.infer<typeof loginSchema>) => {
		const { email, password } = data

		const token = btoa(`${email}:${password}`)

		try {
			const response = await auth.authControllerLogin({
				headers: {
					Authorization: `Basic ${token}`,
					'Content-Type': 'application/json',
				},
			})
			setLogin(response.accessToken, response.refreshToken)
			navigate('/profiles')
		} catch (error) {
			form.setError('password', { message: '이메일 또는 비밀번호가 올바르지 않습니다.' })
			console.log(error)
		}
	}

	return (
		<section className="relative h-screen flex-col flex-center">
			<img src={HeroImage} alt="hero-image" className="pointer-events-none absolute h-full w-full object-cover opacity-50" />

			<div className="relative h-[680px] w-[450px] bg-TransparentBlack/60% px-[68px] py-[48px]">
				<h1 className="mb-7 Bold-Title1">Sign In</h1>
				<Form form={form} onSubmit={handleSubmit} className="flex w-full flex-col items-center gap-4">
					<Form.Item name="email">
						<InputText name="email" label="Email Address" className="h-[56px] w-[314px]" />
					</Form.Item>
					<Form.Item name="password">
						<div className="relative">
							<InputText name="password" label="Password" className="h-[56px] w-[314px]" type={isPasswordVisible} />
							{isPasswordVisible === 'password' ? (
								<EyeSlashIcon
									className="absolute right-3 top-1/2 size-5 -translate-y-1/2 cursor-pointer"
									onClick={() => setIsPasswordVisible('text')}
								/>
							) : (
								<EyeIcon
									className="absolute right-3 top-1/2 size-5 -translate-y-1/2 cursor-pointer"
									onClick={() => setIsPasswordVisible('password')}
								/>
							)}
						</div>
					</Form.Item>
					<Button className="h-[56px] w-[314px] flex-center Medium-Title3" rightIcon={<ArrowIcon className="ml-4" />}>
						Sign In
					</Button>
					<Form.Item name="remember" className="mt-1 w-full">
						<CheckboxBasic label="Remember me" labelClassName="Regular-Body" />
					</Form.Item>
				</Form>
				<p className="mt-4 !text-TransparentWhite/50% Regular-Body">
					Don't have an account?{' '}
					<Link to="/landing" className="font-bold text-white">
						Sign up
					</Link>
				</p>
				<p className="mt-4 !text-TransparentWhite/50% Regular-Body">
					This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
					<Accordion type="single" collapsible className="inline font-bold text-white">
						<AccordionItem value="item-1" className="mb-2 inline w-full bg-transparent Regular-Body">
							<AccordionTrigger className="!text-Secondary/Blue-200 Regular-Body [&[data-state=open]]:hidden">Learn more.</AccordionTrigger>
							<AccordionTrigger className="hidden !text-Secondary/Blue-200 Regular-Body [&[data-state=open]]:inline">
								Close.
							</AccordionTrigger>
							<AccordionContent className="!text-TransparentWhite/50% Regular-Body">
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
