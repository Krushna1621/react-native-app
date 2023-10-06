import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Greet from "./components/Greet";
import {
  View,
  Text,
  Image,
  Button,
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  const [isModalVisible, setIsMoadalVisble] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name='Krushnakant Shinde'/>
      <Greet name='Bhagavat Shinde'/>
    </View>
  );
}
