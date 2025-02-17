import { MovieControllerCreateMovieWishDataDto, MovieControllerFindAllMovieWishDataDto } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

class Wishlist<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

	/**
	 * No description
	 *
	 * @tags wishlist
	 * @name MovieControllerFindAllMovieWish
	 * @summary 유저 찜 목록 조회
	 * @request GET:/movie/wishlist
	 * @secure
	 * @response `200` `MovieControllerFindAllMovieWishDataDto`
	 */
	movieControllerFindAllMovieWish = (params: RequestParams = {}) =>
		this.http.request<MovieControllerFindAllMovieWishDataDto, any>({
			path: `/movie/wishlist`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags wishlist
	 * @name MovieControllerCreateMovieWish
	 * @summary 영화 찜 등록
	 * @request POST:/movie/{id}/wishlist
	 * @secure
	 * @response `201` `MovieControllerCreateMovieWishDataDto`
	 */
	movieControllerCreateMovieWish = (id: number, params: RequestParams = {}) =>
		this.http.request<MovieControllerCreateMovieWishDataDto, any>({
			path: `/movie/${id}/wishlist`,
			method: 'POST',
			secure: true,
			...params,
		})
}

const httpClient = new HttpClient({
	baseUrl: import.meta.env.VITE_BASE_URL,
})

// Banner 인스턴스 생성 시 HTTP 클라이언트 전달
export default new Wishlist(httpClient)
