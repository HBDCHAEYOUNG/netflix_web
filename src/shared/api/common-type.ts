import { CommonControllerCreatedVideoDataDto, CommonControllerCreatedVideoPayloadDto } from './data-contracts'

export namespace Common {
	/**
	 * No description
	 * @tags common
	 * @name CommonControllerCreatedVideo
	 * @summary 비디오 업로드
	 * @request POST:/common/video
	 * @secure
	 * @response `200` `CommonControllerCreatedVideoDataDto` 비디오 업로드 성공
	 * @response `201` `void`
	 */
	export namespace CommonControllerCreatedVideo {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = CommonControllerCreatedVideoPayloadDto
		export type RequestHeaders = {}
		export type ResponseBody = CommonControllerCreatedVideoDataDto
	}
}
