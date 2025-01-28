import logo from '@images/logo.png'

export function AdminHeader() {
	return (
		<header className="fixed left-0 top-0 flex h-16 w-full items-center bg-Primary/White px-10">
			<img src={logo} alt="logo" className="h-7" />
		</header>
	)
}
