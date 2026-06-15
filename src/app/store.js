import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/post/PostSlice';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import  {postsApi}  from '../services/AppWriteApi';

const store = configureStore({
  reducer: {
    posts: postReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;
setupListeners(store.dispatch);
