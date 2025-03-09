import fs from 'fs'
import path from 'path'
import { generateApi } from 'swagger-typescript-api'

// const key = { 로그인: 'sinin', 공통: 'common', 회원가입: 'signup', 대출신청: 'service', 홈: 'home' }

const OUTPUT = 'src/shared/api'

generateApi({
	name: 'swaggerGenerate.ts',
	//url: 'https://wfl-app.fit-technet.com/api/v1/app/pub/api-docs', 스웨거 문서 주소??
	input: path.resolve(process.cwd(), 'scripts/netflix.json'),
	output: path.resolve(process.cwd(), OUTPUT),
	templates: path.resolve(process.cwd(), 'templates'), // 커스텀 탬플릿 파일??
	generateClient: true, //api 클라이언트를 생성할지 여부, false인 경우 http-client파일이 안생기는 듯
	httpClientType: 'fetch', //fetch, axios, fetch-api
	toJS: false, //생성된 파일 타입을 js로 변환할지 여부. false인 경우 ts파일이 생성됨
	generateRouteTypes: true,
	moduleNameFirstTag: true,
	generateResponses: true, //http 응답 타입을 생성할지 여부
	typeSuffix: 'Dto', //타입 뒤에 붙일 문자열
	modular: true, //모듈 단위로 코드 생성할지 여부,각각의 서비스나 컨트롤러를 개별 파일로 생성
	extractEnums: true, //swagger 문서의 enum(열거형) 타입을 추출할지 여부
	singleHttpClient: true, //단일 http 클라이언트를 생성할지 여부

	extractRequestParams: true, //요청 파라미터를 별도의 타입으로 추출할지 여부
	extractRequestBody: true, //요청 body를 별도의 타입으로 추출할지 여부
	extractResponseBody: true, //응답 body를 별도의 타입으로 추출할지 여부
	extractResponseError: true, //응답 에러를 별도의 타입으로 추출할지 여부
	unwrapResponseData: true, //응답 데이터에서 'data' 속성만 추출할지 여부
	sortTypes: true, //생성된 타입들을 알파벳 순서로 정렬할지 여부
})
	.then(({ files }) => {
		const outputDir = path.resolve(process.cwd(), OUTPUT)

		// 기존 파일 삭제
		fs.readdirSync(outputDir).forEach((file) => {
			if (file !== 'data-contracts.ts' && file !== 'http-client.ts') {
				fs.unlinkSync(path.join(outputDir, file))
			}
		})

		// 파일 name 소문자 만들기
		files.forEach(({ fileName, fileExtension, fileContent }) => {
			if (fileName !== 'data-contracts' && fileName !== 'http-client.ts') {
				const kebabFileName = fileName
					// .replace('Route', '')
					.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
					.toLowerCase()

				const isRoute = kebabFileName.includes('route')
				const replaceFileName = kebabFileName.replace('route', '')
				const newFileNameConcat = isRoute ? replaceFileName.concat('type') : replaceFileName

				const newFileName = `${newFileNameConcat}${fileExtension}`
				const fullPath = path.resolve(outputDir, newFileName)

				fs.writeFileSync(fullPath, fileContent)
			}
		})
	})
	.catch((e) => console.error(e))
