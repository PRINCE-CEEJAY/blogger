import { createApi } from '@reduxjs/toolkit/query/react';
import { firebaseBaseQuery } from '@rtk-query/firebase-base-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: firebaseBaseQuery(),
  endpoints: (builder) => ({
    getPosts: builder.query({
      async queryFn() {
        try {
          const querySnapshot = await getDocs(collection(db, 'posts'));
          const posts = [];
          querySnapshot.forEach((doc) => {
            posts.push({ id: doc.id, ...doc.data() });
          });
          return { data: posts };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useGetPostsQuery } = firebaseApi;
