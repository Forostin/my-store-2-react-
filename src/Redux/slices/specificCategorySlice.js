import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../utils/constants";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (_, thunkAPI) => {
    try {
      // const res = await axios('https://fakestoreapi.com/products/category'); 
       const res = await axios('https://fakestoreapi.com/products/categories');   
      // const res = await axios(`${BASE_URL}/categories?offset=0&limit=5`);

      console.log(res.data)
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  } 
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    // category: 'electronics',
    isLoading: false,
    
  },
 
//  +++++++++++++++
  reducers: {
    // filterByPrice: (state) => {
    //   state.filtered = state.list.filter(({price}) => price < 60 );
    // },
   
   
   
    getSelectedCategory: (state, { payload }) => {
      // const listCateg = state.list.filter(({ category : { id } }) => id === payload);
      // const list = state.list.filter(({ category  }) => i === payload);
      // state.category = listCateg.action.payload;
    },
  },

// +++++++++++++++++++++

  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getCategory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { getSelectedCategory, increment } = categorySlice.actions
export default categorySlice.reducer;
