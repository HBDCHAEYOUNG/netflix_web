import { MovieControllerFindAllMovieBannerDataDto } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

class Banner<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
		this.request<MovieControllerFindAllMovieBannerDataDto, any>({
			path: `/movie/banner`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		})
}

export default new Banner({
	baseUrl: import.meta.env.VITE_BASE_URL,
})
