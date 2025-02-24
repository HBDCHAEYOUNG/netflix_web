import {
	CreateUserProfileDtoDto,
	UpdateUserDtoDto,
	UpdateUserProfileDtoDto,
	UserControllerAccessUserProfileDataDto,
	UserControllerCreateUserProfileDataDto,
	UserControllerDeleteUserProfileDataDto,
	UserControllerFindAllDataDto,
	UserControllerFindAllParamsDto,
	UserControllerFindOneDataDto,
	UserControllerRemoveDataDto,
	UserControllerUpdateDataDto,
	UserControllerUpdateUserProfileDataDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

class User<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

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
	userControllerFindAll = (query: UserControllerFindAllParamsDto, params: RequestParams = {}) =>
		this.http.request<UserControllerFindAllDataDto, any>({
			path: `/user`,
			method: 'GET',
			query: query,
			secure: true,
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
		this.http.request<UserControllerFindOneDataDto, any>({
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
		this.http.request<UserControllerUpdateDataDto, any>({
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
		this.http.request<UserControllerRemoveDataDto, any>({
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
	 * @response `200` `UserControllerCreateUserProfileDataDto` 유저 프로필 생성 성공
	 * @response `201` `void`
	 */
	userControllerCreateUserProfile = (id: number, data: CreateUserProfileDtoDto, params: RequestParams = {}) =>
		this.http.request<UserControllerCreateUserProfileDataDto, any>({
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
	 * @name UserControllerAccessUserProfile
	 * @summary 유저 프로필 접속
	 * @request POST:/user/{id}/profile/{profileId}
	 * @secure
	 * @response `200` `UserControllerAccessUserProfileDataDto` 유저 프로필 접속 성공
	 * @response `201` `void`
	 */
	userControllerAccessUserProfile = (profileId: number, id: number, params: RequestParams = {}) =>
		this.http.request<UserControllerAccessUserProfileDataDto, any>({
			path: `/user/${id}/profile/${profileId}`,
			method: 'POST',
			secure: true,
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
	 * @response `200` `UserControllerUpdateUserProfileDataDto` 유저 프로필 수정 성공
	 */
	userControllerUpdateUserProfile = (profileId: number, id: number, data: UpdateUserProfileDtoDto, params: RequestParams = {}) =>
		this.http.request<UserControllerUpdateUserProfileDataDto, any>({
			path: `/user/${id}/profile/${profileId}`,
			method: 'PATCH',
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
	 * @name UserControllerDeleteUserProfile
	 * @summary 유저 프로필 삭제
	 * @request DELETE:/user/{id}/profile/{profileId}
	 * @secure
	 * @response `200` `UserControllerDeleteUserProfileDataDto` 유저 프로필 삭제 성공
	 */
	userControllerDeleteUserProfile = (id: number, profileId: number, params: RequestParams = {}) =>
		this.http.request<UserControllerDeleteUserProfileDataDto, any>({
			path: `/user/${id}/profile/${profileId}`,
			method: 'DELETE',
			secure: true,
			format: 'json',
			...params,
		})
}

const httpClient = new HttpClient({
	baseUrl: import.meta.env.VITE_BASE_URL,
})

// Banner 인스턴스 생성 시 HTTP 클라이언트 전달
export default new User(httpClient)
