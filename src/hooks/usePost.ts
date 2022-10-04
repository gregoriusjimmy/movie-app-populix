import axios, { AxiosRequestConfig } from 'axios';
import { useCallback } from 'react';

export function usePost<TResponse, TPayload>(url: string) {
  return () =>
    useCallback(
      async (data: TPayload, config?: AxiosRequestConfig) => {
        try {
          const res = await axios.post<TResponse>(url, data, config);
          return res.data;
        } catch (error) {
          console.error(error instanceof Error ? error.message : error);
          throw error;
        }
      },
      [url]
    );
}
