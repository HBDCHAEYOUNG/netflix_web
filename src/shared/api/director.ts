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

class Director<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
		this.request<DirectorControllerFindAllDataDto, any>({
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
		this.request<DirectorControllerCreateDataDto, any>({
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
		this.request<DirectorControllerFindOneDataDto, any>({
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
		this.request<DirectorControllerUpdateDataDto, any>({
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
		this.request<DirectorControllerRemoveDataDto, any>({
			path: `/director/${id}`,
			method: 'DELETE',
			secure: true,
			format: 'json',
			...params,
		})
}

export default new Director({
	baseUrl: import.meta.env.VITE_BASE_URL,
})
