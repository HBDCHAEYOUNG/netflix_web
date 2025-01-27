import logo from '@images/logo.png'

export function AdmineHeader() {
	return (
		<header className="flex h-16 items-center bg-Primary/White px-[80px]">
			<img src={logo} alt="logo" className="h-[32px]" />
		</header>
	)
}
