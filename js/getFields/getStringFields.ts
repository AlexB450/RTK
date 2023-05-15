import { IProduct, IProductInfo } from '@/types/product.interface'

export const getStringFields = (
	product: IProduct | Partial<IProductInfo>
): Partial<IProductInfo> =>
	Object.fromEntries(
		Object.entries(product).filter(i => typeof i[1] === 'string' && !!i[1])
	)
