import {
	CreateDirectorDtoDto,
	DirectorControllerCreateDataDto,
	DirectorControllerFindAllDataDto,
	DirectorControllerFindOneDataDto,
	DirectorControllerRemoveDataDto,
	DirectorControllerUpdateDataDto,
	UpdateDirectorDtoDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

class Director<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

	/**
	 * No description
	 *
	 * @tags director
	 * @name DirectorControllerFindAll
	 * @summary 감독 목록 조회
	 * @request GET:/director
	 * @secure
	 * @response `200` `DirectorControllerFindAllDataDto`
	 */
	directorControllerFindAll = (params: RequestParams = {}) =>
		this.http.request<DirectorControllerFindAllDataDto, any>({
			path: `/director`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags director
	 * @name DirectorControllerCreate
	 * @summary 감독 생성
	 * @request POST:/director
	 * @secure
	 * @response `201` `DirectorControllerCreateDataDto`
	 */
	directorControllerCreate = (data: CreateDirectorDtoDto, params: RequestParams = {}) =>
		this.http.request<DirectorControllerCreateDataDto, any>({
			path: `/director`,
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
	 * @tags director
	 * @name DirectorControllerFindOne
	 * @summary 감독 상세 조회
	 * @request GET:/director/{id}
	 * @secure
	 * @response `200` `DirectorControllerFindOneDataDto`
	 */
	directorControllerFindOne = (id: number, params: RequestParams = {}) =>
		this.http.request<DirectorControllerFindOneDataDto, any>({
			path: `/director/${id}`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags director
	 * @name DirectorControllerUpdate
	 * @summary 감독 수정
	 * @request PATCH:/director/{id}
	 * @secure
	 * @response `200` `DirectorControllerUpdateDataDto`
	 */
	directorControllerUpdate = (id: number, data: UpdateDirectorDtoDto, params: RequestParams = {}) =>
		this.http.request<DirectorControllerUpdateDataDto, any>({
			path: `/director/${id}`,
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
	 * @tags director
	 * @name DirectorControllerRemove
	 * @summary 감독 삭제
	 * @request DELETE:/director/{id}
	 * @secure
	 * @response `200` `DirectorControllerRemoveDataDto`
	 */
	directorControllerRemove = (id: number, params: RequestParams = {}) =>
		this.http.request<DirectorControllerRemoveDataDto, any>({
			path: `/director/${id}`,
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
export default new Director(httpClient)
