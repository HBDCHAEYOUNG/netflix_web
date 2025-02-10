import {
	AuthControllerBlockTokenDataDto,
	AuthControllerLoginDataDto,
	AuthControllerPrivateDataDto,
	AuthControllerRegisterUserDataDto,
	AuthControllerRotateAccessTokenDataDto,
} from './data-contracts'

export namespace Auth {
	/**
	 * No description
	 * @tags auth
	 * @name AuthControllerRegisterUser
	 * @summary 회원가입
	 * @request POST:/auth/register
	 * @secure
	 * @response `201` `AuthControllerRegisterUserDataDto` 로그인 성공
	 * @response `401` `void` 인증 실패
	 */
	export namespace AuthControllerRegisterUser {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {
			/** Basic Auth token (email:password in base64) */
			Authorization: string
		}
		export type ResponseBody = AuthControllerRegisterUserDataDto
	}

	/**
	 * No description
	 * @tags auth
	 * @name AuthControllerLogin
	 * @summary 로그인
	 * @request POST:/auth/login
	 * @secure
	 * @response `201` `AuthControllerLoginDataDto` 로그인 성공
	 * @response `401` `void` 인증 실패
	 */
	export namespace AuthControllerLogin {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {
			/** Basic Auth token (email:password in base64) */
			Authorization: string
		}
		export type ResponseBody = AuthControllerLoginDataDto
	}

	/**
	 * No description
	 * @tags auth
	 * @name AuthControllerBlockToken
	 * @summary 토큰 막기(다른곳에서 로그인 시에 현재에서 막는 기능)
	 * @request POST:/auth/token/block
	 * @secure
	 * @response `201` `AuthControllerBlockTokenDataDto`
	 */
	export namespace AuthControllerBlockToken {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = AuthControllerBlockTokenDataDto
	}

	/**
	 * No description
	 * @tags auth
	 * @name AuthControllerRotateAccessToken
	 * @summary access 토큰 재발급
	 * @request POST:/auth/token/access
	 * @secure
	 * @response `200` `AuthControllerRotateAccessTokenDataDto` access 토큰
	 * @response `201` `void`
	 */
	export namespace AuthControllerRotateAccessToken {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = AuthControllerRotateAccessTokenDataDto
	}

	/**
	 * No description
	 * @tags auth
	 * @name AuthControllerPrivate
	 * @summary 내 정보 조회
	 * @request GET:/auth/me
	 * @secure
	 * @response `200` `AuthControllerPrivateDataDto` 유저 정보
	 */
	export namespace AuthControllerPrivate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = AuthControllerPrivateDataDto
	}
}
