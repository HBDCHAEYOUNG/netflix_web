import { Navigate } from 'react-router-dom'
import { useFetchAuth } from 'src/shared/models/auth.model'

export const WithAuth = <P extends object>(
	WrappedComponent: React.ComponentType<P>,
	requiredRole: number = 3,
	redirectPath: string = '/',
) => {
	return function WithAuthComponent(props: P) {
		const { data: auth, isLoading } = useFetchAuth()

		if (isLoading) return <div className="h-screen flex-center">Loading...</div>

		if (!auth) {
			alert('로그인 후 이용바랍니다.')
			return <Navigate to="/landing" />
		}

		if (Number(auth?.role) > requiredRole) {
			return <Navigate to={redirectPath} />
		}

		if (auth.profileCount === 0) {
			return <Navigate to={redirectPath} />
		}

		return <WrappedComponent {...props} />
	}
}

/* 
    WithAuth(AdminLayout) // 결제한 사용자 접근 가능 (기본값 3) 

    WithAuth(AdminLayout, 0) // admin만 접근 가능
    WithAuth(AdminLayout, 1) // admin과 premium 사용자만 접근 가능
    WithAuth(AdminLayout, 2) // admin, premium, standard 사용자만 접근 가능
    WithAuth(AdminLayout, 3) // admin, premium, standard, advanced 사용자만 접근 가능
    WithAuth(AdminLayout, 4) // 모든 인증된 사용자 접근 가능
*/
