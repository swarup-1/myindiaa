import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await fetch('https://products-backend-eight.vercel.app/products');
  const data = await response.json();
  return data;
});
