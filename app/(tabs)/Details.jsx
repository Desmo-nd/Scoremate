import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { ThemedView } from '@/components/ThemedView';
const DetailsScreen = () => {
  return (
    <ThemedView style={styles.container}>
      {/* <ThemedText style={styles.title}>Details Screen</ThemedText>
      <ThemedText>This is a sample details screen.</ThemedText> */}
      <Header/>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
});

export default DetailsScreen;
