import { EditModal } from '@features/admin/ui/edit-modal'
import { ReadModal } from '@features/admin/ui/read-modal'
import { AdminTable } from '@widgets/admin'
import { userColumns } from '@widgets/admin/const/user-columns'
import { useState } from 'react'
import { flushSync } from 'react-dom'
import { useDeleteUser, useFetchUser, useFetchUsers, usePatchUser } from 'src/shared/models/user.model'

const userReadModal = {
	currentMenu: 'user',
	formItems: ['createdAt', 'id', 'email', 'role', 'profileCount'],
}
const userEditModal = {
	currentMenu: 'user',
	formItems: ['role'],
}

export function User() {
	const [openRead, setOpenRead] = useState(false)
	const [openEdit, setOpenEdit] = useState(false)
	const [userId, setUserId] = useState(1)

	const { data: usersData, isLoading } = useFetchUsers()
	const { data: userData, isLoading: userLoading, refetch: refetchUser } = useFetchUser(userId)
	const { mutateAsync: patchUser } = usePatchUser()
	const { mutateAsync: deleteUser } = useDeleteUser()

	const handleDetail = (id: string) => async () => {
		flushSync(() => setUserId(Number(id)))
		refetchUser()
		setOpenRead(true)
		setOpenEdit(false)
	}
	return (
		<div className="pl-72 [&_*]:text-Primary/Black">
			<h1 className="px-10 pb-4 pt-[84px] Bold-Title2">genre</h1>
			{isLoading ? (
				<div>Loading...</div>
			) : !usersData ? (
				<div>No data</div>
			) : (
				<AdminTable currentMenu="user" data={usersData} columns={userColumns} handleDetail={handleDetail} />
			)}

			{userLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<ReadModal data={userData} {...userReadModal} open={openRead} setOpen={setOpenRead} setOpenEdit={setOpenEdit} />
					<EditModal
						data={userData}
						{...userEditModal}
						open={openEdit}
						setOpen={setOpenEdit}
						mutateAsync={patchUser}
						deleteAsync={deleteUser}
					/>
				</>
			)}
		</div>
	)
}
