/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {Home} from './src/home';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
