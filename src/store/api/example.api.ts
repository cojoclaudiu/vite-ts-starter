import { api } from '.';

// https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#injecting-endpoints

export const exampleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // GET
    getExample: builder.query({
      query: () => ({
        url: '/',
        params: {},
        method: 'GET',
      }),
    }),

    // POST
    postExample: builder.query({
      query: () => ({
        url: '/',
        params: {},
        method: 'POST',
      }),
    }),

    // UPDATE
    updateExample: builder.query({
      query: () => ({
        url: '/',
        params: {},
        method: 'PATCH',
      }),
    }),

    // DELETE
    deleteExample: builder.query({
      query: () => ({
        url: '/',
        params: {},
        method: 'PATCH',
      }),
    }),
  }),
});

export const { useGetExampleQuery } = exampleApi;
