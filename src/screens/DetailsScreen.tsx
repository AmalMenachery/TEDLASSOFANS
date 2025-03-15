import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface DetailsScreenProps {
  route: { params: { episode: { id: number; name: string; image?: { original: string }; summary: string } } };
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const { episode } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: episode.image?.original }} style={styles.image} />
      <Text style={styles.title}>{episode.name}</Text>
      <Text>{episode.summary.replace(/<[^>]+>/g, '')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  image: { width: '100%', height: 300 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
});

export default DetailsScreen;
