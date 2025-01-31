import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { HomeStack } from '../navigation/stack';

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <HomeStack />
    </NavigationContainer>
  );
}
