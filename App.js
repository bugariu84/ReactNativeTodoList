import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  MainHeader
} from './src/components/MainHeader'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is my first React Native app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
