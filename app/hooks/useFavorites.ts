import { useCallback } from 'react'

import { IProduct } from '@/types/product.interface'

import { useTypedSelector } from './useTypedSelector'

export const useFavorites = () => {
	const favorites: IProduct[] = useTypedSelector(state => state.favorites)
	const favoritesLength: number = favorites.length
	const isExists = useCallback(
		(id: number): boolean => favorites.some(f => f.id === id),
		[favorites]
	)
	return { favorites, favoritesLength, isExists }
}
