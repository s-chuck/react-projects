import { createSlice } from '@reduxjs/toolkit';


const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        loading: false,
        error: ''
    },
    reducers: {
        setProduct(state, action) {
            state.data = action.payload;
            state.loading = false;
        },
        setLoading(state, action) {
            state.loading = true;
        },
        setError(state, action) {
            state.error = action.payload || 'something went wrong!';
            state.loading = false;
        },
    },
})

export const { setProduct, setLoading, setError,fetchProducts,fetchProductsError,updateAllProducts } = ProductSlice.actions;
export const getAllProducts = (state) => state.product.data;
export const getProductLoadingState = (state) => state.product.loading
export const getProductError = (state) => state.product.error

export default ProductSlice.reducer;

