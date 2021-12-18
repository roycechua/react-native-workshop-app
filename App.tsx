import React from 'react';
import { Provider } from 'react-redux';
import MainNavigationContainer from './src/navigation/MainNavigationContainer';
import { store } from './src/redux/store';

export default function App () {
  return (
    <Provider store={store}>
        <MainNavigationContainer/>
    </Provider>
  );
}
