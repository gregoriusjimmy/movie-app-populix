import { useSelector } from 'react-redux';
import { LoginScreen } from './domains/login/LoginScreen';
import { MainScreen } from './domains/main/MainScreen';
import { RootState } from './store';

export const AppNavigator = () => {
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.accountId) return <MainScreen />;

  return <LoginScreen />;
};
