import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, Image, Button, Modal, ActivityIndicator } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  const [isModalVisible, setIsMoadalVisble] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator></ActivityIndicator>
      <ActivityIndicator size="large"></ActivityIndicator>
      <ActivityIndicator size="large" color="midnightblue"></ActivityIndicator>
      <ActivityIndicator size="large" color="midnightblue" animating={false}></ActivityIndicator>
    </View>
  );
}
