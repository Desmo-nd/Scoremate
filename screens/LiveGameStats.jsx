import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const LiveGameStats = ({ route }) => {
  const { gameId } = route.params;

  // Sample data for game stats
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
        // Add more head-to-head data as needed
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
        // Add more head-to-head data as needed
      ],
    },
    // Add more game stats as needed
  };

  const stats = gameStats[gameId];

  return (
    <ScrollView style={styles.container}>
      {stats ? (
        <>
          <Text style={styles.title}>{`${stats.homeTeam} vs ${stats.awayTeam}`}</Text>
          <Text style={styles.subtitle}>{`Score: ${stats.score}`}</Text>
          <Text style={styles.subtitle}>{`Time: ${stats.time}`}</Text>

          <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>Match Statistics</Text>
            <Text style={styles.statText}>{`Shooting: ${stats.stats.shooting.home} - ${stats.stats.shooting.away}`}</Text>
            <Text style={styles.statText}>{`Attacks: ${stats.stats.attacks.home} - ${stats.stats.attacks.away}`}</Text>
            <Text style={styles.statText}>{`Possession: ${stats.stats.possession.home} - ${stats.stats.possession.away}`}</Text>
            <Text style={styles.statText}>{`Cards: ${stats.stats.cards.home} - ${stats.stats.cards.away}`}</Text>
            <Text style={styles.statText}>{`Corners: ${stats.stats.corners.home} - ${stats.stats.corners.away}`}</Text>
          </View>

          <View style={styles.headToHeadSection}>
            <Text style={styles.sectionTitle}>Head to Head</Text>
            {stats.headToHead.map((match, index) => (
              <Text key={index} style={styles.headToHeadText}>{`${match.match} - ${match.date}`}</Text>
            ))}
          </View>
        </>
      ) : (
        <Text style={styles.errorText}>Game stats not found.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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

export default LiveGameStats;
