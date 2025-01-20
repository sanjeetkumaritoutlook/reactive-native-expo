import { Stack } from "expo-router";
//routing in this project is done using expo-router
import { RootStackParamList } from './types'; // Adjust the import path if needed
import { NavigationContainer } from "@react-navigation/native";
// Define the Stack Navigator
//const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="Profile" options={{ title: 'Profile' }} />
    </Stack>
  );
}
