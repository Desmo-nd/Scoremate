import React from 'react';
import {StyleSheet, SafeAreaView } from 'react-native';
import { SIZES } from '../constants/Sizes';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
const Header = () => {
  return (
    <View style= {styles.header}>
      <Ionicons style={styles.icons} size={30} name='menu' color='white' />
      <ThemedText style={styles.title}>SCOREMATE</ThemedText>
      <Ionicons style={styles.icons} size={30} name='search'  color='white'/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    width: SIZES.width,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  icons:{
    padding: 20,

  }
});


export default Header;
