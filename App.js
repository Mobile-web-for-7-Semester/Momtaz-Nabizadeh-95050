import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Registretionform from'./component/Registretionform'

export default function App() {
  return (
    <View style={styles.container}>
      <Registretionform />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecf5',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
