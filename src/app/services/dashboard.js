import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/' }),
  tagTypes: ['Portfolio','Services', 'Books'],
  endpoints: (build) => ({
    getPortfolio: build.query({
      query: () => 'portfolio',
      providesTags: (result) =>
        result
    }),
    login: build.mutation({
      query: (body) => ({
        url: `user/login`,
        method: 'POST',
        body,	
      }),

    }),
 
   
  }),
})

export const {
	useLoginMutation
} = api
