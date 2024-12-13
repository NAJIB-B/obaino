import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCookie } from 'cookies-next/client';

const baseUrl = "https://obaino-backend.onrender.com/";

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers) => {

    // get the token from the cookies
    const token = getCookie('token');

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const api = createApi({
  baseQuery,
  tagTypes: ['Portfolio'],
  endpoints: (build) => ({
    getPortfolio: build.query({
      query: () => 'portfolio',
      providesTags: ['Portfolio']
    }),
    login: build.mutation({
      query: (body) => ({
        url: `user/login`,
        method: 'POST',
        body,	
      }),

    }),
	updateImage: build.mutation({
		query: (body) => ({
			url: `portfolio`,
			method: 'PATCH',
			body: body
		}),
		invalidatesTags: ['Portfolio']
	}),
	createService: build.mutation({
		query: (body) => ({
			url: 'service',
			method: 'POST',
			body
		}),
		invalidatesTags: ['Portfolio']
	}),
	updateService: build.mutation({
		query: ({body, id}) => {
			return ({
				url: `service/${id}`,
				method: 'PATCH',
				body
			}) 
		},
		invalidatesTags: ['Portfolio']
	}),
	deleteService: build.mutation({
		query: (id) => ({
			url: `service/${id}`,
			method: 'DELETE',
		}),
		invalidatesTags: ['Portfolio']	
	}),
	createBook: build.mutation({
		query: (body) => ({
			url: 'book',
			method: 'POST',
			body
		}),
		invalidatesTags: ['Portfolio']
	}),
	updateBook: build.mutation({
		query: ({body, id}) => {
			return ({
				url: `book/${id}`,
				method: 'PATCH',
				body
			}) 
		},
		invalidatesTags: ['Portfolio']
	}),
	deleteBook: build.mutation({
		query: (id) => ({
			url: `book/${id}`,
			method: 'DELETE',
		}),
		invalidatesTags: ['Portfolio']	
	}),
 
   
  }),
})

export const {
	useGetPortfolioQuery,
	useLoginMutation,
	useUpdateImageMutation,
	useCreateServiceMutation,
	useDeleteServiceMutation,
	useUpdateServiceMutation,
	useCreateBookMutation,
	useUpdateBookMutation,
	useDeleteBookMutation
} = api
