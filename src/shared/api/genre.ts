import {
	CreateGenreDtoDto,
	GenreControllerCreateDataDto,
	GenreControllerFindAllDataDto,
	GenreControllerFindOneDataDto,
	GenreControllerRemoveDataDto,
	GenreControllerUpdateDataDto,
	UpdateGenreDtoDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

class Genre<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags genre
	 * @name GenreControllerFindAll
	 * @summary 장르 목록 조회
	 * @request GET:/genre
	 * @secure
	 * @response `200` `GenreControllerFindAllDataDto`
	 */
	genreControllerFindAll = (params: RequestParams = {}) =>
		this.request<GenreControllerFindAllDataDto, any>({
			path: `/genre`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags genre
	 * @name GenreControllerCreate
	 * @summary 장르 생성
	 * @request POST:/genre
	 * @secure
	 * @response `201` `GenreControllerCreateDataDto`
	 */
	genreControllerCreate = (data: CreateGenreDtoDto, params: RequestParams = {}) =>
		this.request<GenreControllerCreateDataDto, any>({
			path: `/genre`,
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
	 * @tags genre
	 * @name GenreControllerFindOne
	 * @summary 장르 상세 조회
	 * @request GET:/genre/{id}
	 * @secure
	 * @response `200` `GenreControllerFindOneDataDto`
	 */
	genreControllerFindOne = (id: number, params: RequestParams = {}) =>
		this.request<GenreControllerFindOneDataDto, any>({
			path: `/genre/${id}`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags genre
	 * @name GenreControllerUpdate
	 * @summary 장르 수정
	 * @request PATCH:/genre/{id}
	 * @secure
	 * @response `200` `GenreControllerUpdateDataDto`
	 */
	genreControllerUpdate = (id: number, data: UpdateGenreDtoDto, params: RequestParams = {}) =>
		this.request<GenreControllerUpdateDataDto, any>({
			path: `/genre/${id}`,
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
	 * @tags genre
	 * @name GenreControllerRemove
	 * @summary 장르 삭제
	 * @request DELETE:/genre/{id}
	 * @secure
	 * @response `200` `GenreControllerRemoveDataDto`
	 */
	genreControllerRemove = (id: number, params: RequestParams = {}) =>
		this.request<GenreControllerRemoveDataDto, any>({
			path: `/genre/${id}`,
			method: 'DELETE',
			secure: true,
			format: 'json',
			...params,
		})
}

export default new Genre({
	baseUrl: import.meta.env.VITE_BASE_URL,
})
