import Link from 'next/link'
import { FC } from 'react'

import { IMenuItem } from './menu.data'

const MenuItem: FC<IMenuItem> = ({ link, name }) => {
	return <Link href={link}>{name}</Link>
}

export default MenuItem
