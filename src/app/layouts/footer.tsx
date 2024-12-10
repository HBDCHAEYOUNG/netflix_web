import { link } from '@pages/home'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className="z-10 w-full bg-TransparentBlack/60% py-[72px]">
			<div className="mx-auto w-full max-width-desktop">
				<p className="mb-6 Regular-Body">
					Questions? Call
					<u className="cursor-pointer">1-844-505-2993</u>
				</p>
				<nav className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{link.map((item, index) => (
						<Link to={item.url} key={index} className="text-Grey/Grey-100 Regular-body underline">
							{item.title}
						</Link>
					))}
				</nav>
			</div>
		</footer>
	)
}

export default Footer
