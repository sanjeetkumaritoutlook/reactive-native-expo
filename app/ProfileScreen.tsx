import React from 'react';
import { View, Text,Button } from 'react-native';
import { ProfileScreenProps } from './types';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Define the Stack Navigator
const Stack = createNativeStackNavigator();

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the Profile Screen</Text>
       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
