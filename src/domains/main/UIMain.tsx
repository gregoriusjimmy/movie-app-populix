import { CText } from '@components/CText';
import { colors, spacing } from '@utils/theme';
import React from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/namespace
import { TMovie } from './MainScreen';

export const MovieCard = ({ movie }: { movie: TMovie }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.brand.primary,
        borderRadius: spacing[4],
        marginBottom: spacing[12],
        padding: spacing[4],
      }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <CText>Title</CText>
        <CText>{movie.title}</CText>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <CText>Popularity</CText>
        <CText>{movie.popularity.toString()}</CText>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <CText>Release Date</CText>
        <CText>{movie.release_date}</CText>
      </View>
    </View>
  );
};
