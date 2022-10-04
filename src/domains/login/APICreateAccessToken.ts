import { usePost } from '@hooks/usePost';

export type TCreateAccessTokenRes = {
  status_message: string;
  access_token: string;
  account_id: string;
  success: boolean;
  status_code: number;
};

export type TCreateAccessTokenSpec = {
  request_token: string;
};

export const usePostCreateAccessToken = usePost<TCreateAccessTokenRes, TCreateAccessTokenSpec>(
  '/auth/access_token'
);
