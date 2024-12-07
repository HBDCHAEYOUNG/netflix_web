import NetflixLogo from '@images/logo.png'
import { link } from '@pages/home'
import Button from '@ui/button/button'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function CommonLayout() {
	const navigate = useNavigate()

	const handleCopyPhoneNumber = () => {
		navigator.clipboard.writeText('1-844-505-2993')
		alert('복사완료!')
	}
	return (
		<div className="min-h-screen w-full bg-Primary/Black">
			<header className="fixed left-1/2 z-10 flex w-full -translate-x-1/2 items-center justify-between py-6 max-width-desktop">
				<img src={NetflixLogo} alt="netflix" className="cursor-pointer" onClick={() => navigate('/')} />
				<Button onClick={() => navigate('/login')} className="h-[32px] w-[77px]">
					Login
				</Button>
			</header>

			<Outlet />

			<footer className="z-10 w-full bg-TransparentBlack/60% py-[72px]">
				<div className="mx-auto w-full max-width-desktop">
					<p className="mb-6 Regular-Body">
						Questions? Call
						<u className="cursor-pointer" onClick={handleCopyPhoneNumber}>
							1-844-505-2993
						</u>
					</p>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{link.map((item, index) => (
							<Link to={item.url} key={index} className="text-Grey/Grey-100 Regular-body underline">
								{item.title}
							</Link>
						))}
					</div>
				</div>
			</footer>
		</div>
	)
}

export default CommonLayout
