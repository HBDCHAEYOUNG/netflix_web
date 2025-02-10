import { CommonControllerCreatedVideoDataDto } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

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
	commonControllerCreatedVideo = (params: RequestParams = {}) =>
		this.request<CommonControllerCreatedVideoDataDto, any>({
			path: `/common/video`,
			method: 'POST',
			secure: true,
			...params,
		})
}

export default new Common({
	baseUrl: import.meta.env.VITE_BASE_URL,
})
