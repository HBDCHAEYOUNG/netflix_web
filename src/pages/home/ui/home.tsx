import { Link } from 'react-router-dom'
import Logo from '@icons/icons/account.svg?react'

function Home() {
	return (
		<div>
			홈입니다
			<Link to="/auth" className="medium-smallbody">
				로그인
			</Link>
			<div className="flex flex-col gap-2">
				{/* <Button />
			<Button variant='secondary' />
			<Button variant='outline' /> */}
			</div>
			<Logo />
		</div>
	)
}

export default Home
