import Button from '@ui/button/button'
import { useNavigate } from 'react-router-dom'
import { UpdateUserDtoRoleEnumDto } from 'src/shared/api/data-contracts'
import { useFetchAuth } from 'src/shared/models/auth.model'
import { usePatchUser } from 'src/shared/models/user.model'
import Clap from '@icons/clap.svg?react'

interface StepThree2Props {
	membership: string
	onClickNext: () => void
}

export function StepThree2({ membership, onClickNext }: StepThree2Props) {
	const navigate = useNavigate()

	const { data: me } = useFetchAuth()
	const { mutateAsync: patchUser } = usePatchUser()

	const handleSubmit = async () => {
		try {
			if (!me) return
			await patchUser({
				id: me.id,
				data: { role: membership as UpdateUserDtoRoleEnumDto },
			})

			onClickNext()
			navigate('/auth/simple-setting')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="min-h-screen w-fit flex-col flex-center">
			<Clap className="mx-auto" />
			<h1 className="pt-6 Medium-LargeTitle">Congratulations on joining Netflix!</h1>
			<p className="pt-2 !text-center !font-light text-TransparentWhite/70% Regular-Title3">
				Your membership "{membership === '1' ? 'Premium' : membership === '2' ? 'Standard' : 'Advertising'}" has
				started. <br /> You can cancel anytime in the 'Account' section.
			</p>
			<Button onClick={handleSubmit} className="my-12 h-16 w-full max-w-[380px] Medium-Title2">
				next
			</Button>
		</div>
	)
}
