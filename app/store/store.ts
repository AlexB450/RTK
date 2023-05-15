import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { myApi } from '@/api/api'

import favoritesSlice from './favorites/favorites.slice'
import productSlice from './product/product.slice'
import { userSlice } from './user/user.slice'

const reducers = combineReducers({
	favorites: favoritesSlice,
	user: userSlice.reducer,
	product: productSlice,
	[myApi.reducerPath]: myApi.reducer
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(myApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
