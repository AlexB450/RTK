import { FC } from 'react'
import { FiEdit3 } from 'react-icons/fi'

import { useAction } from '@/hooks/useAction'
import { useFavorites } from '@/hooks/useFavorites'

import { IProduct } from '@/types/product.interface'

import style from './productItem.module.scss'

interface IProductItem {
	product: IProduct
	toggleEdit: (value: boolean, isEdit: boolean) => void
}

const ProductItem: FC<IProductItem> = ({ product, toggleEdit }) => {
	const { toggleFavorites } = useAction()
	const { isExists } = useFavorites()
	const { setProduct } = useAction()
	const editProduct = (): void => {
		setProduct(product)
		toggleEdit(true, true)
	}
	return (
		<div className={style.item}>
			<button className={style.edit} onClick={editProduct}>
				<FiEdit3 />
			</button>
			<h3>
				<b>{product.name}</b>
			</h3>
			<div>{product.description}</div>
			<button onClick={() => toggleFavorites(product)}>
				{isExists(product.id) ? 'remove from' : 'add to'}
				favorites
			</button>
		</div>
	)
}

export default ProductItem
