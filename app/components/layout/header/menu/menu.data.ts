export const menu: IMenuItem[] = [
	{
		link: '/',
		name: 'home'
	},
	{
		link: '/about',
		name: 'about'
	},
	{
		link: '/products',
		name: 'products'
	},
	{
		link: '/card',
		name: 'card'
	}
]
export interface IMenuItem {
	link: string
	name: string
}
