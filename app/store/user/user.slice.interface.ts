export interface IUser {
	name: string
	id: number
}
export interface IUserSlice {
	user: IUser
	isLoading: boolean
	error: { message: string }
}
