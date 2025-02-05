import { Billboard } from '@widgets/home'
import movietitle from '@images/movie-title.png'
import { movieDetail } from '../const/home'

export function Series() {
	return (
		<div>
			<Billboard movietitle={movietitle} movieDetail={movieDetail} />
		</div>
	)
}
