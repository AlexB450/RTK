import { FC } from 'react'

import { useFavorites } from '@/hooks/useFavorites'

import ProductItem from '../products/product-item/ProductItem'

const Card: FC = () => {
	const { favorites, favoritesLength } = useFavorites()
	const productList = favorites.map(item => (
		<ProductItem
			setOpen={() => console.log('error')}
			product={item}
			key={item.id}
		/>
	))
	return (
		<div>
			<h2 className='title'>Favorites</h2>
			{favoritesLength ? productList : 'card is empty'}
		</div>
	)
}

export default Card
