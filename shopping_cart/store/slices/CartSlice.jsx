import React from 'react';
import { createSlice, createSelector } from '@reduxjs/toolkit';

const findItemIndex = (state, action) => {
    return state.findIndex((item) => item.productId === action.payload.productId);
}
const calculateGrandTotal = (cartItems) =>
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        loading: false,
        data: [],
        error: '',
    },
    reducers: {
        fetchCartItems(state) {
            state.loading = true;
        },
        fetchCartItemsError(state, action) {
            state.loading = false
            state.error = action.payload || 'Something went wrong!'
        },
        loadCartItems(state, action) {
            state.loading = false
            state.data = action.payload.products
        },
        addCartItem(state, action) {
            const existingItemIndex = findItemIndex(state.data, action)
            if (existingItemIndex !== -1) state.data[existingItemIndex].quantity += 1
            else state.data.push({ ...action.payload, quantity: 1 })
        },
        removeCartItem(state, action) {
            const existingItemIndex = findItemIndex(state.data, action)
            state.data.splice(existingItemIndex, 1);
        },
        increaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state.data, action)
            state.data[existingItemIndex].quantity += 1
        },
        decreaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state.data, action)
            state.data[existingItemIndex].quantity -= 1
            if (state.data[existingItemIndex].quantity === 0)
                state.data.splice(existingItemIndex, 1)
        },
        updateGrandTotal(state) {
            state.grandTotal = calculateGrandTotal(state.list);
        },
    },
})
export const {
    fetchCartItemsError,
    fetchCartItems,
    loadCartItems,
    addCartItem,
    removeCartItem,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    updateGrandTotal,
} = cartSlice.actions;






export default cartSlice.reducer;