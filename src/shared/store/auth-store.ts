import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Auth {
	isLogin: boolean
}

interface AuthProps extends Auth {
	setLogin: () => void
	setLogout: () => void
}

const INIT = {
	isLogin: false,
}

export const AuthStore = create(
	persist<AuthProps>(
		(set) => ({
			...INIT,
			setLogin: () => set(() => ({ isLogin: true })),
			setLogout: () => set(() => ({ isLogin: false })),
		}),
		{ name: 'auth' },
	),
)
