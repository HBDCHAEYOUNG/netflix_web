import {
	CreateUserProfileDtoDto,
	UpdateUserDtoDto,
	UpdateUserProfileDtoDto,
	UserControllerCreateUserProfileDataDto,
	UserControllerFindAllDataDto,
	UserControllerFindOneDataDto,
	UserControllerRemoveDataDto,
	UserControllerUpdateDataDto,
	UserControllerUpdateUserProfileDataDto,
} from './data-contracts'

export namespace User {
	/**
	 * No description
	 * @tags user
	 * @name UserControllerFindAll
	 * @summary 유저 목록 조회
	 * @request GET:/user
	 * @secure
	 * @response `200` `UserControllerFindAllDataDto`
	 */
	export namespace UserControllerFindAll {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UserControllerFindAllDataDto
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerFindOne
	 * @summary 유저 상세 조회
	 * @request GET:/user/{id}
	 * @secure
	 * @response `200` `UserControllerFindOneDataDto`
	 */
	export namespace UserControllerFindOne {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UserControllerFindOneDataDto
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerUpdate
	 * @summary 유저 수정
	 * @request PATCH:/user/{id}
	 * @secure
	 * @response `200` `UserControllerUpdateDataDto`
	 */
	export namespace UserControllerUpdate {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = UpdateUserDtoDto
		export type RequestHeaders = {}
		export type ResponseBody = UserControllerUpdateDataDto
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerRemove
	 * @summary 유저 삭제
	 * @request DELETE:/user/{id}
	 * @secure
	 * @response `200` `UserControllerRemoveDataDto`
	 */
	export namespace UserControllerRemove {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UserControllerRemoveDataDto
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerCreateUserProfile
	 * @summary 유저 프로필 생성
	 * @request POST:/user/{id}/profile
	 * @secure
	 * @response `201` `UserControllerCreateUserProfileDataDto`
	 */
	export namespace UserControllerCreateUserProfile {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = CreateUserProfileDtoDto
		export type RequestHeaders = {}
		export type ResponseBody = UserControllerCreateUserProfileDataDto
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerUpdateUserProfile
	 * @summary 유저 프로필 수정
	 * @request PATCH:/user/{id}/profile/{profileId}
	 * @secure
	 * @response `200` `UserControllerUpdateUserProfileDataDto`
	 */
	export namespace UserControllerUpdateUserProfile {
		export type RequestParams = {
			id: string
			profileId: string
		}
		export type RequestQuery = {}
		export type RequestBody = UpdateUserProfileDtoDto
		export type RequestHeaders = {}
		export type ResponseBody = UserControllerUpdateUserProfileDataDto
	}
}
