import { Link } from 'react-router-dom'
import { footerLink } from 'src/shared/const/footer'

function Footer() {
	return (
		<footer className="z-10 mx-auto my-20 w-full bg-TransparentBlack/60% max-w-base">
			<div className="mx-auto w-full max-w-base">
				<p className="mb-6 text-Grey/Grey-50 Regular-Body">
					Questions? Call
					<u className="cursor-pointer text-Grey/Grey-50">1-844-505-2993</u>
				</p>
				<nav className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{footerLink.map((item, index) => (
						<Link to={item.url} key={index} className="Regular-body text-Grey/Grey-50 hover:underline">
							{item.title}
						</Link>
					))}
				</nav>
			</div>
		</footer>
	)
}

export default Footer
