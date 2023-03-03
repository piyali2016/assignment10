import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const foodapi = createApi({
  reducerPath: 'foodapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getAllFoods: builder.query({
        query: () => 'foodItems/',
    }),
    getVeganFood: builder.query({
      query: () => `foodItems?vegan=true`,
  }),
  getFatFreeFood: builder.query({
    query: () => `foodItems?fat_free=true`,
}),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllFoodsQuery,useGetVeganFoodQuery,useGetFatFreeFoodQuery } = foodapi