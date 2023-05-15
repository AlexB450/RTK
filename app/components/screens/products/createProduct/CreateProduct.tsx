import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { IProductSlice } from '@/store/product/product.slice.type'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IProductInfo } from '@/types/product.interface'

import {
	useAddProductMutation,
	useChangeProductMutation
} from '@/api/endpoints/allProducts/allProducts'

import CreateProductForm from './CreateProductForm'
import style from './create-post.module.scss'
import { getStringFields } from '@/../js/getFields/getStringFields'

interface ICreateProps {
	toggleEdit: (value: boolean, isEdit: boolean) => void
}

const CreateProduct: FC<ICreateProps> = ({ toggleEdit }) => {
	const { product, isExists }: IProductSlice = useTypedSelector(
		state => state.product
	)
	const [createProduct] = useAddProductMutation()
	const [changeProduct] = useChangeProductMutation()
	const onSubmit: SubmitHandler<IProductInfo> = (data: IProductInfo) => {
		;(isExists
			? changeProduct({ id: product.id, ...getStringFields(data) })
			: createProduct(data)
		).then(response => {
			console.log(response)
			toggleEdit(false, false)
		})
	}
	return (
		<div className={style.main}>
			<h3>
				<b>CreateProduct</b>
			</h3>
			<CreateProductForm product={product} onSubmit={onSubmit} />
			<button onClick={() => toggleEdit(false, false)}>Close</button>
		</div>
	)
}

export default CreateProduct
