/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type AuthControllerBlockTokenDataDto = any

export type AuthControllerEmailDataDto = any

export type AuthControllerLoginDataDto = TokenResDtoDto

export type AuthControllerPrivateDataDto = MeResDtoDto

export type AuthControllerRegisterUserDataDto = TokenResDtoDto

export type AuthControllerRotateAccessTokenDataDto = TokenAccessResDtoDto

export type CommonControllerCreatedVideoDataDto = any

export interface CommonControllerCreatedVideoPayloadDto {
	/**
	 * MP4 비디오 파일
	 * @format binary
	 */
	video?: File
}

export interface CreateDirectorDtoDto {
	/**
	 * 감독 생년월일
	 * @format date-time
	 * @example "1952-01-01"
	 */
	dob: string
	/**
	 * 감독 이름
	 * @example "스티븐 스필버그"
	 */
	name: string
	/**
	 * 감독 국적
	 * @example "미국"
	 */
	nationality: string
}

export interface CreateGenreDtoDto {
	/**
	 * 장르 이름
	 * @example "액션"
	 */
	name: string
}

export interface CreateMovieDtoDto {
	/**
	 * 영화 상세 설명
	 * @example "거미 인간 영화"
	 */
	detail: string
	/**
	 * 감독 객체 ID
	 * @example 1
	 */
	directorId: number
	/**
	 * 장르 객체 ID 배열
	 * @example [1,2,3]
	 */
	genreIds: number[]
	/**
	 * 영화 파일 이름
	 * @example "aaa-bbbb-cccc.jpg"
	 */
	movieFileName: string
	/**
	 * 영화 썸네일 파일
	 * @example "aaa-bbbb-cccc.png"
	 */
	thumbnail: string
	/**
	 * 영화 제목
	 * @example "스파이더맨"
	 */
	title: string
}

export interface CreateUserProfileDtoDto {
	/**
	 * 유저 프로필 이미지
	 * @example "https://example.com/avatar.png"
	 */
	avatar?: string
	/**
	 * 유저 이름
	 * @example "John Doe"
	 */
	name: string
}

export type DirectorControllerCreateDataDto = object

export type DirectorControllerFindAllDataDto = GetDirectorsResDtoDto

export interface DirectorControllerFindAllParamsDto {
	/**
	 * 페이지
	 * @default 1
	 * @example 1
	 */
	page?: number
	take: number
}

export type DirectorControllerFindOneDataDto = DirectorDto

export type DirectorControllerRemoveDataDto = number

export type DirectorControllerUpdateDataDto = DirectorDto

export interface DirectorDto {
	/**
	 * 감독 생년월일
	 * @format date-time
	 * @example "1952-01-01"
	 */
	dob: string
	/**
	 * 감독 아이디
	 * @example 1
	 */
	id: number
	/** 감독이 감독한 영화 목록 */
	movies: MovieDto[]
	/**
	 * 감독 이름
	 * @example "스티븐 스필버그"
	 */
	name: string
	/**
	 * 감독 국적
	 * @example "미국"
	 */
	nationality: string
}

export interface EmailCheckDtoDto {
	/**
	 * 이메일
	 * @example "example@example.com"
	 */
	email: string
}

export type GenreControllerCreateDataDto = object

export type GenreControllerFindAllDataDto = GetGenresResDtoDto

export interface GenreControllerFindAllParamsDto {
	/**
	 * 페이지
	 * @default 1
	 * @example 1
	 */
	page?: number
	take: number
}

export type GenreControllerFindOneDataDto = GenreDto

export type GenreControllerRemoveDataDto = number

export type GenreControllerUpdateDataDto = GenreDto

export interface GenreDto {
	/**
	 * 장르 아이디
	 * @example 1
	 */
	id: number
	/** 장르에 속한 영화 목록 */
	movies: MovieDto[]
	/**
	 * 장르 이름
	 * @example "액션"
	 */
	name: string
}

export interface GetDirectorsResDtoDto {
	/**
	 * 감독 총 갯수
	 * @example 100
	 */
	count: number
	data: DirectorDto[]
}

export interface GetGenresResDtoDto {
	/**
	 * 장르 총 갯수
	 * @example 100
	 */
	count: number
	data: GenreDto[]
}

