import { Billboard } from '@widgets/home'
import { useFetchBanner } from 'src/shared/models'
import { movieDetail } from '../const/home'

export function Movie() {
	const { data, isLoading } = useFetchBanner()

	return (
		<div>
			<Billboard movieDetail={movieDetail} isLoading={isLoading} bannerData={data} />
		</div>
	)
}
