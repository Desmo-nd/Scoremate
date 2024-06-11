import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SIZES } from '../constants/Sizes';
// Define your league data (replace with actual data)
const leagues = [
  { id: 1, name: 'Premier League', image: require('../assets/images/EPL.png') },
  { id: 2, name: 'La Liga', image: require('../assets/images/laliga.png') },
  { id: 3, name: 'Bundesliga', image: require('../assets/images/Bundesliga.jpg') },
  { id: 4, name: 'Serie A', image: require('../assets/images/seriA.png') },
  { id: 5, name: 'Ligue 1', image: require('../assets/images/Ligue1.png') },
  { id: 6, name: 'FA', image: require('../assets/images/FA.jpg') },
  { id: 7, name: 'UCL', image: require('../assets/images/ucl.jpg') },


  // Add more leagues as needed
];



// Define the LeagueScrollView component
const LeagueScrollView = () => {
  return (
    <View style={styles.LeaContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <ThemedText>Leagues</ThemedText>
            <ThemedText>View all</ThemedText>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
        {leagues.map((league) => (
            <View key={league.id} style={styles.leagueItem}>
                <Image source={league.image} style={styles.leagueImage} />
            </View>
            
        ))}
        </ScrollView>
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
    LeaContainer:{
        flex: 1,
        width: "91%",
        padding: 10,
        backgroundColor: 'black',
        marginLeft: 40,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginVertical: 10,
    },
    container: {
      flexDirection: 'row', // Horizontal layout
      paddingVertical: 10,
      marginHorizontal: 20,
      height: SIZES.height*0.12,
    },
    leagueItem: {
        height: 70,
        width: 70,
    //   paddingHorizontal: 15,
    //   paddingVertical: 10,
      borderWidth: 1,
      borderRadius: 5,
      marginRight: 10,
    //   backgroundColor:'white',
        borderRadius: 999,
      
    },
    leagueImage: {
        width: '100%', // Adjust the size as needed
        height: '100%', // Adjust the size as needed
        resizeMode: 'cover', // Adjust the image style
        borderRadius: 999,

      },
  });
export default LeagueScrollView;
