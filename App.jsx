import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/store/store'
import { Provider } from 'react-redux'
import Navigator from './src/Navigator/Navigator';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store} >
        <Navigator />
      </Provider>
    </NavigationContainer>
  );
}
