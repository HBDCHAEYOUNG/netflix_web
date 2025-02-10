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
import { ContentType, HttpClient, RequestParams } from './http-client'

class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags user
	 * @name UserControllerFindAll
	 * @summary 유저 목록 조회
	 * @request GET:/user
	 * @secure
	 * @response `200` `UserControllerFindAllDataDto`
	 */
	userControllerFindAll = (params: RequestParams = {}) =>
		this.request<UserControllerFindAllDataDto, any>({
			path: `/user`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags user
	 * @name UserControllerFindOne
	 * @summary 유저 상세 조회
	 * @request GET:/user/{id}
	 * @secure
	 * @response `200` `UserControllerFindOneDataDto`
	 */
	userControllerFindOne = (id: number, params: RequestParams = {}) =>
		this.request<UserControllerFindOneDataDto, any>({
			path: `/user/${id}`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags user
	 * @name UserControllerUpdate
	 * @summary 유저 수정
	 * @request PATCH:/user/{id}
	 * @secure
	 * @response `200` `UserControllerUpdateDataDto`
	 */
	userControllerUpdate = (id: number, data: UpdateUserDtoDto, params: RequestParams = {}) =>
		this.request<UserControllerUpdateDataDto, any>({
			path: `/user/${id}`,
			method: 'PATCH',
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
	/**
	 * No description
	 *
	 * @tags user
	 * @name UserControllerRemove
	 * @summary 유저 삭제
	 * @request DELETE:/user/{id}
	 * @secure
	 * @response `200` `UserControllerRemoveDataDto`
	 */
	userControllerRemove = (id: number, params: RequestParams = {}) =>
		this.request<UserControllerRemoveDataDto, any>({
			path: `/user/${id}`,
			method: 'DELETE',
			secure: true,
			...params,
		})
	/**
	 * No description
	 *
	 * @tags user
	 * @name UserControllerCreateUserProfile
	 * @summary 유저 프로필 생성
	 * @request POST:/user/{id}/profile
	 * @secure
	 * @response `201` `UserControllerCreateUserProfileDataDto`
	 */
	userControllerCreateUserProfile = (id: number, data: CreateUserProfileDtoDto, params: RequestParams = {}) =>
		this.request<UserControllerCreateUserProfileDataDto, any>({
			path: `/user/${id}/profile`,
			method: 'POST',
			body: data,
			secure: true,
			type: ContentType.Json,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags user
	 * @name UserControllerUpdateUserProfile
	 * @summary 유저 프로필 수정
	 * @request PATCH:/user/{id}/profile/{profileId}
	 * @secure
	 * @response `200` `UserControllerUpdateUserProfileDataDto`
	 */
	userControllerUpdateUserProfile = (id: string, profileId: string, data: UpdateUserProfileDtoDto, params: RequestParams = {}) =>
		this.request<UserControllerUpdateUserProfileDataDto, any>({
			path: `/user/${id}/profile/${profileId}`,
			method: 'PATCH',
			body: data,
			secure: true,
			type: ContentType.Json,
			format: 'json',
			...params,
		})
}

export default new User({
	baseUrl: import.meta.env.VITE_BASE_URL,
})
