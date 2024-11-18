import ButtonMoreInfo from '@ui/button/button-moreinfo'
import ButtonPlay from '@ui/button/button-play'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<div>
			홈입니다
			<Link to="/auth">로그인</Link>
			<ButtonPlay />
			<ButtonMoreInfo />
		</div>
	)
}

export default Home
