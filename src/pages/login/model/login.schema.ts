import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email('이메일 형식으로 입력 바랍니다.'),
	password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다.'),
	remember: z.boolean().optional(),
})

export type LoginSchemaType = z.infer<typeof loginSchema>
