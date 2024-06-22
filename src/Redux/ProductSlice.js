import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './controllers';

const initialState = {
  products: [],
  cart: [],
  loading: false,
  error: false
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
