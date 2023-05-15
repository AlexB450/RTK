import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { favoritesActions } from '@/store/favorites/favorites.slice'
import { productActions } from '@/store/product/product.slice'
import { AppDispatch } from '@/store/store'

import * as fetchUserById from '../store/user/user.actions'

const rootActions = {
	...favoritesActions,
	...fetchUserById,
	...productActions
}

export const useAction = () => {
	const dispatch: AppDispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
