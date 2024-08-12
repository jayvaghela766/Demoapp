/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Routes from 'navigation/Routes';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import configureStore from 'redux/store';


const store = configureStore();
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </Provider>
  );
}


export default App;
