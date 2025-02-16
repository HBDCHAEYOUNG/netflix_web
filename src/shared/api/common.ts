import { CommonControllerCreatedVideoDataDto, CommonControllerCreatedVideoPayloadDto } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

class Common<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags common
	 * @name CommonControllerCreatedVideo
	 * @summary 비디오 업로드
	 * @request POST:/common/video
	 * @secure
	 * @response `201` `CommonControllerCreatedVideoDataDto`
	 */
	commonControllerCreatedVideo = (data: CommonControllerCreatedVideoPayloadDto, params: RequestParams = {}) =>
		this.request<CommonControllerCreatedVideoDataDto, any>({
			path: `/common/video`,
			method: 'POST',
			body: data,
			secure: true,
			type: ContentType.FormData,
			...params,
		})
}

export default new Common({
	baseUrl: import.meta.env.VITE_BASE_URL,
})
