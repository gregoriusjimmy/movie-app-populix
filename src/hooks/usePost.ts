import axios, { AxiosRequestConfig } from 'axios';
import { useCallback } from 'react';

const READ_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjkwMzMyYTIzZDI0ODRlNjAzNzdhODA3ODIyYWNhMCIsInN1YiI6IjYzM2MwNmNiMzg0NjlhMDA3YWM1YzBiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYmHkHFPVdS1437cJMWIt8huXH-RveQQXImvtvlZiz8';

export function usePost<TResponse, TPayload>(url: string) {
  return () =>
    useCallback(
      async (data: TPayload, config?: AxiosRequestConfig) => {
        try {
          const res = await axios.post<TResponse>(url, data, {
            headers: { Authorization: `Bearer ${READ_ACCESS_TOKEN}` },
            ...config,
          });
          return res.data;
        } catch (error) {
          console.error(error instanceof Error ? error.message : error);
          throw error;
        }
      },
      [url]
    );
}
