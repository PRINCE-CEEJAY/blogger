import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/post/PostSlice';
import { firebaseApi } from '../services/firebaseApi';
import { setupListener } from '@reduxjs/toolkit/query/react';

const store = configureStore({
  reducer: {
    posts: postReducer,
    [firebaseApi.reducerPath]: firebaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firebaseApi.middleware),
});

export default store;
setupListener(store.dispatch);
