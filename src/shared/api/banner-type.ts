import { MovieControllerFindAllMovieBannerDataDto } from './data-contracts'

export namespace Banner {
	/**
	 * No description
	 * @tags banner
	 * @name MovieControllerFindAllMovieBanner
	 * @summary 영화 배너 조회
	 * @request GET:/movie/banner
	 * @secure
	 * @response `200` `MovieControllerFindAllMovieBannerDataDto` 영화 배너 조회 성공
	 */
	export namespace MovieControllerFindAllMovieBanner {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = MovieControllerFindAllMovieBannerDataDto
	}
}
