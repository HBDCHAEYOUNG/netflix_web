import {
	CreateGenreDtoDto,
	GenreControllerCreateDataDto,
	GenreControllerFindAllDataDto,
	GenreControllerFindAllParamsDto,
	GenreControllerFindOneDataDto,
	GenreControllerRemoveDataDto,
	GenreControllerUpdateDataDto,
	UpdateGenreDtoDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

class Genre<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

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
	genreControllerFindAll = (query: GenreControllerFindAllParamsDto, params: RequestParams = {}) =>
		this.http.request<GenreControllerFindAllDataDto, any>({
			path: `/genre`,
			method: 'GET',
			query: query,
			secure: true,
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
		this.http.request<GenreControllerCreateDataDto, any>({
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
		this.http.request<GenreControllerFindOneDataDto, any>({
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
		this.http.request<GenreControllerUpdateDataDto, any>({
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
		this.http.request<GenreControllerRemoveDataDto, any>({
			path: `/genre/${id}`,
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
export default new Genre(httpClient)
