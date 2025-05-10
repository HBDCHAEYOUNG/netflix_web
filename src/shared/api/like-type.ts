import { MovieControllerCreateMovieDislikeDataDto, MovieControllerCreateMovieLikeDataDto } from './data-contracts'

export namespace Like {
	/**
	 * No description
	 * @tags like
	 * @name MovieControllerCreateMovieLike
	 * @summary 영화 좋아요 등록
	 * @request POST:/movie/{id}/like
	 * @secure
	 * @response `201` `MovieControllerCreateMovieLikeDataDto`
	 */
	export namespace MovieControllerCreateMovieLike {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = MovieControllerCreateMovieLikeDataDto
	}

	/**
	 * No description
	 * @tags like
	 * @name MovieControllerCreateMovieDislike
	 * @summary 영화 좋아요 취소
	 * @request POST:/movie/{id}/dislike
	 * @secure
	 * @response `201` `MovieControllerCreateMovieDislikeDataDto`
	 */
	export namespace MovieControllerCreateMovieDislike {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = MovieControllerCreateMovieDislikeDataDto
	}
}
