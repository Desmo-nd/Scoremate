import React from 'react';
import {StyleSheet, SafeAreaView } from 'react-native';
import { SIZES } from '../constants/Sizes';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
const Header = () => {
  return (
    <ThemedView style= {styles.header}>
      <Ionicons style={styles.icons} size={30} name='menu' color='white' />
      <ThemedText style={styles.title}>SCOREMATE</ThemedText>
      <Ionicons style={styles.icons} size={30} name='search'  color='white'/>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    width: SIZES.width,
    marginTop: 40,
  },
  title: {
    fontSize: 40,
    fontFamily: 'bold',
    padding: 20,
    marginTop: 20,
  },
  icons:{
    padding: 20,

  }
});


export default Header;