export interface GetMovieResDtoDto {
	/**
	 * 작성자 정보
	 * @example {"id":4,"email":"test@naver.com","role":"0"}
	 */
	creator: UserDto
	detail: {
		detail: string
		id: number
	}
	director: {
		/** @format date-time */
		dob: string
		id: number
		name: string
		nationality: string
	}
	/**
	 * 싫어요 수
	 * @example 0
	 */
	disLikeCount: number
	/**
	 * 장르 목록
	 * @example [{"id":4,"name":"transmitter"}]
	 */
	genres: GenreDto[]
	/**
	 * 영화 ID
	 * @example 1
	 */
	id: number
	/**
	 * 좋아요 수
	 * @example 2
	 */
	likeCount: number
	/**
	 * 좋아요한 사용자 목록
	 * @example [{"userId":4,"movieId":1,"isLike":true}]
	 */
	likedUsers: string[]
	/**
	 * 영화 파일 경로
	 * @example "public/movie/example.mp4"
	 */
	movieFilePath: string
	/**
	 * 추천 영화 목록 (좋아요가 많은 상위 10개 영화)
	 * @example [{"id":3,"title":"panel optical m","movieFilePath":"http://example.com/movie.mp4","thumbnail":"http://example.com/thumbnail.jpg","likeCount":2,"disLikeCount":0,"viewCount":0,"genres":[{"id":1,"name":"firewall"}]}]
	 */
	recommendations: MovieDto[]
	/**
	 * 영화 제목
	 * @example "monitor bluetooth d"
	 */
	title: string
	/**
	 * 조회수
	 * @example 19
	 */
	viewCount: number
	/**
	 * 찜 목록
	 * @example [{"userId":4,"movieId":1,"isWish":true}]
	 */
	wishList: string[]
}

export interface GetMovieWishlistResDtoDto {
	/**
	 * 장르 총 갯수
	 * @example 100
	 */
	count: number
	data: MovieDto[]
}

export interface GetMoviesBannerResDtoDto {
	/**
	 * 영화 생성 일자
	 * @format date-time
	 * @example "2025-02-02T04:57:00.700Z"
	 */
	createdAt: string
	/** 영화 상세 */
	detail: MovieDetailDto
	/**
	 * 영화 싫어요 수
	 * @example 0
	 */
	disLikeCount: number
	/**
	 * 영화 아이디
	 * @example 11
	 */
	id: number
	/**
	 * 영화 좋아요 수
	 * @example 0
	 */
	likeCount: number
	/**
	 * 영화 파일 경로
	 * @example "http://localhost:3000/public/movie/058b68ff-da1f-4744-8e82-3874a1488bdc_1738472216774.mp4"
	 */
	movieFilePath: string
	/**
	 * 영화 제목
	 * @example "driver neural 1"
	 */
	title: string
	/**
	 * 영화 조회 수
	 * @example 0
	 */
	viewCount: number
}

export interface GetMoviesResDtoDto {
	data: MovieDto[]
	/**
	 * 영화 페이지
	 * @example 1
	 */
	page: number
	/**
	 * 영화 총 갯수
	 * @example 100
	 */
	total: number
}

export interface GetUsersResDtoDto {
	/**
	 * 장르 총 갯수
	 * @example 100
	 */
	count: number
	data: UserDto[]
}

export interface MeResDtoDto {
	/**
	 * 토큰 만료 시간
	 * @example 1738633916
	 */
	exp: number
	/**
	 * 토큰 발급 시간
	 * @example 1738633616
	 */
	iat: number
	/**
	 * 유저 아이디
	 * @example 1
	 */
	id: number
	/**
	 * 유저 역할
	 * @example 0
	 */
	role: MeResDtoRoleEnumDto
	/**
	 * 토큰 타입
	 * @example "access"
	 */
	type: string
}

/**
 * 유저 역할
 * @example 0
 */
export enum MeResDtoRoleEnumDto {
	Value0 = '0',
	Value1 = '1',
	Value2 = '2',
	Value3 = '3',
	Value4 = '4',
}

export type MovieControllerCreateDataDto = MovieDto

export type MovieControllerCreateMovieDislikeDataDto = any

