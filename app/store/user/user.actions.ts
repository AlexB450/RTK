import { createAsyncThunk } from '@reduxjs/toolkit'

import { IUser } from './user.slice.interface'

const users = [
	{
		name: 'Alex',
		id: 1
	},
	{
		name: 'Bob',
		id: 2
	}
]
const getUserById = (userId: number): Promise<IUser> =>
	new Promise<IUser>((resolve, reject) => {
		const selectedUser = users.find(item => item.id === userId)
		setTimeout(() => {
			return selectedUser
				? resolve(selectedUser)
				: reject(new Error('some error'))
		}, 1000)
	})
export const fetchUserById = createAsyncThunk<IUser, number>(
	'user/fetchById',
	async (userId: number, { rejectWithValue }) => {
		try {
			const response = await getUserById(userId)
			return response
		} catch (error) {
			return rejectWithValue('some error')
		}
	}
)
