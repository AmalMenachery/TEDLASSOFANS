import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface EpisodeItemProps {
  episode: { id: number; name: string; image?: { medium: string } };
  onPress: () => void;
  onFavoriteToggle: () => void;
  isFavorite: boolean;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode, onPress, onFavoriteToggle, isFavorite }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: episode.image?.medium }} style={styles.image} />
      <Text style={styles.text}>{episode.name}</Text>
      <TouchableOpacity onPress={onFavoriteToggle}>
        <Text style={{ color: isFavorite ? 'gold' : 'gray' }}>★</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, flexDirection: 'row', alignItems: 'center' },
  image: { width: 50, height: 75, marginRight: 10 },
  text: { flex: 1 },
});

export default EpisodeItem;
