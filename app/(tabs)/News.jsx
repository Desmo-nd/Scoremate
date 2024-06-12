import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

// Assume fetchNews is a function that fetches football news data from an API
const fetchNews = async () => {
  // Implement your API call here or use mock data
  // For example:
  const response = await fetch('https://yourapi.com/football-news');
  const data = await response.json();
  return data;
};

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    getNews();
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Football News</ThemedText>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <ScrollView>
          {news.map((item) => (
            <View key={item.id} style={styles.newsItem}>
              <ThemedText style={styles.newsTitle}>{item.title}</ThemedText>
              <Text>{item.content}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default News;
