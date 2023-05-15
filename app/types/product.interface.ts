export interface IProduct {
	id: number
	name: string
	description: string
}

export interface IProductInfo extends Omit<IProduct, 'id'> {}
