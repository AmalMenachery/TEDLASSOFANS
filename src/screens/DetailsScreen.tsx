import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';

const DetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  const { episode } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: episode.image?.original }} style={styles.image} />
      <View style={styles.detailsWrapper}>
        <Text style={styles.title}>{episode.name}</Text>
        <Text style={styles.subtitle}>Season {episode.season}, Episode {episode.number}</Text>
        <Text style={styles.rating}>⭐ Rating: {episode.rating?.average ?? 'N/A'}</Text>
        <Text style={styles.airdate}>📅 Air Date: {episode.airdate}</Text>
        <Text style={styles.runtime}>⏳ Runtime: {episode.runtime} min</Text>
        <Text style={styles.summary}>{episode.summary.replace(/<[^>]+>/g, '')}</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(episode.url)}>🔗 View on TVMaze</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  image: {
    width: 'auto',
    aspectRatio: 16 / 9,
  },
  detailsWrapper: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: '#ffcc00',
    marginBottom: 5,
  },
  airdate: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  runtime: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    lineHeight: 22,
  },
  link: {
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});

export default DetailsScreen ;