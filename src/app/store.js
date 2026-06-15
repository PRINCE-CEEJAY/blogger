import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/post/PostSlice';
import { setupListener } from '@reduxjs/toolkit/query/react';
import { AppwriteApi } from '../services/AppWriteApi';

const store = configureStore({
  reducer: {
    posts: postReducer,
    [AppwriteApi.reducerPath]: AppwriteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AppwriteApi.middleware),
});

export default store;
setupListener(store.dispatch);
