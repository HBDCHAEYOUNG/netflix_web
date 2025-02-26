import { MovieControllerCreateMovieWishDataDto, MovieControllerFindAllMovieWishDataDto } from './data-contracts'

export namespace Wishlist {
	/**
	 * No description
	 * @tags wishlist
	 * @name MovieControllerFindAllMovieWish
	 * @summary 유저 찜 목록 조회
	 * @request GET:/movie/wishlist
	 * @secure
	 * @response `200` `MovieControllerFindAllMovieWishDataDto` 유저 찜 목록 조회 성공
	 */
	export namespace MovieControllerFindAllMovieWish {
		export type RequestParams = {}
		export type RequestQuery = {
			/**
			 * 페이지
			 * @default 1
			 * @example 1
			 */
			page?: number
			take: number
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = MovieControllerFindAllMovieWishDataDto
	}

	/**
	 * No description
	 * @tags wishlist
	 * @name MovieControllerCreateMovieWish
	 * @summary 영화 찜 등록
	 * @request POST:/movie/{id}/wishlist
	 * @secure
	 * @response `201` `MovieControllerCreateMovieWishDataDto`
	 */
	export namespace MovieControllerCreateMovieWish {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = MovieControllerCreateMovieWishDataDto
	}
}
