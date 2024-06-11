import React from 'react';
import { TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const allCategories = [
  { id: 1, name: 'Football' },
  { id: 2, name: 'Basketball' },
  { id: 3, name: 'Tennis' },
  { id: 4, name: 'Cricket' },
  { id: 5, name: 'Baseball' },
  { id: 6, name: 'Hockey' },
  // Add more categories as needed
];

const AllCategories = () => {
  return (
    <ThemedView style={styles.container}>
        <View style={styles.matchResults}>
            <ThemedText style={styles.title}>All Categories</ThemedText>
            <TouchableOpacity>
            <ThemedText style={styles.teamText}>view All</ThemedText>
            </TouchableOpacity>
        </View>      
      <FlatList
        data={allCategories}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryTile}>
            <ThemedText style={styles.categoryText}>{item.name}</ThemedText>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
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
  listContainer: {
    paddingBottom: 20,
  },
  categoryTile: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
  },
  matchResults: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  
  },
});

export default AllCategories;
