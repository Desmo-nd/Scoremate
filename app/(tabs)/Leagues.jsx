import React from 'react';
import { View, SafeAreaView, Image, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import styles from '../../screens/tabs.styles';
import { Ionicons } from '@expo/vector-icons';
// Sample list of leagues and tournaments
const leagues = [
    { id: 1, name: 'Premier League', image: require('../../assets/images/EPL.png')  },
    { id: 2, name: 'La Liga', image: require('../../assets/images/laliga.png') },
    { id: 3, name: 'Bundesliga', image: require('../../assets/images/Bundesliga.jpg')},
    { id: 4, name: 'Serie A', image: require('../../assets/images/seriA.png') },
    { id: 5, name: 'Ligue 1', image: require('../../assets/images/Ligue1.png') },
    { id: 6, name: 'Champions League', image: require('../../assets/images/ucl.jpg') },
    { id: 7, name: 'Europa League', image: require('../../assets/images/FA.jpg') },
    { id: 8, name: 'Copa America', image: require('../../assets/images/FA.jpg')  },
    { id: 9, name: 'World Cup', image: require('../../assets/images/FA.jpg')  },
    // Add more leagues with their image paths as needed
  ];
  

const Leagues = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ThemedView style={{height:'100%'}}>
        <ThemedText style={styles.title}>Football</ThemedText>
            <ScrollView>
                {leagues.map((league) => (
                <View key={league.id} style={styles.LegueCont}>
                    <View style={{flexDirection:'row', }}>
                        <Image source={league.image} style={styles.leagueImage} />
                        <ThemedText style={styles.optionName}>{league.name}</ThemedText>
                    </View>
                    <Ionicons name="chevron-down" size={20} color="#ccc" />
                </View>
                ))}
            </ScrollView>
        </ThemedView>
    </SafeAreaView> 
  );
};

export default Leagues;
