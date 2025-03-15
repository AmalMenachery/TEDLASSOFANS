import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'favorites';

export const getFavorites = async (): Promise<Record<number, boolean>> => {
  try {
    const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : {};
  } catch (error) {
    console.error('Error loading favorites:', error);
    return {};
  }
};

export const setFavorites = async (favorites: Record<number, boolean>): Promise<void> => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};
