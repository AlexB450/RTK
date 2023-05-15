import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import Layout from '@/layout/Layout'

import '@/assets/styles/globals.scss'

import { store } from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
