import Icon from '@icons/play.svg?react'
import Form from '@ui/form/form'
import { InputText } from '@ui/input/input-text'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Home() {
	const form = useForm()
	const handleSubmit = () => {}
	console.log(form.watch('test'))
	return (
		<div>
			홈입니다
			<Link to="/auth" className="medium-smallbody">
				로그인
			</Link>
			<Icon />
			<div className="flex flex-col gap-2"></div>
			<Form form={form} onSubmit={handleSubmit}>
				<Form.Item name="test" renderItem={(field) => <InputText label="email" {...field} />} />
			</Form>
		</div>
	)
}

export default Home
