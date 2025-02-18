import { AuthStore } from '@store/auth-store'
import Button from '@ui/button/button'
import { Link } from 'react-router-dom'

export function Logout() {
	const { setLogout } = AuthStore()
	return (
		<div className="h-screen flex-center">
			<div className="w-[440px] rounded-lg bg-Primary/White p-12">
				<h1 className="pb-8 !text-TransparentBlack/90% Medium-LargeTitle">벌써 나가시려고요? </h1>
				<p className="whitespace-pre-wrap pb-8 text-[17px] !text-TransparentBlack/60%">
					{`참고로 알려드리면, 매번 Netflix에서 로그아웃하실 필요는 없습니다. 공용 컴퓨터에서 이용한 경우에만 로그아웃하시면 됩니다.\n\n30초 후 Netflix.com으로 이동합니다.`}
				</p>
				<Button
					className="rounded-sm bg-Secondary/Blue-100 py-6 Regular-Title4 hover:bg-Secondary/Blue-100 hover:outline hover:outline-Secondary/Blue-100"
					onClick={setLogout}
				>
					<Link to="/landing" onClick={setLogout}>
						지금 이동
					</Link>
				</Button>
			</div>
		</div>
	)
}
