import { AdminTable } from '@widgets/admin'
import { useSearchParams } from 'react-router-dom'

export function Admin() {
	const [searchParams] = useSearchParams()
	const currentMenu = searchParams.toString().replace('=', '')

	return (
		<div className="pl-80 [&_*]:text-Primary/Black">
			<h1 className="px-10 pb-4 pt-[84px] Bold-Title2">{currentMenu}</h1>
			<AdminTable />
		</div>
	)
}
