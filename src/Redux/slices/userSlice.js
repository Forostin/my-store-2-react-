import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../utils/constants";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      //  const res = await axios('https://fakestoreapi.com/products/categories');   
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  } 
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkAPI) => {
    try { 
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`
        }
      });
      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  } 
);


const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: [],
    favour: [],
    isLoading: false,
    formType: "singup",
    showForm: false,
  },


reducers: { 
  addItemToCart: (state, { payload }) => {
    let newCart = [...state.cart];
    const found = state.cart.find(({ id }) => id === payload.id);

    if (found) {
      newCart = newCart.map((item) => {
        return item.id === payload.id
          ? { ...item, quantity: payload.quantity || item.quantity + 1 }
          : item;
      });
    } else newCart.push({ ...payload, quantity: 1 });

    state.cart = newCart;
  },
  addItemToFavour: (state, { payload }) => {
    let newCartFavour = [...state.favour];
    const found = state.favour.find(({ id }) => id === payload.id);

    if (found) {
      newCartFavour = newCartFavour.map((item) => {
        return item.id === payload.id
          ? { ...item, quantity: payload.quantity || item.quantity + 1 }
          : item;
      });
    } else newCartFavour.push({ ...payload, quantity: 1 });

    state.favour = newCartFavour;
  },
  removeItemFromCart: (state, { payload }) => {
    state.cart = state.cart.filter(({ id }) => id !== payload);
  },

  removeItemFromFavour: (state, { payload }) => {
    state.favour = state.favour.filter(({ id }) => id !== payload);
  },

  toggleForm: (state, { payload }) => {
    state.showForm = payload;
  },
 
  toggleFormType: (state, { payload }) => {
    state.formType = payload;
  }
},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload; 
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload; 
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload; 
    });
   }
});

export const { addItemToCart ,
               removeItemFromCart,
               toggleForm ,
               toggleFormType,
               addItemToFavour, 
               removeItemFromFavour} = userSlice.actions 
export default userSlice.reducer;










 
    
    
    
   

