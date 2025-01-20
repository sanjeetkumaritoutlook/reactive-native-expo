import React from 'react';
import { View, Text, Button } from 'react-native';
import { HomeScreenProps } from './types';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Define the Stack Navigator
const Stack = createNativeStackNavigator();
export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
