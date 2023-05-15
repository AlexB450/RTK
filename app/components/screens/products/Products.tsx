import { FC, useEffect, useState } from 'react'
import { IoIosCreate } from 'react-icons/io'

import { productInitial } from '@/store/product/product.initial'

import { useAction } from '@/hooks/useAction'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { useAllProductsQuery } from '@/api/endpoints/allProducts/allProducts'

import CreateProduct from './createProduct/CreateProduct'
import ProductItem from './product-item/ProductItem'
import style from './products.module.scss'

const Products: FC = () => {
	const [isOpen, setOpen] = useState<boolean>(false)
	const { setExists, setProduct } = useAction()
	const userId: number = useTypedSelector(state => state.user.user.id)
	const {
		error,
		data: products,
		isLoading
	} = useAllProductsQuery(undefined, {
		skip: !userId
	})
	const toggleEdit = (value: boolean, isEdit: boolean): void => {
		setOpen(value)
		setExists(isEdit)
		!value && setProduct(productInitial)
	}
	useEffect(() => {
		isOpen && window.scrollTo(0, 0)
	}, [isOpen])
	if (isLoading) return <div>Loading...</div>
	return (
		<div className={style.main}>
			<h2 className='title'>Products</h2>
			<button className={style.icon} onClick={() => toggleEdit(true, false)}>
				<IoIosCreate size={40} />
			</button>
			{isOpen && <CreateProduct toggleEdit={toggleEdit} />}
			{products &&
				products.map(product => (
					<ProductItem
						toggleEdit={toggleEdit}
						product={product}
						key={product.id}
					/>
				))}
		</div>
	)
}

export default Products
