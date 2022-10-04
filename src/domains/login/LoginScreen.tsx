import { Button } from '@components/Button';
import { CText } from '@components/CText';
import { setAuth } from '@src/authSlice';
import { spacing } from '@utils/theme';
import * as Linking from 'expo-linking';
import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { usePostCreateAccessToken } from './APICreateAccessToken';
import { usePostCreateRequestToken } from './APICreateRequestToken';
const READ_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjkwMzMyYTIzZDI0ODRlNjAzNzdhODA3ODIyYWNhMCIsInN1YiI6IjYzM2MwNmNiMzg0NjlhMDA3YWM1YzBiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYmHkHFPVdS1437cJMWIt8huXH-RveQQXImvtvlZiz8';

export const LoginScreen = () => {
  const postCreateRequestToken = usePostCreateRequestToken();
  const postCreateAccessToken = usePostCreateAccessToken();
  const [requestToken, setRequestToken] = useState('');

  const dispatch = useDispatch();

  const handleRequestAccess = async () => {
    try {
      const res = await postCreateRequestToken(
        { redirect_to: 'movie-app-populix://' },
        { headers: { Authorization: `Bearer ${READ_ACCESS_TOKEN}` } }
      );
      if (!res.success) throw Error();
      Linking.openURL(`https://www.themoviedb.org/auth/access?request_token=${res.request_token}`);
      setRequestToken(res.request_token);
    } catch (error) {
      console.warn(error);
    }
  };

  const Login = async () => {
    try {
      const res = await postCreateAccessToken(
        {
          request_token: requestToken,
        },
        { headers: { Authorization: `Bearer ${READ_ACCESS_TOKEN}` } }
      );
      if (res.success) {
        dispatch(setAuth({ accessToken: res.access_token, accountId: res.account_id }));
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: spacing.layout }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CText variant="h1" style={{ marginBottom: spacing[56] }}>
          Login
        </CText>
        <CText variant="subtitle" style={{ marginBottom: spacing[12] }}>
          Please request permission fist before log in
        </CText>
        <Button
          style={{ marginBottom: spacing[56] }}
          onPress={() => handleRequestAccess()}
          variant="primary-outline">
          Request permission
        </Button>
        <Button onPress={() => Login()} variant="primary">
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
};
