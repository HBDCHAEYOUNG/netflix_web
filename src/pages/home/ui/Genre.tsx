import { WithAuth } from '@hooks/with-auth'
import { Billboard } from '@widgets/home'

export function Genre() {
	return (
		<div className="relative flex min-w-full flex-col">
			<Billboard />
		</div>
	)
}

export default WithAuth(Genre)
