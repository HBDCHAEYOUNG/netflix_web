import { MovieControllerFindAllMovieRankDataDto } from './data-contracts'

export namespace Rank {
	/**
	 * No description
	 * @tags rank
	 * @name MovieControllerFindAllMovieRank
	 * @summary 영화 랭크 조회
	 * @request GET:/movie/rank
	 * @secure
	 * @response `200` `MovieControllerFindAllMovieRankDataDto`
	 */
	export namespace MovieControllerFindAllMovieRank {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = MovieControllerFindAllMovieRankDataDto
	}
}
