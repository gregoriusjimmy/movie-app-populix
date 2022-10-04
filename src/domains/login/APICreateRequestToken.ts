import { usePost } from '@hooks/usePost';

export type TCreateRequestTokenRes = {
  status_message: string;
  request_token: string;
  success: boolean;
  status_code: number;
};

export type TCreateRequestTokenSpec = {
  redirect_to: string;
};

export const usePostCreateRequestToken = usePost<TCreateRequestTokenRes, TCreateRequestTokenSpec>(
  '/auth/request_token'
);
