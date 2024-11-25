import Logo from '@icons/icons/play.svg?react'
import { Checkbox } from '@ui/_shardcn/checkbox'
import Button from '@ui/button/button-basic'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<div>
			홈입니다
			<Link to="/auth" className="medium-smallbody">
				로그인
			</Link>
			<div className="flex flex-col gap-2"></div>
			<Logo />
			<Button>Sign In</Button>
			<Checkbox />
		</div>
	)
}

export default Home
