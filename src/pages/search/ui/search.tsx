import { WithAuth } from '@hooks/with-auth'
import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Detail } from '@widgets/home'
import { useSearchParams } from 'react-router-dom'
import { useFetchMovies } from 'src/shared/models'

function Search() {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('keyword')
	const { data } = useFetchMovies({ take: 10, title: query || '', order: ['id_DESC'] })
	if (!query || !data) return <div>loading...</div>
	console.log(data)
	return (
		<div className="pt-32 common-padding">
			<h2 className="text-center">"{query}" 검색결과입니다.</h2>
			<div className="grid grid-cols-5 gap-x-[6px] gap-y-10 pt-4">
				{data.data.map((item, index) => (
					<Dialog key={index}>
						<DialogTrigger>
							<img
								src={item.thumbnail}
								alt={item.title}
								className="aspect-video h-auto w-full rounded-md object-cover"
							/>
						</DialogTrigger>
						<DialogContent>
							<Detail movieId={item.id} />
						</DialogContent>
					</Dialog>
				))}
			</div>
		</div>
	)
}

export default WithAuth(Search)
