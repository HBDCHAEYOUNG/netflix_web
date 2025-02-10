import {
	CreateDirectorDtoDto,
	DirectorControllerCreateDataDto,
	DirectorControllerFindAllDataDto,
	DirectorControllerFindOneDataDto,
	DirectorControllerRemoveDataDto,
	DirectorControllerUpdateDataDto,
	UpdateDirectorDtoDto,
} from './data-contracts'

export namespace Director {
	/**
	 * No description
	 * @tags director
	 * @name DirectorControllerFindAll
	 * @summary 감독 목록 조회
	 * @request GET:/director
	 * @secure
	 * @response `200` `DirectorControllerFindAllDataDto`
	 */
	export namespace DirectorControllerFindAll {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = DirectorControllerFindAllDataDto
	}

	/**
	 * No description
	 * @tags director
	 * @name DirectorControllerCreate
	 * @summary 감독 생성
	 * @request POST:/director
	 * @secure
	 * @response `201` `DirectorControllerCreateDataDto`
	 */
	export namespace DirectorControllerCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = CreateDirectorDtoDto
		export type RequestHeaders = {}
		export type ResponseBody = DirectorControllerCreateDataDto
	}

	/**
	 * No description
	 * @tags director
	 * @name DirectorControllerFindOne
	 * @summary 감독 상세 조회
	 * @request GET:/director/{id}
	 * @secure
	 * @response `200` `DirectorControllerFindOneDataDto`
	 */
	export namespace DirectorControllerFindOne {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = DirectorControllerFindOneDataDto
	}

	/**
	 * No description
	 * @tags director
	 * @name DirectorControllerUpdate
	 * @summary 감독 수정
	 * @request PATCH:/director/{id}
	 * @secure
	 * @response `200` `DirectorControllerUpdateDataDto`
	 */
	export namespace DirectorControllerUpdate {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = UpdateDirectorDtoDto
		export type RequestHeaders = {}
		export type ResponseBody = DirectorControllerUpdateDataDto
	}

	/**
	 * No description
	 * @tags director
	 * @name DirectorControllerRemove
	 * @summary 감독 삭제
	 * @request DELETE:/director/{id}
	 * @secure
	 * @response `200` `DirectorControllerRemoveDataDto`
	 */
	export namespace DirectorControllerRemove {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = DirectorControllerRemoveDataDto
	}
}
