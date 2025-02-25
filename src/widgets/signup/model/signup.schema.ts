import { z } from 'zod'

export const signupSchema = z.object({
	email: z.string({ message: '이메일을 입력해주세요.' }).email('이메일 형식으로 입력 바랍니다.'),
	password: z.string({ message: '비밀번호를 입력해주세요.' }).min(6, '비밀번호는 최소 6자 이상이어야 합니다.'),
	poricyAgreement: z.boolean({ message: '개인정보 수집 동의가 필요합니다.' }).refine((data) => data === true, {
		message: '개인정보 수집 동의가 필요합니다.',
	}),
	termsAgreement: z.boolean().optional(),
})

export type SignupSchemaType = z.infer<typeof signupSchema>
