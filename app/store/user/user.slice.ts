import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchUserById } from './user.actions'
import { IUser, IUserSlice } from './user.slice.interface'

export const initialUser: IUser = {
	name: '',
	id: 0
}
const initialState: IUserSlice = {
	user: {} as IUser,
	isLoading: false,
	error: {
		message: ''
	}
}
export const userSlice = createSlice<IUserSlice, {}, 'user'>({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchUserById.pending, state => {
			state.isLoading = true
		})
		builder.addCase(fetchUserById.rejected, (state, { payload }) => {
			state.isLoading = false
			const isPayload = typeof payload === 'string'
			state.error.message = isPayload ? payload : ''
			state.user = {} as IUser
		})
		builder.addCase(
			fetchUserById.fulfilled,
			(state, action: PayloadAction<IUser>) => {
				state.isLoading = false
				state.user = action.payload
			}
		)
	}
})
