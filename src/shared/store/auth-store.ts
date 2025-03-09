import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Auth {
	isLogin: boolean
	accessToken: string
	refreshToken: string
	nickname: string
	profile: string
}

interface AuthProps extends Auth {
	setLogin: (accessToken: string, refreshToken: string) => void
	setLogout: () => void
}

const INIT = {
	isLogin: false,
	accessToken: '',
	refreshToken: '',
	nickname: '',
	profile: '',
}

export const AuthStore = create(
	persist<AuthProps>(
		(set) => ({
			...INIT,
			setLogin: (accessToken: string, refreshToken: string) => {
				return set(() => ({ isLogin: true, accessToken, refreshToken }))
			},
			setLogout: () => set(() => ({ ...INIT })),
		}),
		{ name: 'auth' },
	),
)
