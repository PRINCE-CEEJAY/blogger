import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AppWriteApi = createApi({
  reducerPath: 'appWriteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
  }),
});

export const { useGetPostsQuery } = AppWriteApi;
