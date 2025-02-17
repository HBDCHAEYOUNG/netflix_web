import { MovieControllerCreateMovieDislikeDataDto, MovieControllerCreateMovieLikeDataDto } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

class Like<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

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
		this.http.request<MovieControllerCreateMovieLikeDataDto, any>({
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
		this.http.request<MovieControllerCreateMovieDislikeDataDto, any>({
			path: `/movie/${id}/dislike`,
			method: 'POST',
			secure: true,
			...params,
		})
}

const httpClient = new HttpClient({
	baseUrl: import.meta.env.VITE_BASE_URL,
})

// Banner 인스턴스 생성 시 HTTP 클라이언트 전달
export default new Like(httpClient)
