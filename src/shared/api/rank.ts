import { MovieControllerFindAllMovieRankDataDto } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

class Rank<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags rank
	 * @name MovieControllerFindAllMovieRank
	 * @summary 영화 랭크 조회
	 * @request GET:/movie/rank
	 * @secure
	 * @response `200` `MovieControllerFindAllMovieRankDataDto`
	 */
	movieControllerFindAllMovieRank = (params: RequestParams = {}) =>
		this.request<MovieControllerFindAllMovieRankDataDto, any>({
			path: `/movie/rank`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		})
}

export default new Rank({
	baseUrl: import.meta.env.VITE_BASE_URL,
})
