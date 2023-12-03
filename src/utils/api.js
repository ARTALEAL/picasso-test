import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query({
      query: ({ limit = 5, start = 0 }) => ({
        url: '/posts',
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
    fetchPostById: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export default postApi;
