import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IProductInfo } from '@/types/product.interface'

import { productSliceInitial } from './product.initial'

export const productSlice = createSlice({
	name: 'post',
	initialState: productSliceInitial,
	reducers: {
		setProduct: (state, { payload }: PayloadAction<Partial<IProductInfo>>) => {
			state.product = { ...state.product, ...payload }
		},
		setExists: (state, { payload }: PayloadAction<boolean>) => {
			state.isExists = payload
		}
	}
})
export const { actions: productActions } = productSlice
export default productSlice.reducer
