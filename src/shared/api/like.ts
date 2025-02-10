import { MovieControllerCreateMovieDislikeDataDto, MovieControllerCreateMovieLikeDataDto } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

class Like<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags like
	 * @name MovieControllerCreateMovieLike
	 * @summary 영화 좋아요 등록
	 * @request POST:/movie/{id}/like
	 * @secure
	 * @response `201` `MovieControllerCreateMovieLikeDataDto`
	 */
	movieControllerCreateMovieLike = (id: number, params: RequestParams = {}) =>
		this.request<MovieControllerCreateMovieLikeDataDto, any>({
			path: `/movie/${id}/like`,
			method: 'POST',
			secure: true,
			...params,
		})
	/**
	 * No description
	 *
	 * @tags like
	 * @name MovieControllerCreateMovieDislike
	 * @summary 영화 좋아요 취소
	 * @request POST:/movie/{id}/dislike
	 * @secure
	 * @response `201` `MovieControllerCreateMovieDislikeDataDto`
	 */
	movieControllerCreateMovieDislike = (id: number, params: RequestParams = {}) =>
		this.request<MovieControllerCreateMovieDislikeDataDto, any>({
			path: `/movie/${id}/dislike`,
			method: 'POST',
			secure: true,
			...params,
		})
}

export default new Like({
	baseUrl: import.meta.env.VITE_BASE_URL,
})
