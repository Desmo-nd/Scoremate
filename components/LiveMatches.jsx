import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SIZES } from '../constants/Sizes';

// Sample data for live matches (replace with actual data)
const liveMatches = [
    { id: 1, homeTeam: 'Chelsea', awayTeam: 'Manchester United', matchTime: '10:00', homeTeamImage: require('../assets/images/Chelsea.png'), awayTeamImage: require('../assets/manu.png') },
    { id: 2, homeTeam: 'Manchester City', awayTeam: 'Arsenal', matchTime: '12:00', homeTeamImage: require('.../assets/images/teamC.png'), awayTeamImage: require('.../assets/images/Arsenal.png') },
    { id: 3, homeTeam: 'Borussia Dortmund', awayTeam: 'Aston Villa', matchTime: '14:00', homeTeamImage: require('.../assets/images/teamE.png'), awayTeamImage: require('.../assets/images/villa.png') },
    // Add more matches as needed
  ];
  

const LiveMatches = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Live Matches</ThemedText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {liveMatches.map((match) => (
          <View key={match.id} style={styles.matchTile}>
          <View style={styles.teamImagesContainer}>
            <Image source={match.homeTeamImage} style={styles.teamImage} resizeMode="cover" />
            <Image source={match.awayTeamImage} style={styles.teamImage} resizeMode="cover" />
          </View>
          <View style={styles.matchInfo}>
            <ThemedText style={styles.teamText}>{match.homeTeam} vs {match.awayTeam}</ThemedText>
            <ThemedText style={styles.timeText}>{match.matchTime}</ThemedText>
          </View>
        </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      scrollContainer: {
        flexDirection: 'row',
      },
      matchTile: {
        width: 150,
        height: 150,
        marginRight: 10,
        backgroundColor: 'gray',
        borderRadius: 10,
        overflow: 'hidden', // Ensure the image stays within the rounded borders
        justifyContent: 'space-between', // Added for better layout
      },
      teamImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
      },
      teamImage: {
        width: 60,
        height: 60,
        borderRadius: 30, // Makes the image circular
      },
      matchInfo: {
        padding: 5,
      },
      teamText: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      timeText: {
        fontSize: 12,
        color: 'white',
      },
});

export default LiveMatches;
