import {
	CreateMovieDtoDto,
	MovieControllerCreateDataDto,
	MovieControllerFindAllDataDto,
	MovieControllerFindOneDataDto,
	MovieControllerRemoveDataDto,
	MovieControllerUpdateDataDto,
	UpdateMovieDtoDto,
} from './data-contracts'

export namespace Movie {
	/**
	 * No description
	 * @tags movie
	 * @name MovieControllerFindAll
	 * @summary 영화 목록 조회
	 * @request GET:/movie
	 * @secure
	 * @response `200` `MovieControllerFindAllDataDto` 영화 목록 조회 성공
	 * @response `400` `void` pagination 데이터 잘못 입력
	 */
	export namespace MovieControllerFindAll {
		export type RequestParams = {}
		export type RequestQuery = {
			/**
			 * 페이지네이션 커서
			 * @example "eyJ2YWx1ZXMiOnsiaWQiOjIyfSwib3JkZXIiOlsiaWRfREVTQyJdfQ=="
			 */
			cursor?: string
			/**
			 * 정렬 순서
			 * @default ["id_DESC"]
			 * @example ["id_DESC"]
			 */
			order: string[]
			/**
			 * 가져올 데이터 갯수
			 * @default 5
			 * @example 5
			 */
			take: number
			/**
			 * 영화 제목
			 * @example "스파이더맨"
			 */
			title?: string
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = MovieControllerFindAllDataDto
	}

	/**
	 * No description
	 * @tags movie
	 * @name MovieControllerCreate
	 * @summary 영화 생성
	 * @request POST:/movie
	 * @secure
	 * @response `201` `MovieControllerCreateDataDto`
	 */
	export namespace MovieControllerCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = CreateMovieDtoDto
		export type RequestHeaders = {}
		export type ResponseBody = MovieControllerCreateDataDto
	}

	/**
	 * No description
	 * @tags movie
	 * @name MovieControllerFindOne
	 * @summary 영화 상세 조회
	 * @request GET:/movie/{id}
	 * @secure
	 * @response `200` `MovieControllerFindOneDataDto`
	 */
	export namespace MovieControllerFindOne {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = MovieControllerFindOneDataDto
	}

	/**
	 * No description
	 * @tags movie
	 * @name MovieControllerUpdate
	 * @summary 영화 수정
	 * @request PATCH:/movie/{id}
	 * @secure
	 * @response `200` `MovieControllerUpdateDataDto`
	 */
	export namespace MovieControllerUpdate {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = UpdateMovieDtoDto
		export type RequestHeaders = {}
		export type ResponseBody = MovieControllerUpdateDataDto
	}

	/**
	 * No description
	 * @tags movie
	 * @name MovieControllerRemove
	 * @summary 영화 삭제
	 * @request DELETE:/movie/{id}
	 * @secure
	 * @response `200` `MovieControllerRemoveDataDto`
	 */
	export namespace MovieControllerRemove {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = MovieControllerRemoveDataDto
	}
}
