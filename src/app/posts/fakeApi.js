// Need to use the React-specific entry point to import createApi
// redux
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../constants/api_urls'


// Define a service using a base URL and expected endpoints
export const fakeApi = createApi({
  reducerPath: 'fakeApi',
  baseQuery: fetchBaseQuery({ baseUrl:  `${ yUrl }` }),
  endpoints: (builder) => ({
    getPosts: builder.query({
        query:()=>"/products"
    }),



    getPostsByid: builder.query({
      query :(id) => `/products/${id}`
    })

   

    

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useGetPostsByidQuery,useAddpostMutation } = postApi


//https method  --query
//get --mutation
//post--mutation
//delete
//put
