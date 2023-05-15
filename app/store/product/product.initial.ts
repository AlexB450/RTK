import { IProduct } from '@/types/product.interface'

import { IProductSlice } from './product.slice.type'

export const productInitial: IProduct = {
	id: 0,
	name: '',
	description: ''
}
export const productSliceInitial: IProductSlice = {
	product: productInitial,
	isExists: false
}
