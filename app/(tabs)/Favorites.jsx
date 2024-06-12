import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SIZES } from '../../constants/Sizes';
import { Ionicons } from '@expo/vector-icons';

const matches = [
    { id: 0, homeTeam: 'Manchester City', awayTeam: 'Arsenal', matchTime: '12:00', homeTeamImage: require('../../assets/images/mc.png'), awayTeamImage: require('../../assets/images/Arsenal.png') },
    { id: 1, homeTeam: 'Chelsea', awayTeam: 'Manchester United', matchTime: '10:00', homeTeamImage: require('../../assets/images/Chelsea.png'), awayTeamImage: require('../../assets/images/manu.png') },
    { id: 2, homeTeam: 'Manchester City', awayTeam: 'Arsenal', matchTime: '12:00', homeTeamImage: require('../../assets/images/mc.png'), awayTeamImage: require('../../assets/images/Arsenal.png') },
    { id: 3, homeTeam: 'Borussia Dortmund', awayTeam: 'Aston Villa', matchTime: '14:00', homeTeamImage: require('../../assets/images/Borussia.png'), awayTeamImage: require('../../assets/images/villa.png') },
    { id: 4, homeTeam: 'Chelsea', awayTeam: 'Manchester United', matchTime: '10:00', homeTeamImage: require('../../assets/images/Chelsea.png'), awayTeamImage: require('../../assets/images/manu.png') },
    { id: 5, homeTeam: 'Manchester City', awayTeam: 'Arsenal', matchTime: '12:00', homeTeamImage: require('../../assets/images/mc.png'), awayTeamImage: require('../../assets/images/Arsenal.png') },
    { id: 6, homeTeam: 'Borussia Dortmund', awayTeam: 'Aston Villa', matchTime: '14:00', homeTeamImage: require('../../assets/images/Borussia.png'), awayTeamImage: require('../../assets/images/villa.png') },
    // Add more matches as needed
  ];

const Favorites = () => {
    // const [favoriteMatches, setFavoriteMatches] = useState([]);

    // useEffect(() => {
    //   // Filter matches based on favorite teams
    //   const filteredMatches = matches.filter(
    //     (match) => favoriteTeams.includes(match.homeTeam.name) || favoriteTeams.includes(match.awayTeam.name)
    //   );
    //   setFavoriteMatches(filteredMatches);
    // }, []);
  
    return (
        <SafeAreaView style={styles.container}>
            <ThemedView style={{height:'100%'}}>
                <ThemedText style={styles.title}>Favorite teams</ThemedText>
                <ScrollView>
                    {matches.map((match) => (
                    <View key={match.id} >
                        <View style={styles.dateBar}>
                            <ThemedText style={styles.date}>wed 28.7</ThemedText>
                        </View>
                        <TouchableOpacity style={styles.matchTile}>
                            <View style={styles.matchTime}>
                            <ThemedText style={styles.timeText}>{match.matchTime}</ThemedText>
                            </View>
                            <View style={styles.innerContainer}>
                                <View style={styles.teamsContainer}>
                                    <Image source={match.homeTeamImage} style={styles.teamImage} resizeMode="cover" />
                                    <ThemedText style={styles.teamText}>{match.homeTeam}</ThemedText>
                                </View>
                                <View style={styles.teamsContainer}>
                                    <Image source={match.awayTeamImage} style={styles.teamImage} resizeMode="cover" />
                                    <ThemedText style={styles.teamText}>{match.awayTeam}</ThemedText>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.notification}>
                                <Ionicons name= 'notifications' size={30} color={'aqua'} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    ))}
                </ScrollView>
            </ThemedView> 
        </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: SIZES.height,
        width: SIZES.width,
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        paddingTop: 30,
        marginTop: 50,
      },
      dateBar:{
        width: '100%',
        backgroundColor: '#141414',
        padding: 5,
      },
      date:{
        color: 'white',
        fontSize: 20,
        paddingHorizontal: 10,
      },
      matchTile: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
      },
      matchTime:{
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      innerContainer:{
        width: '60%',
      },
      teamsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        width: '90%',
        padding: 1,
        marginHorizontal: 15,
        borderLeftColor: '#ccc',
        borderLeftWidth: 0.5,
      
      },
      teamImage: {
        width: 30,
        height: 30,
        marginRight: 10,
        borderRadius: 25,
      },
      teamText: {
        fontSize: 18,
      },
      notification:{
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: '#ccc',
        borderLeftWidth: 0.5,
      }
});

export default Favorites;
