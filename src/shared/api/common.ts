import { CommonControllerCreatedVideoDataDto, CommonControllerCreatedVideoPayloadDto } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

class Common<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

	/**
	 * No description
	 *
	 * @tags common
	 * @name CommonControllerCreatedVideo
	 * @summary 비디오 업로드
	 * @request POST:/common/video
	 * @secure
	 * @response `200` `CommonControllerCreatedVideoDataDto` 비디오 업로드 성공
	 * @response `201` `void`
	 */
	commonControllerCreatedVideo = (data: CommonControllerCreatedVideoPayloadDto, params: RequestParams = {}) =>
		this.http.request<CommonControllerCreatedVideoDataDto, any>({
			path: `/common/video`,
			method: 'POST',
			body: data,
			secure: true,
			type: ContentType.FormData,
			format: 'json',
			...params,
		})
}

const httpClient = new HttpClient({
	baseUrl: import.meta.env.VITE_BASE_URL,
})

// Banner 인스턴스 생성 시 HTTP 클라이언트 전달
export default new Common(httpClient)
