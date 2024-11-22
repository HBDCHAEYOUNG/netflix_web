import {
	ProductCreateDataDto,
	ProductCreatePayloadDto,
	ProductDeleteDataDto,
	ProductDetailDataDto,
	ProductListDataDto,
	ProductListParams1SortEnumDto,
	ProductPartialUpdateDataDto,
	ProductPartialUpdatePayloadDto,
	SalesListDataDto,
	SalesListParams1StatusEnumDto,
} from './data-contracts'

export namespace Product {
	/**
 * @description 상품 목록을 페이지네이션하여 조회합니다.
 * @tags Product
 * @name ProductList
 * @summary 상품 목록 조회
 * @request GET:/product
 * @secure
 * @response `200` `ProductListDataDto` 상품 목록 조회 성공
 * @response `400` `{
  \** 오류 메시지 *\
    message: string,

}` 잘못된 요청
 * @response `404` `{
  \** 오류 메시지 *\
    message: string,

}` 현재 페이지에 표시할 상품이 없음
*/
	export namespace ProductList {
		export type RequestParams = {}
		export type RequestQuery = {
			/** 지역 아이디로 필터링 */
			area?: string
			/** 검색 키워드 */
			keyword?: string
			/**
			 * 한 페이지당 항목 수 (기본값: 10)
			 * @min 1
			 * @max 100
			 * @example 10
			 */
			limit: number
			/** 최대 가격으로 필터링 (기본값: 100000000) */
			maxPrice?: number
			/**
			 * 최소 가격으로 필터링 (기본값: 0)
			 * @min 0
			 */
			minPrice?: number
			/**
			 * 페이지 번호 (기본값: 1)
			 * @min 1
			 * @example 1
			 */
			page: number
			/**
			 * 정렬 방식
			 * - `latest`: 최신순 (기본값)
			 * - `priceAsc`: 낮은가격순
			 * - `priceDesc`: 높은가격순
			 */
			sort?: ProductListParams1SortEnumDto
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ProductListDataDto
	}

	/**
 * @description 새로운 상품을 추가합니다.
 * @tags Product
 * @name ProductCreate
 * @summary 상품 추가
 * @request POST:/product
 * @secure
 * @response `201` `ProductCreateDataDto` 상품 추가 성공
 * @response `400` `{
  \** 오류 메시지 *\
    message: string,

}` 잘못된 요청
 * @response `401` `{
  \** 오류 메시지 *\
    message: string,

}` 인증되지 않은 사용자
*/
	export namespace ProductCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ProductCreatePayloadDto
		export type RequestHeaders = {}
		export type ResponseBody = ProductCreateDataDto
	}

	/**
 * @description 특정 상품의 상세 정보를 조회합니다.
 * @tags Product
 * @name ProductDetail
 * @summary 상품 상세 조회
 * @request GET:/product/{id}
 * @secure
 * @response `200` `ProductDetailDataDto` 상품 상세 조회 성공
 * @response `400` `{
  \** 오류 메시지 *\
    message: string,

}` 잘못된 요청
 * @response `404` `{
  \** 오류 메시지 *\
    message: string,

}` 해당 ID의 상품을 찾을 수 없음
*/
	export namespace ProductDetail {
		export type RequestParams = {
			/**
			 * 상품 ID
			 * @min 1
			 */
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ProductDetailDataDto
	}

	/**
 * @description 특정 상품의 정보를 수정합니다.
 * @tags Product
 * @name ProductPartialUpdate
 * @summary 상품 수정
 * @request PATCH:/product/{id}
 * @secure
 * @response `200` `ProductPartialUpdateDataDto` 상품 수정 성공
 * @response `400` `{
  \** 오류 메시지 *\
    message: string,

}` 잘못된 요청
 * @response `404` `{
  \** 오류 메시지 *\
    message: string,

}` 해당 ID의 상품을 찾을 수 없음 또는 상품 소유자가 아님
*/
	export namespace ProductPartialUpdate {
		export type RequestParams = {
			/**
			 * 상품 ID
			 * @min 1
			 */
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = ProductPartialUpdatePayloadDto
		export type RequestHeaders = {}
		export type ResponseBody = ProductPartialUpdateDataDto
	}

	/**
 * @description 특정 상품을 삭제합니다.
 * @tags Product
 * @name ProductDelete
 * @summary 상품 삭제
 * @request DELETE:/product/{id}
 * @secure
 * @response `204` `ProductDeleteDataDto` 상품 삭제 성공
 * @response `400` `{
  \** 오류 메시지 *\
    message: string,

}` 잘못된 요청
 * @response `404` `{
  \** 오류 메시지 *\
    message: string,

}` 해당 ID의 상품을 찾을 수 없음 또는 상품 소유자가 아님
*/
	export namespace ProductDelete {
		export type RequestParams = {
			/**
			 * 상품 ID
			 * @min 1
			 */
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ProductDeleteDataDto
	}

	/**
 * @description 사용자의 판매 내역을 페이지네이션하여 조회합니다.
 * @tags Product
 * @name SalesList
 * @summary 내 판매 내역 조회
 * @request GET:/product/sales
 * @secure
 * @response `200` `SalesListDataDto` 내 판매 내역 조회 성공
 * @response `400` `{
  \** 오류 메시지 *\
    message: string,

}` 잘못된 요청
 * @response `401` `{
  \** 오류 메시지 *\
    message: string,

}` 인증되지 않은 사용자
 * @response `404` `{
  \** 오류 메시지 *\
    message: string,

}` 판매중인 상품이 없음
*/
	export namespace SalesList {
		export type RequestParams = {}
		export type RequestQuery = {
			/**
			 * 한 페이지당 항목 수 (기본값: 10)
			 * @min 1
			 * @max 100
			 * @example 10
			 */
			limit?: number
			/**
			 * 페이지 번호 (기본값: 1)
			 * @min 1
			 * @example 1
			 */
			page?: number
			/**
			 * 판매 상태 (sold: 판매완료, sale: 판매중)
			 * @example "sale"
			 */
			status?: SalesListParams1StatusEnumDto
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = SalesListDataDto
	}
}
