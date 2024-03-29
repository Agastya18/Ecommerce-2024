import { apiSlice } from "./apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
    
    endpoints: (builder) => ({
        getMyOrders: builder.query({
            query: () => ({
                url: "/api/v1/order/me",

            }),
            keepUnusedDataFor: 5,
        }),
        createOrder: builder.mutation({
            query: (data) => ({
                url: "/api/v1/order/new",
                method: "POST",
                body:data
            }),
        }),
        getOrderById: builder.query({
            query: (id) =>({
                url: `api/v1/order/${id}`,
                
            }),
            keepUnusedDataFor: 5,
        }),
        getAllOrders: builder.query({
            query: () => ({
                url: "/api/v1/order/admin/all-orders",
            }),
        }),
        updateOrderStatus: builder.mutation({
            query: (data) => ({
                url: `/api/v1/order/admin/orderStatus/${data.id}`,
                method: "PUT",
                body: data,
            }),
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `/api/v1/order/admin/order/${id}`,
                method: "DELETE",
            }),
        }),
        payOrder: builder.mutation({
            query: (id, paymentResult) => ({
                url: `/orders/${id}/pay`,
                method: "PUT",
                body: paymentResult,
            }),
        }),
        deliverOrder: builder.mutation({
            query: (id) => ({
                url: `/orders/${id}/deliver`,
                method: "PUT",
            }),
        }),
    }),
});

export const {  useGetMyOrdersQuery, useCreateOrderMutation, useGetOrderByIdQuery, useGetAllOrdersQuery, useUpdateOrderStatusMutation, useDeleteOrderMutation, usePayOrderMutation, useDeliverOrderMutation } = ordersApiSlice;
