import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IProductInfo } from '@/types/product.interface'

import style from './create-post.module.scss'

interface IProductForm {
	product: IProductInfo
	onSubmit: SubmitHandler<IProductInfo>
}

const CreateProductForm: FC<IProductForm> = ({ product, onSubmit }) => {
	const { register, reset, handleSubmit } = useForm<IProductInfo>({
		defaultValues: {
			name: product?.name || '',
			description: product?.description || ''
		}
	})
	useEffect(() => {}, [])
	return (
		<form className={style.box} onSubmit={handleSubmit(onSubmit)}>
			<input {...register('name')} placeholder='title' />
			<textarea {...register('description')} placeholder='description' />
			<button>Submit</button>
		</form>
	)
}

export default CreateProductForm
