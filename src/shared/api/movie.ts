import {
	CreateMovieDtoDto,
	MovieControllerCreateDataDto,
	MovieControllerFindAllDataDto,
	MovieControllerFindAllParamsDto,
	MovieControllerFindOneDataDto,
	MovieControllerRemoveDataDto,
	MovieControllerUpdateDataDto,
	UpdateMovieDtoDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

class Movie<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags movie
	 * @name MovieControllerFindAll
	 * @summary 영화 목록 조회
	 * @request GET:/movie
	 * @secure
	 * @response `200` `MovieControllerFindAllDataDto` 영화 목록 조회 성공
	 * @response `400` `void` pagination 데이터 잘못 입력
	 */
	movieControllerFindAll = (query: MovieControllerFindAllParamsDto, params: RequestParams = {}) =>
		this.request<MovieControllerFindAllDataDto, void>({
			path: `/movie`,
			method: 'GET',
			query: query,
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags movie
	 * @name MovieControllerCreate
	 * @summary 영화 생성
	 * @request POST:/movie
	 * @secure
	 * @response `201` `MovieControllerCreateDataDto`
	 */
	movieControllerCreate = (data: CreateMovieDtoDto, params: RequestParams = {}) =>
		this.request<MovieControllerCreateDataDto, any>({
			path: `/movie`,
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
	 * @tags movie
	 * @name MovieControllerFindOne
	 * @summary 영화 상세 조회
	 * @request GET:/movie/{id}
	 * @secure
	 * @response `200` `MovieControllerFindOneDataDto`
	 */
	movieControllerFindOne = (id: number, params: RequestParams = {}) =>
		this.request<MovieControllerFindOneDataDto, any>({
			path: `/movie/${id}`,
			method: 'GET',
			secure: true,
			...params,
		})
	/**
	 * No description
	 *
	 * @tags movie
	 * @name MovieControllerUpdate
	 * @summary 영화 수정
	 * @request PATCH:/movie/{id}
	 * @secure
	 * @response `200` `MovieControllerUpdateDataDto`
	 */
	movieControllerUpdate = (id: number, data: UpdateMovieDtoDto, params: RequestParams = {}) =>
		this.request<MovieControllerUpdateDataDto, any>({
			path: `/movie/${id}`,
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
	 * @tags movie
	 * @name MovieControllerRemove
	 * @summary 영화 삭제
	 * @request DELETE:/movie/{id}
	 * @secure
	 * @response `200` `MovieControllerRemoveDataDto`
	 */
	movieControllerRemove = (id: number, params: RequestParams = {}) =>
		this.request<MovieControllerRemoveDataDto, any>({
			path: `/movie/${id}`,
			method: 'DELETE',
			secure: true,
			format: 'json',
			...params,
		})
}

export default new Movie({
	baseUrl: import.meta.env.VITE_BASE_URL,
})
