import {
	AuthControllerBlockTokenDataDto,
	AuthControllerLoginDataDto,
	AuthControllerPrivateDataDto,
	AuthControllerRegisterUserDataDto,
	AuthControllerRotateAccessTokenDataDto,
} from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

class Auth<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

	/**
	 * No description
	 *
	 * @tags auth
	 * @name AuthControllerRegisterUser
	 * @summary 회원가입
	 * @request POST:/auth/register
	 * @secure
	 * @response `201` `AuthControllerRegisterUserDataDto` 로그인 성공
	 * @response `401` `void` 인증 실패
	 */
	authControllerRegisterUser = (params: RequestParams = {}) =>
		this.http.request<AuthControllerRegisterUserDataDto, void>({
			path: `/auth/register`,
			method: 'POST',
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags auth
	 * @name AuthControllerLogin
	 * @summary 로그인
	 * @request POST:/auth/login
	 * @secure
	 * @response `201` `AuthControllerLoginDataDto` 로그인 성공
	 * @response `401` `void` 인증 실패
	 */
	authControllerLogin = (params: RequestParams = {}) =>
		this.http.request<AuthControllerLoginDataDto, void>({
			path: `/auth/login`,
			method: 'POST',
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags auth
	 * @name AuthControllerBlockToken
	 * @summary 토큰 막기(다른곳에서 로그인 시에 현재에서 막는 기능)
	 * @request POST:/auth/token/block
	 * @secure
	 * @response `201` `AuthControllerBlockTokenDataDto`
	 */
	authControllerBlockToken = (params: RequestParams = {}) =>
		this.http.request<AuthControllerBlockTokenDataDto, any>({
			path: `/auth/token/block`,
			method: 'POST',
			secure: true,
			...params,
		})
	/**
	 * No description
	 *
	 * @tags auth
	 * @name AuthControllerRotateAccessToken
	 * @summary access 토큰 재발급
	 * @request POST:/auth/token/access
	 * @secure
	 * @response `200` `AuthControllerRotateAccessTokenDataDto` access 토큰
	 * @response `201` `void`
	 */
	authControllerRotateAccessToken = (params: RequestParams = {}) =>
		this.http.request<AuthControllerRotateAccessTokenDataDto, any>({
			path: `/auth/token/access`,
			method: 'POST',
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags auth
	 * @name AuthControllerPrivate
	 * @summary 내 정보 조회
	 * @request GET:/auth/me
	 * @secure
	 * @response `200` `AuthControllerPrivateDataDto` 유저 정보
	 */
	authControllerPrivate = (params: RequestParams = {}) =>
		this.http.request<AuthControllerPrivateDataDto, any>({
			path: `/auth/me`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		})
}

const httpClient = new HttpClient({
	baseUrl: import.meta.env.VITE_BASE_URL,
})

// Banner 인스턴스 생성 시 HTTP 클라이언트 전달
export default new Auth(httpClient)
