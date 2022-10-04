import { CText } from '@components/CText';
import { RootState } from '@src/store';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { spacing } from '@utils/theme';
import { MovieCard } from './UIMain';

export type TMovie = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type TFavoriteMovieRes = {
  page: number;
  total_results: number;
  total_pages: number;
  results: TMovie[];
};

export const MainScreen = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const [favoritesMovie, setFavoritesMovie] = useState<TFavoriteMovieRes['results']>([]);

  useEffect(() => {
    const initialFetch = async () => {
      try {
        const res = await axios.get<TFavoriteMovieRes>(
          `/account/${auth.accountId}/movie/favorites`,
          {
            headers: { Authorization: `Bearer ${auth.accessToken}` },
          }
        );
        setFavoritesMovie(res.data.results);
      } catch (error) {
        console.warn(error);
      }
    };
    initialFetch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', paddingHorizontal: spacing.layout }}>
      <CText style={{ marginTop: spacing[36] }} variant="h1">
        You are Logged in
      </CText>
      <CText style={{ marginVertical: spacing[36] }} variant="h2">
        Your Favorite Movies
      </CText>
      <ScrollView style={{ flex: 1 }}>
        {favoritesMovie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
