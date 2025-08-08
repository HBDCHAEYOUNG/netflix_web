import {
	CreateUserProfileDtoDto,
	UpdateUserDtoDto,
	UpdateUserProfileDtoDto,
	UserControllerAccessUserProfileDataDto,
	UserControllerCreateUserProfileDataDto,
	UserControllerDeleteUserProfileDataDto,
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
	 * @response `200` `UserControllerFindAllDataDto` 유저 목록 조회 성공
	 */
	export namespace UserControllerFindAll {
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
	 * @response `200` `UserControllerUpdateDataDto` 유저 수정 성공
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
	 * @response `200` `UserControllerCreateUserProfileDataDto` 유저 프로필 생성 성공
	 * @response `201` `void`
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
	 * @name UserControllerAccessUserProfile
	 * @summary 유저 프로필 접속
	 * @request POST:/user/{id}/profile/{profileId}
	 * @secure
	 * @response `200` `UserControllerAccessUserProfileDataDto` 유저 프로필 접속 성공
	 * @response `201` `void`
	 */
	export namespace UserControllerAccessUserProfile {
		export type RequestParams = {
			id: number
			profileId: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UserControllerAccessUserProfileDataDto
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerUpdateUserProfile
	 * @summary 유저 프로필 수정
	 * @request PATCH:/user/{id}/profile/{profileId}
	 * @secure
	 * @response `200` `UserControllerUpdateUserProfileDataDto` 유저 프로필 수정 성공
	 */
	export namespace UserControllerUpdateUserProfile {
		export type RequestParams = {
			id: number
			profileId: number
		}
		export type RequestQuery = {}
		export type RequestBody = UpdateUserProfileDtoDto
		export type RequestHeaders = {}
		export type ResponseBody = UserControllerUpdateUserProfileDataDto
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerDeleteUserProfile
	 * @summary 유저 프로필 삭제
	 * @request DELETE:/user/{id}/profile/{profileId}
	 * @secure
	 * @response `200` `UserControllerDeleteUserProfileDataDto` 유저 프로필 삭제 성공
	 */
	export namespace UserControllerDeleteUserProfile {
		export type RequestParams = {
			id: number
			profileId: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UserControllerDeleteUserProfileDataDto
	}
}
