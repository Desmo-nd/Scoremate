import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SIZES } from '@/constants/Sizes';

const gameStats = {
  '1': {
    homeTeam: 'Team A',
    awayTeam: 'Team B',
    score: '2-1',
    time: '90:00',
    stats: {
      shooting: { home: 10, away: 8 },
      attacks: { home: 25, away: 22 },
      possession: { home: '60%', away: '40%' },
      cards: { home: 1, away: 2 },
      corners: { home: 5, away: 3 },
    },
    headToHead: [
      { match: 'Team A 1-0 Team B', date: '2023-01-01' },
      { match: 'Team B 2-2 Team A', date: '2022-12-01' },
    ],
  },
  '2': {
    homeTeam: 'Team C',
    awayTeam: 'Team D',
    score: '1-1',
    time: '90:00',
    stats: {
      shooting: { home: 12, away: 9 },
      attacks: { home: 30, away: 28 },
      possession: { home: '55%', away: '45%' },
      cards: { home: 3, away: 1 },
      corners: { home: 7, away: 4 },
    },
    headToHead: [
      { match: 'Team C 2-1 Team D', date: '2023-02-01' },
      { match: 'Team D 0-0 Team C', date: '2022-11-01' },
    ],
  },
};

const GameStats = () => {
  const stats = gameStats['1']; // Example using game ID '1'

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <ThemedView>
      {stats ? (
        <>
          <ThemedText style={styles.title}>{`${stats.homeTeam} vs ${stats.awayTeam}`}</ThemedText>
          <ThemedText style={styles.subtitle}>{`Score: ${stats.score}`}</ThemedText>
          <ThemedText style={styles.subtitle}>{`Time: ${stats.time}`}</ThemedText>

          <View style={styles.statsSection}>
            <ThemedText style={styles.sectionTitle}>Match Statistics</ThemedText>
            <ThemedText style={styles.statText}>{`${stats.stats.shooting.home} Shooting ${stats.stats.shooting.away}`}</ThemedText>
            <ThemedText style={styles.statText}>{`${stats.stats.attacks.home} Attacks ${stats.stats.attacks.away}`}</ThemedText>
            <ThemedText style={styles.statText}>{`${stats.stats.possession.home} Possession ${stats.stats.possession.away}`}</ThemedText>
            <ThemedText style={styles.statText}>{`${stats.stats.cards.home} Cards ${stats.stats.cards.away}`}</ThemedText>
            <ThemedText style={styles.statText}>{`${stats.stats.corners.home} Corners ${stats.stats.corners.away}`}</ThemedText>
          </View>

          <View style={styles.headToHeadSection}>
            <ThemedText style={styles.sectionTitle}>Head to Head</ThemedText>
            {stats.headToHead.map((match, index) => (
              <ThemedText key={index} style={styles.headToHeadText}>{`${match.match} - ${match.date}`}</ThemedText>
            ))}
          </View>
        </>
      ) : (
        <ThemedText style={styles.errorText}>Game stats not found.</ThemedText>
      )}
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: SIZES.width,
    height: SIZES.height,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  statsSection: {
    marginBottom: 16,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statText: {
    fontSize: 16,
    marginBottom: 4,
  },
  headToHeadSection: {
    marginTop: 16,
    alignItems: 'center',
  },
  headToHeadText: {
    fontSize: 16,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default GameStats;
