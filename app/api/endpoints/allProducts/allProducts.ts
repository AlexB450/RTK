import { IProduct, IProductInfo } from '@/types/product.interface'

import { myApi } from '@/api/api'

const allProducts = myApi.injectEndpoints({
	endpoints: build => ({
		allProducts: build.query<IProduct[], void>({
			query: () => '/products',
			transformResponse: (response: IProduct[], meta, arg) => response,
			providesTags: () => [{ type: 'Product' }]
		}),
		addProduct: build.mutation<void, IProductInfo>({
			query: body => ({
				url: `/products`,
				method: 'POST',
				body: body
			}),
			invalidatesTags: ['Product']
		}),
		changeProduct: build.mutation<
			IProductInfo,
			Partial<IProductInfo> & Pick<IProduct, 'id'>
		>({
			query: ({ id, ...body }) => ({
				url: `/products/${id}`,
				method: 'PATCH',
				body: body
			}),
			invalidatesTags: ['Product']
		})
	}),
	overrideExisting: true
})

export const {
	useAllProductsQuery,
	useAddProductMutation,
	useChangeProductMutation
} = allProducts
// IProduct,
// Partial<IProduct> & Pick<IProduct, 'id'>
