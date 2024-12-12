import TransferIcon from '@icons/account.svg?react'
import PencilIcon from '@icons/pencil.svg?react'
import PersonIcon from '@icons/person.svg?react'
import ServiceIcon from '@icons/question.svg?react'
import SearchIcon from '@icons/search.svg?react'
import netflixLogo from '@images/logo.png'
import post from '@images/post.png'
import { AuthStore } from '@store/auth-store'
import Button from '@ui/button/button'
import Form from '@ui/form/form'
import { InputText, Menu, MenuBell } from '@ui/index'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export function Header() {
	const [isSearch, setIsSearch] = useState(false)

	const form = useForm()

	const { isLogin, setLogin, setLogout } = AuthStore()
	const handleSubmit = () => {
		console.log(111)
	}

	return (
		<header className="fixed left-1/2 z-10 flex w-full -translate-x-1/2 flex-col items-center justify-between py-6 max-width-desktop">
			<div className="flex w-full justify-between">
				<Link to="/">
					<img src={netflixLogo} alt="netflix" className="cursor-pointer" />
				</Link>

				{isLogin ? (
					<div className="ml-auto flex w-full items-center gap-4">
						{[
							{ title: 'home', path: '/' },
							{ title: 'seiries', path: '/tv' },
							{ title: 'movie', path: '/movies' },
							{ title: 'New!The latest tranding content', path: 'latest' },
							{ title: 'My List', path: 'my-list' },
						].map((item, index) => (
							<Link to={item.path} key={index} className="min-w-max Regular-Smallbody">
								{item.title}
							</Link>
						))}
						<Form onSubmit={handleSubmit} form={form} className="flex w-full items-center gap-4">
							{isSearch ? (
								<Form.Item
									name="search"
									renderItem={(field) => (
										<InputText
											name="search"
											icon={<SearchIcon />}
											className="h-[38px] w-[250px] rounded-none !border-Primary/White !outline-none"
											defaultFocused={true}
											{...field}
										/>
									)}
								/>
							) : (
								<SearchIcon className="ml-auto cursor-pointer" onClick={() => setIsSearch(true)} />
							)}
						</Form>
						<MenuBell
							items={[
								{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
								{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
								{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
							]}
						/>
						<Menu
							label="Profile"
							items={[
								{
									icon: <PencilIcon />,
									title: 'Manage Your Profile',
								},
								{
									icon: <TransferIcon />,
									title: 'Profile Transfer',
								},
								{
									title: 'Account',
									icon: <PersonIcon />,
								},
								{ title: 'Customer Service Center', icon: <ServiceIcon /> },
								{ title: 'Log out Of Netflix', onClick: setLogout, className: 'mt-2 justify-center border-t border-Grey/Grey-200 pr-0' },
							]}
						/>
					</div>
				) : (
					<Link to="/auth/login">
						<Button className="h-[32px] w-[77px]" onClick={setLogin}>
							Login
						</Button>
					</Link>
				)}
			</div>
			<div className="h-screen w-full" onClick={() => setIsSearch(false)} />
		</header>
	)
}
