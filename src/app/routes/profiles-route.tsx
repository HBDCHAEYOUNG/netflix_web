import CommonLayout from '@app/layouts/common-layout'
import ErrorLayout from '@app/layouts/error-layout'
import { ManagerProfiles, Profiles } from '@pages/profile'

export const ProfilesRoute = {
	path: '/profiles',
	element: <CommonLayout headerType="none" />,
	children: [
		{ index: true, element: <Profiles /> },
		{ path: 'manage', element: <ManagerProfiles /> },
	],
	errorElement: <ErrorLayout />,
}
