import { configureStore, getMiddleware } from '@reduxjs/toolkit'

// import categorySlice from './slices/categorySlice';

import categoriesSlice from "./slices/categorySlice";
import productsSlice from './slices/productsSlice';
import { apiSlice } from './slices/apiSlices/apiSlice';
import userSlice from './slices/userSlice';

 export const store = configureStore({
    reducer: {

      //  category: categorySlice,
       categories: categoriesSlice,
       products : productsSlice,
       user: userSlice,
       [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true
  })
  
  export default store