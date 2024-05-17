/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { AppNavigators } from '@shared/navigators';
import store from '@shared/store';
import React from 'react';

import { Provider } from 'react-redux';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigators />
    </Provider>
  );
}

export default App;
