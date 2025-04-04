import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
  return <MainNavigator/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
