import { Link } from 'react-router-dom'
import { footerLink } from 'src/shared/const/footer'

function Footer() {
	return (
		<footer className="z-10 w-full bg-TransparentBlack/60% py-[72px]">
			<div className="mx-auto w-full max-w-base">
				<p className="mb-6 Regular-Body">
					Questions? Call
					<u className="cursor-pointer">1-844-505-2993</u>
				</p>
				<nav className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{footerLink.map((item, index) => (
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
