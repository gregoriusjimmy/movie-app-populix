import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { AppNavigator } from './AppNavigator';
import './configs/axiosConfig';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default registerRootComponent(App);
