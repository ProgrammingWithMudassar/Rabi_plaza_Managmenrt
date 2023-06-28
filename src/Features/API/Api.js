import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
    endpoints: (builder) => ({
        getShops: builder.query({
            query: () => ({
                url: '/All_Shops',
                method: 'GET',
            }),
        }),
        getShopById: builder.query({
            query: (shopId) => ({
                url: `/All_Shops/${shopId}`,
                method: 'GET',
            }),
        }),
        addShop: builder.mutation({
            query: (newShopData) => ({
                url: '/Add_Shop',
                method: 'POST',
                body: newShopData,
            }),
        }),
        addShop: builder.mutation({
            query: (newShopData) => ({
                url: '/Add_Rent_Shop',
                method: 'POST',
                body: newShopData,
            }),
        }),
        deleteShop: builder.mutation({
            query: (shopId) => ({
                url: `/Delete_Shop/${shopId}`,
                method: 'DELETE',
            }),
        }),
        updateShop: builder.mutation({
            query: ({ shopId, updatedShopData }) => ({
                url: `/Update_Shop/${shopId}`,
                method: 'PUT',
                body: updatedShopData,
            }),
        }),
        // Authentication 
        login: builder.mutation({
            query: (AutData) => ({
                url: '/login',
                method: 'POST',
                body: AutData,
            }),
        }),
        updateRent: builder.mutation({
            query: ({ shopId, date, paidRent }) => ({
              url: `/rent/${shopId}`,
              method: 'PUT',
              body: { date, paidRent },
            }),
          }),
    }),
});

export const {
    useGetShopsQuery,
    useGetShopByIdQuery,
    useAddShopMutation,
    useDeleteShopMutation,
    useUpdateShopMutation,
    useUpdateRentMutation,
    useLoginMutation
} = api;
