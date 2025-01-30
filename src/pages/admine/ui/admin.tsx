import { useSearchParams } from 'react-router-dom'

export function Admin() {
	const [searchParams] = useSearchParams()

	// 현재 선택된 메뉴 확인
	const currentMenu = searchParams.toString().replace('=', '')
	console.log('Current menu:', currentMenu) // 예: "영화관리"
	return (
		<div className="pl-80 [&>*]:text-Primary/Black">
			<h1 className="p-10 pt-[90px] Bold-Title2">{currentMenu}</h1>
		</div>
	)
}
