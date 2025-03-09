import { MovieControllerFindAllMovieRankDataDto } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

class Rank<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

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
		this.http.request<MovieControllerFindAllMovieRankDataDto, any>({
			path: `/movie/rank`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		})
}

const httpClient = new HttpClient({
	baseUrl: import.meta.env.VITE_BASE_URL,
})

// Banner 인스턴스 생성 시 HTTP 클라이언트 전달
export default new Rank(httpClient)
