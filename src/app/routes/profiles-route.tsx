import CommonLayout from '@app/layouts/common-layout'
import ErrorLayout from '@app/layouts/error-layout'
import { ManagerProfiles } from '@pages/profile'
import Profiles from '@pages/profile/ui/profiles'

export const ProfilesRoute = {
	path: '/profiles',
	element: <CommonLayout headerType="none" />,
	children: [
		{ index: true, element: <Profiles /> },
		{ path: 'manage', element: <ManagerProfiles /> },
	],
	errorElement: <ErrorLayout />,
}
