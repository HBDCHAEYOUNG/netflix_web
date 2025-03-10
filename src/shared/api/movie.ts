import {
	CreateMovieDtoDto,
	MovieControllerCreateDataDto,
	MovieControllerFindAllDataDto,
	MovieControllerFindAllParamsDto,
	MovieControllerFindOneDataDto,
	MovieControllerFindSameGenreDataDto,
	MovieControllerFindSameGenreParamsDto,
	MovieControllerRemoveDataDto,
	MovieControllerUpdateDataDto,
	UpdateMovieDtoDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

class Movie<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

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
		this.http.request<MovieControllerFindAllDataDto, void>({
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
		this.http.request<MovieControllerCreateDataDto, any>({
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
	 * @response `200` `MovieControllerFindOneDataDto` 영화 상세 조회 성공
	 * @response `400` `void` 잘못된 영화 ID 입력
	 */
	movieControllerFindOne = (id: number, params: RequestParams = {}) =>
		this.http.request<MovieControllerFindOneDataDto, void>({
			path: `/movie/${id}`,
			method: 'GET',
			secure: true,
			format: 'json',
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
		this.http.request<MovieControllerUpdateDataDto, any>({
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
		this.http.request<MovieControllerRemoveDataDto, any>({
			path: `/movie/${id}`,
			method: 'DELETE',
			secure: true,
			format: 'json',
			...params,
		})
	/**
	 * No description
	 *
	 * @tags movie
	 * @name MovieControllerFindSameGenre
	 * @summary 상세 영화와 같은 장르 영화 조회
	 * @request GET:/movie/{id}/same-genre
	 * @secure
	 * @response `200` `MovieControllerFindSameGenreDataDto` 상세 영화와 같은 장르 영화 조회 성공
	 * @response `400` `void` 잘못된 영화 ID 입력
	 */
	movieControllerFindSameGenre = (
		{ id, ...query }: MovieControllerFindSameGenreParamsDto,
		params: RequestParams = {},
	) =>
		this.http.request<MovieControllerFindSameGenreDataDto, void>({
			path: `/movie/${id}/same-genre`,
			method: 'GET',
			query: query,
			secure: true,
			format: 'json',
			...params,
		})
}

const httpClient = new HttpClient({
	baseUrl: import.meta.env.VITE_BASE_URL,
})

// Banner 인스턴스 생성 시 HTTP 클라이언트 전달
export default new Movie(httpClient)