export type MovieControllerCreateMovieLikeDataDto = any

export type MovieControllerCreateMovieWishDataDto = any

export type MovieControllerFindAllDataDto = GetMoviesResDtoDto

export type MovieControllerFindAllMovieBannerDataDto = GetMoviesBannerResDtoDto

export type MovieControllerFindAllMovieRankDataDto = object

export type MovieControllerFindAllMovieWishDataDto = GetMovieWishlistResDtoDto

export interface MovieControllerFindAllMovieWishParamsDto {
	/**
	 * 페이지
	 * @default 1
	 * @example 1
	 */
	page?: number
	take: number
}

export interface MovieControllerFindAllParamsDto {
	/**
	 * 페이지네이션 커서
	 * @example "eyJ2YWx1ZXMiOnsiaWQiOjIyfSwib3JkZXIiOlsiaWRfREVTQyJdfQ=="
	 */
	cursor?: string
	/**
	 * 정렬 순서
	 * @default ["id_DESC"]
	 * @example ["id_DESC"]
	 */
	order: string[]
	/**
	 * 페이지
	 * @default 1
	 * @example 1
	 */
	page?: number
	/**
	 * 가져올 데이터 갯수
	 * @default 5
	 * @example 5
	 */
	take: number
	/**
	 * 영화 제목
	 * @example "스파이더맨"
	 */
	title?: string
}

export type MovieControllerFindOneDataDto = GetMovieResDtoDto

export type MovieControllerRemoveDataDto = number

export type MovieControllerUpdateDataDto = MovieDto

export interface MovieDetailDto {
	/**
	 * 영화 상세 내용
	 * @example "영화 상세 내용"
	 */
	detail: string
	/**
	 * 영화 상세 아이디
	 * @example 1
	 */
	id: number
	/** 영화 */
	movie: MovieDto
}

export interface MovieDto {
	/** 영화 생성자 */
	creator: UserDto
	/** 영화 상세 */
	detail: MovieDetailDto
	/** 영화 감독 */
	director: DirectorDto
	/**
	 * 영화 싫어요 수
	 * @example 100
	 */
	disLikeCount: number
	/** 영화 장르 */
	genres: GenreDto[]
	/** 영화 아이디 */
	id: number
	/**
	 * 영화 좋아요 수
	 * @example 100
	 */
	likeCount: number
	likedUsers: MovieUserLikeDto[][]
	/**
	 * 영화 파일 경로
	 * @example "http://localhost:3000/movie/1/file"
	 */
	movieFilePath: string
	/**
	 * 영화 썸네일 파일
	 * @example "aaa-bbbb-cccc.png"
	 */
	thumbnail: string
	/**
	 * 영화 제목
	 * @example "스파이더맨"
	 */
	title: string
	/**
	 * 영화 조회 수
	 * @example 100
	 */
	viewCount: number
	/** 영화 위시리스트 목록 */
	wishList: MovieUserWishListDto[]
}

export interface MovieUserLikeDto {
	/**
	 * 좋아요 여부
	 * @example true
	 */
	isLike: boolean
	/** 영화 */
	movie: MovieDto
	/** 유저 */
	user: UserDto
}

export interface MovieUserWishListDto {
	/**
	 * 좋아요 여부
	 * @example true
	 */
	isWish: boolean
	/** 영화 */
	movie: MovieDto
	/** 유저 */
	user: UserDto
}

export interface TokenAccessResDtoDto {
	/**
	 * access 토큰
	 * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6MywidHlwZSI6ImFjY2VzcyIsImlhdCI6MTczODQ4OTM4MiwiZXhwIjoxNzM4NDg5NjgyfQ.1-gMPBzZs3VoSpL1-HPr"
	 */
	accessToken: string
}

export interface TokenResDtoDto {
	/**
	 * access 토큰
	 * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
	 */
	accessToken: string
	/**
	 * refresh 토큰
	 * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
	 */
	refreshToken: string
}

export interface UpdateDirectorDtoDto {
	/**
	 * 감독 생년월일
	 * @format date-time
	 * @example "1952-01-01"
	 */
	dob?: string
	/**
	 * 감독 이름
	 * @example "스티븐 스필버그"
	 */
	name?: string
	/**
	 * 감독 국적
	 * @example "미국"
	 */
	nationality?: string
}

