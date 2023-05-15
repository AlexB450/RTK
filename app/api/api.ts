import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:4200'

export const myApi = createApi({
	reducerPath: 'products',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ['Product'],
	endpoints: () => ({})
})
