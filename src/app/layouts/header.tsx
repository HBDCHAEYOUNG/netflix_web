import Button from '@ui/button/button'
import { Link } from 'react-router-dom'
import netflixLogo from '@images/logo.png'
import { AuthStore } from '@store/auth-store'
import { InputText, Menu, MenuBell } from '@ui/index'
import PencilIcon from '@icons/pencil.svg?react'
import TransferIcon from '@icons/account.svg?react'
import PersonIcon from '@icons/person.svg?react'
import ServiceIcon from '@icons/question.svg?react'
import SearchIcon from '@icons/search.svg?react'
import post from '@images/post.png'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from '@ui/form/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function Header() {
	const [isSearch, setIsSearch] = useState(false)

	const searchSchema = z.object({
		search: z
			.string()
			.min(1)
			.regex(/^[a-zA-Z0-9\s]*$/, '특수문자는 입력할 수 없습니다.'),
	})
	const form = useForm<z.infer<typeof searchSchema>>({
		resolver: zodResolver(searchSchema),
	})

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
					<Form onSubmit={handleSubmit} form={form} className="flex items-center gap-4">
						{isSearch ? (
							<Form.Item
								name="search"
								renderItem={(field) => (
									<InputText
										name="search"
										icon={<SearchIcon />}
										className="h-[38px] w-[250px] rounded-none !outline-none"
										defaultFocused={true}
										{...field}
									/>
								)}
							/>
						) : (
							<SearchIcon className="cursor-pointer" onClick={() => setIsSearch(true)} />
						)}
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
					</Form>
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
