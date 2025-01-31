import { useSearchParams } from 'react-router-dom'

export function Admin() {
	const [searchParams] = useSearchParams()
	const currentMenu = searchParams.toString().replace('=', '')

	return (
		<div className="pl-80 [&>*]:text-Primary/Black">
			<h1 className="p-10 pt-[90px] Bold-Title2">{currentMenu}</h1>
		</div>
	)
}
