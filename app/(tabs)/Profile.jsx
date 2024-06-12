import React, {useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/tabs.styles';

const options = [
  { id: 1, name: 'Dropping odds', icon: 'trending-down' },
  { id: 2, name: 'TV schedule', icon: 'tv' },
  { id: 3, name: 'Feedback', icon: 'chatbubbles' },
  { id: 4, name: 'Share SportMate', icon: 'share-social' },
  { id: 5, name: 'About SportMate', icon: 'information-circle' },
  { id: 6, name: 'Rate us', icon: 'star' },
  { id: 7, name: 'Settings', icon: 'settings' },
  { id: 8, name: 'Buzzer feeds', icon: 'notifications' },
];

const Profile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignIn = () => {
    // Implement sign-in functionality here
    setIsLoggedIn(true);
  };
  return (
    <SafeAreaView style={styles.container}>
        <ThemedView style={{height:'100%'}}>
            <ThemedText style={styles.title}>Profile</ThemedText>
            <View style={styles.OptionsCont}>
                <TouchableOpacity style={styles.Myprofile}>
                <Ionicons name="person" size={24} style={styles.icon} />
                <ThemedText style={styles.optionText}>My profile</ThemedText>
                </TouchableOpacity>
            </View>
            {!isLoggedIn && (
                <View style={styles.signInContainer}>
                <ThemedText style={styles.signInText}>Sign in to access more features</ThemedText>
                <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                    <ThemedText style={styles.signInButtonText}>Sign In</ThemedText>
                </TouchableOpacity>
                </View>
            )}
            <View style={styles.OptionsCont}>
                {options.map((option) => (
                    <TouchableOpacity key={option.id} style={styles.option}>
                        <Ionicons name={option.icon} size={24} style={styles.icon} />
                        <View style={styles.optionArrow}>
                            <ThemedText style={styles.optionText}>{option.name}</ThemedText>
                            <Ionicons name="chevron-forward" size={20} color="#ccc" />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ThemedView>
    </SafeAreaView>
  );
};

export default Profile;
