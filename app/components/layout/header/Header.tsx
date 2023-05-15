import { FC } from 'react'

import MenuItem from './menu/MenuItem'
import { menu } from './menu/menu.data'

const Header: FC = () => {
	return (
		<div className='flex items-center justify-around bg-[#6dff8a]'>
			{menu.map(item => (
				<MenuItem link={item.link} name={item.name} key={item.name} />
			))}
		</div>
	)
}

export default Header
