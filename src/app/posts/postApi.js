// Need to use the React-specific entry point to import createApi
// redux
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../constants/api_urls'


// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl:  `${ baseUrl }` }),
  endpoints: (builder) => ({
    getPosts: builder.query({
        query:()=>"/posts"
    }),

    addpost: builder.mutation({
      query:(q) => ({
        url:"/posts",
        method:"POST",
        body: q,
        headers: {
          "Content-Type": "application/json"
        }

      })
    }),


    getPostsByid: builder.query({
      query :(id) => `/posts/${id}`
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
