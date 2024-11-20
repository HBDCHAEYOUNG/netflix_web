import ButtonMoreInfo from '@ui/button/button-moreinfo'
import ButtonPlay from '@ui/button/button-play'
import ButtonSignInLarge from '@ui/button/button-signin-large'
import ButtonSignInSmall from '@ui/button/button-signin-small'
import ButtonUseSignInCode from '@ui/button/button-use-signin-code'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<div>
			홈입니다
			<Link to="/auth">로그인</Link>
			<ButtonUseSignInCode />
			<ButtonSignInLarge />
			<ButtonMoreInfo />
			<ButtonPlay />
			<ButtonSignInSmall />
		</div>
	)
}

export default Home
