import { MovieControllerFindAllMovieBannerDataDto } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

class Banner<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

	/**
	 * No description
	 *
	 * @tags banner
	 * @name MovieControllerFindAllMovieBanner
	 * @summary 영화 배너 조회
	 * @request GET:/movie/banner
	 * @secure
	 * @response `200` `MovieControllerFindAllMovieBannerDataDto` 영화 배너 조회 성공
	 */
	movieControllerFindAllMovieBanner = (params: RequestParams = {}) =>
		this.http.request<MovieControllerFindAllMovieBannerDataDto, any>({
			path: `/movie/banner`,
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
export default new Banner(httpClient)
