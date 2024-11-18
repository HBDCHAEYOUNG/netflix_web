import { Link } from 'react-router-dom'

function Home() {
	return (
		<div>
			홈입니다
			<Link to="/auth">로그인</Link>
		</div>
	)
}

export default Home
