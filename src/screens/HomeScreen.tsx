import React, { useEffect } from "react";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import { useEpisodesStore } from "../store/episodesStore";
import EpisodeItem from "../components/molecules/EpisodeItem";

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { episodes, favorites, fetchEpisodes, toggleFavorite } =
    useEpisodesStore();

  useEffect(() => {
    fetchEpisodes();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={episodes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EpisodeItem
            episode={item}
            onPress={() => navigation.navigate("Details", { episode: item })}
            onFavoriteToggle={() => toggleFavorite(item.id)}
            isFavorite={favorites[item.id]}
          />
        )}
        estimatedItemSize={10}
      />
    </View>
  );
};

export default HomeScreen;
