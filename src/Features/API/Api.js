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
        getRentShops: builder.query({
            query: () => ({
                url: '/All_Rent_Shops',
                method: 'GET',
            }),
        }),
        getShopById: builder.query({
            query: (shopId) => ({
                url: `/All_Shops/${shopId}`,
                method: 'GET',
            }),
        }),
        getRentShopById: builder.query({
            query: (shopId) => ({
                url: `/All_Rent_Shops/${shopId}`,
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
        addRentShop: builder.mutation({
            query: (newRentShopData) => ({
                url: '/Add_Rent_Shop',
                method: 'POST',
                body: newRentShopData,
            }),
        }),
      
        deleteShop: builder.mutation({
            query: (shopId) => ({
                url: `/Delete_Shop/${shopId}`,
                method: 'DELETE',
            }),
        }),
        
        deleteRentShop: builder.mutation({
            query: (shopId) => ({
                url: `/Delete_Rent_Shop/${shopId}`,
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
        updateRentShop: builder.mutation({
            query: ({ shopId, updatedShopData }) => ({
                url: `/Update_Rent_Shop/${shopId}`,
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
        updateCharges: builder.mutation({
            query: ({ shopId, date, paidRent }) => ({
              url: `/charges/${shopId}`,
              method: 'PUT',
              body: { date, paidRent },
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
    useGetRentShopsQuery,
    useGetShopByIdQuery,
    useGetRentShopByIdQuery,
    useAddShopMutation,
    useAddRentShopMutation,
    useDeleteShopMutation,
    useDeleteRentShopMutation,
    useUpdateShopMutation,
    useUpdateRentShopMutation,
    useUpdateChargesMutation,
    useUpdateRentMutation,
    useLoginMutation
} = api;
