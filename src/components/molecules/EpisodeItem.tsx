import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Episode } from "../../types/common.types";

type EpisodeItemProps = {
  episode: Episode;
  onPress: () => void;
  onFavoriteToggle: (id: number) => void;
  isFavorite: boolean;
};

const EpisodeItem: React.FC<EpisodeItemProps> = ({
  episode,
  onPress,
  onFavoriteToggle,
  isFavorite = false,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleToggleFavorite = () => {
    setFavorite((prev) => !prev);
    onFavoriteToggle(episode.id);
  };

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: episode.image?.medium }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {episode.name}
        </Text>
        <Text style={styles.info}>
          Season {episode.season} | Episode {episode.number}
        </Text>
        <Text style={styles.info}>
          ⏳ {episode.runtime} min | ⭐ {episode.rating?.average ?? "N/A"}
        </Text>
        <Pressable
          onPress={handleToggleFavorite}
          style={styles.favoriteButton}
          hitSlop={10}
          testID="favoriteButton"
        >
          <Text
            style={[styles.favoriteIcon, favorite && styles.favoriteSelected]}
          >
            ★
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    flex: 0.45,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 100,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 0.555,
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },
  info: {
    fontSize: 14,
    color: "#666",
    marginVertical: 2,
  },
  favoriteButton: {
    alignSelf: "flex-end",
  },
  favoriteIcon: {
    fontSize: 26,
    color: "gray",
  },
  favoriteSelected: {
    color: "gold",
  },
});

export default EpisodeItem;
