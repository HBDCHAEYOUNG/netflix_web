import { MovieControllerCreateMovieWishDataDto, MovieControllerFindAllMovieWishDataDto } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

class Wishlist<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
		this.request<MovieControllerFindAllMovieWishDataDto, any>({
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
		this.request<MovieControllerCreateMovieWishDataDto, any>({
			path: `/movie/${id}/wishlist`,
			method: 'POST',
			secure: true,
			...params,
		})
}

export default new Wishlist({
	baseUrl: import.meta.env.VITE_BASE_URL,
})