export interface UpdateGenreDtoDto {
	/**
	 * 장르 이름
	 * @example "액션"
	 */
	name?: string
}

export interface UpdateMovieDtoDto {
	/**
	 * 영화 상세 설명
	 * @example "거미 인간 영화"
	 */
	detail?: string
	/**
	 * 감독 객체 ID
	 * @example 1
	 */
	directorId?: number
	/**
	 * 장르 객체 ID 배열
	 * @example [1,2,3]
	 */
	genreIds?: number[]
	/**
	 * 영화 파일 이름
	 * @example "aaa-bbbb-cccc.jpg"
	 */
	movieFileName?: string
	/**
	 * 영화 썸네일 파일
	 * @example "aaa-bbbb-cccc.png"
	 */
	thumbnail?: string
	/**
	 * 영화 제목
	 * @example "스파이더맨"
	 */
	title?: string
}

export interface UpdateUserDtoDto {
	/**
	 * 0 = Admin(관리자)<br>1 = Premium(프리미엄)<br>2 = Standard(스탠다드)<br>3 = Advertising(광고)<br>4 = Free(프리)
	 * @default "4"
	 */
	role?: UpdateUserDtoRoleEnumDto
}

/**
 * 0 = Admin(관리자)<br>1 = Premium(프리미엄)<br>2 = Standard(스탠다드)<br>3 = Advertising(광고)<br>4 = Free(프리)
 * @default "4"
 */
export enum UpdateUserDtoRoleEnumDto {
	Value0 = '0',
	Value1 = '1',
	Value2 = '2',
	Value3 = '3',
	Value4 = '4',
}

export interface UpdateUserProfileDtoDto {
	/**
	 * 유저 프로필 이미지
	 * @example "https://example.com/avatar.png"
	 */
	avatar?: string
	/**
	 * 유저 이름
	 * @example "John Doe"
	 */
	name?: string
}

export type UserControllerAccessUserProfileDataDto = TokenResDtoDto

export type UserControllerCreateUserProfileDataDto = TokenResDtoDto

export type UserControllerDeleteUserProfileDataDto = TokenResDtoDto

export type UserControllerFindAllDataDto = GetUsersResDtoDto

export interface UserControllerFindAllParamsDto {
	/**
	 * 페이지
	 * @default 1
	 * @example 1
	 */
	page?: number
	take: number
}

export type UserControllerFindOneDataDto = UserDto

export type UserControllerRemoveDataDto = any

export type UserControllerUpdateDataDto = any

export type UserControllerUpdateUserProfileDataDto = TokenResDtoDto

export interface UserDto {
	/** 유저가 생성한 영화 목록 */
	createdMovies: MovieDto
	/**
	 * 유저 이메일
	 * @example "test@test.com"
	 */
	email: string
	/**
	 * 유저 아이디
	 * @example 1
	 */
	id: number
	/** 유저가 좋아요한 영화 목록 */
	likedMovies: MovieUserLikeDto
	password: string
	/** 유저 프로필 목록 */
	profiles: UserProfileDto
	/** 0 = Admin(관리자)<br>1 = Premium(프리미엄)<br>2 = Standard(스탠다드)<br>3 = Advertising(광고)<br>4 = Free(프리) */
	role: UserRoleEnumDto
	/** 유저가 찜한 영화 목록 */
	wishList: MovieUserWishListDto
}

export interface UserProfileDto {
	/**
	 * 유저 프로필 이미지
	 * @example "https://example.com/avatar.png"
	 */
	avatar?: string
	/**
	 * 유저 프로필 아이디
	 * @example 1
	 */
	id: number
	/**
	 * 유저 프로필 이름
	 * @example "유저 프로필 이름"
	 */
	name: string
	/** 유저 */
	user: UserDto
}

/** 0 = Admin(관리자)<br>1 = Premium(프리미엄)<br>2 = Standard(스탠다드)<br>3 = Advertising(광고)<br>4 = Free(프리) */
export enum UserRoleEnumDto {
	Value0 = '0',
	Value1 = '1',
	Value2 = '2',
	Value3 = '3',
	Value4 = '4',
}
