import CommonLayout from '@app/layouts/common-layout'
import ErrorLayout from '@app/layouts/error-layout'
import Landing from '@pages/landing/ui/landing'

export const LandingRoute = {
	path: '/landing',
	element: <CommonLayout headerType="landing" requireAuth={false} />,
	children: [{ index: true, element: <Landing /> }],
	errorElement: <ErrorLayout />,
}
