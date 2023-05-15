import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IUserSlice } from '@/store/user/user.slice.interface'

import { useAction } from '@/hooks/useAction'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { Inputs } from './home.interface'

const Home: FC = () => {
	const { register, reset, handleSubmit } = useForm<Inputs>()
	const { user, isLoading, error }: IUserSlice = useTypedSelector(
		state => state.user
	)
	const { fetchUserById } = useAction()
	const onSubmit: SubmitHandler<Inputs> = ({ id }) => {
		fetchUserById(+id)
	}
	let result: string = ''

	return (
		<div>
			<h2>Home Page</h2>
			<h4
				style={{
					fontSize: '18px'
				}}
			>
				<b>User </b>
				{isLoading ? (
					<span>Loading...</span>
				) : !!error.message ? (
					<mark>{error.message}</mark>
				) : user.name ? (
					<span>{user.name}</span>
				) : (
					<mark>not found </mark>
				)}
			</h4>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type='number' {...register('id', { required: true })} />

				<button>get User</button>
			</form>
		</div>
	)
}
export default Home
