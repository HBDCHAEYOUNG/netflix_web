import { useFetchBanner } from 'src/shared/models/banner.model'
import { useFetchDirectors } from 'src/shared/models/director.model'
import { useFetchMovies } from 'src/shared/models/movie.model'

export function Test() {
	const { data } = useFetchMovies(0, 5)
	const { data: bannerData } = useFetchBanner()
	console.log(123, bannerData, data)

	const { data: directorsData } = useFetchDirectors()
	console.log(333, directorsData)
	return (
		<div className="h-screen flex-col flex-center">{directorsData?.map((director) => <div key={director.id}>11{director.name}</div>)}</div>
	)
}
