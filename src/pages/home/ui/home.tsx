import Logo from '@icons/icons/play.svg?react'
import Button from '@ui/button/button-basic'
import Form from '@ui/form/form'
import { CheckboxBasic } from '@ui/index'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Home() {
	const form = useForm()
	const handleSubmit = () => {}
	console.log(form.getValues('test'))
	return (
		<div>
			홈입니다
			<Link to="/auth" className="medium-smallbody">
				로그인
			</Link>
			<div className="flex flex-col gap-2"></div>
			<Logo />
			<Button>Sign In</Button>
			<Form form={form} onSubmit={handleSubmit}>
				<Form.Item name="test" renderItem={<CheckboxBasic label="Remember me" />} />
			</Form>
		</div>
	)
}

export default Home
