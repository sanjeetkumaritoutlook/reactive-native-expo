import React from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types"; // Adjust the path as needed

export default function Index() {
  // Define the navigation type
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "Home">>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}
