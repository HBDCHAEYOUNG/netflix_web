import {
	CreateGenreDtoDto,
	GenreControllerCreateDataDto,
	GenreControllerFindAllDataDto,
	GenreControllerFindOneDataDto,
	GenreControllerRemoveDataDto,
	GenreControllerUpdateDataDto,
	UpdateGenreDtoDto,
} from './data-contracts'

export namespace Genre {
	/**
	 * No description
	 * @tags genre
	 * @name GenreControllerFindAll
	 * @summary 장르 목록 조회
	 * @request GET:/genre
	 * @secure
	 * @response `200` `GenreControllerFindAllDataDto` 장르 목록 조회 성공
	 */
	export namespace GenreControllerFindAll {
		export type RequestParams = {}
		export type RequestQuery = {
			/**
			 * 페이지
			 * @example 1
			 */
			page?: number
			take: number
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = GenreControllerFindAllDataDto
	}

	/**
	 * No description
	 * @tags genre
	 * @name GenreControllerCreate
	 * @summary 장르 생성
	 * @request POST:/genre
	 * @secure
	 * @response `201` `GenreControllerCreateDataDto`
	 */
	export namespace GenreControllerCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = CreateGenreDtoDto
		export type RequestHeaders = {}
		export type ResponseBody = GenreControllerCreateDataDto
	}

	/**
	 * No description
	 * @tags genre
	 * @name GenreControllerFindOne
	 * @summary 장르 상세 조회
	 * @request GET:/genre/{id}
	 * @secure
	 * @response `200` `GenreControllerFindOneDataDto`
	 */
	export namespace GenreControllerFindOne {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = GenreControllerFindOneDataDto
	}

	/**
	 * No description
	 * @tags genre
	 * @name GenreControllerUpdate
	 * @summary 장르 수정
	 * @request PATCH:/genre/{id}
	 * @secure
	 * @response `200` `GenreControllerUpdateDataDto`
	 */
	export namespace GenreControllerUpdate {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = UpdateGenreDtoDto
		export type RequestHeaders = {}
		export type ResponseBody = GenreControllerUpdateDataDto
	}

	/**
	 * No description
	 * @tags genre
	 * @name GenreControllerRemove
	 * @summary 장르 삭제
	 * @request DELETE:/genre/{id}
	 * @secure
	 * @response `200` `GenreControllerRemoveDataDto`
	 */
	export namespace GenreControllerRemove {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = GenreControllerRemoveDataDto
	}
}
