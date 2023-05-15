import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IProduct } from '@/types/product.interface'

const initialState: IProduct[] = []

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, { payload }: PayloadAction<IProduct>) => {
			const isFavorite = state.some(item => item.id === payload.id)
			if (isFavorite) return state.filter(item => item.id !== payload.id)
			else state.push(payload)
		}
	}
})

export const { actions: favoritesActions } = favoritesSlice

export default favoritesSlice.reducer
