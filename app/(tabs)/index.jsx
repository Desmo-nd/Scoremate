import React from 'react';
import {StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Leagues from '../../components/Leagues';
import LiveMatches from '../../components/LiveMatches'; 
import { SIZES } from '@/constants/Sizes';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';

const index = () => {
  
    return (
    <ThemedView contentContainerStyle={styles.container}>
        <Header />
        <Leagues />
        <LiveMatches />
    </ThemedView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      // alignItems: 'center',

    },
    
  });

export default index;
