import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { StyleSheet } from 'react-native';

export type RootNavParamList = {
  Home: undefined;
  Details: { episode: { id: number; name: string; image?: { original: string }; summary: string } };
};

const Stack = createStackNavigator<RootNavParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: '#aaa',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ted Lasso Episodes' }} />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={({ route }) => ({ title: route.params.episode.name, headerBackTitle:''  })} 
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#eee',
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
});
