import { SignParams, User } from '@interfaces/auth';
import { api } from './apiSlice';

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<User, SignParams>({
      query: ({ email, password }) => ({
        url: 'sign',
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation } = authApi;
