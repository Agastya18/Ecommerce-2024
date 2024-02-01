import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart'))  : { cartItems: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state, action) =>{
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x._id === item._id);
            if (existItem) {
                state.cartItems = state.cartItems.map((x) => (x._id === existItem._id ? item : x));
            } else {
                state.cartItems.push(item);
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeFromCart:(state, action) =>{
            state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state));
        },
        saveShippingAddress:(state, action) =>{
            state.shippingAddress = action.payload;
            localStorage.setItem('shippingAddress', JSON.stringify(state));
        },
        savePaymentMethod:(state, action) =>{
            state.paymentMethod = action.payload;
            localStorage.setItem('paymentMethod', JSON.stringify(state));
        },
        clearCart:(state, action)=> {
            state.cartItems = [];
            localStorage.setItem('cart', JSON.stringify(state));
        },
        resetCart :(state)=>(state.initialState),
    },
});

export const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod, clearCart } = cartSlice.actions;

export default cartSlice.reducer;