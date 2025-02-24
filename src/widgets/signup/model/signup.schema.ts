import { z } from 'zod'

export const signupSchema = z.object({
	email: z.string().email('이메일 형식으로 입력 바랍니다.'),
	password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다.'),
	poricyAgreement: z.boolean().refine((data) => data === true, {
		message: '개인정보 수집 동의가 필요합니다.',
	}),
	termsAgreement: z.boolean().refine((data) => data === true, {
		message: '이용약관 동의가 필요합니다.',
	}),
})

export type SignupSchemaType = z.infer<typeof signupSchema>
