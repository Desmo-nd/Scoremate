import React from 'react';
import {StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Leagues from '../../components/Leagues';
import LiveMatches from '../../components/LiveMatches'; 
import AllCategories from '../../components/AllCategories';

import { ThemedView } from '@/components/ThemedView';
import { SIZES } from '../../constants/Sizes';
import TodayMatches from '../../components/TodayMatches';

const index = () => {
  
    return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView>
        <Header />
        <Leagues />
        <LiveMatches />
        <TodayMatches />
        <AllCategories />
      </ThemedView>
    </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      width: SIZES.width,
    },
    
  });

export default index;
