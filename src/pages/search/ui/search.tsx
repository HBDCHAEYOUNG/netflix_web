import { useSearchParams } from 'react-router-dom'

export function Search() {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('keyword')
	return (
		<div className="h-screen pt-32">
			<h2 className="text-center">"{query}" 검색결과입니다.</h2>
		</div>
	)
}
