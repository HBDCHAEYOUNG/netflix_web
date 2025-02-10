import { CommonControllerCreatedVideoDataDto } from './data-contracts'

export namespace Common {
	/**
	 * No description
	 * @tags common
	 * @name CommonControllerCreatedVideo
	 * @summary 비디오 업로드
	 * @request POST:/common/video
	 * @secure
	 * @response `201` `CommonControllerCreatedVideoDataDto`
	 */
	export namespace CommonControllerCreatedVideo {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = CommonControllerCreatedVideoDataDto
	}
}
