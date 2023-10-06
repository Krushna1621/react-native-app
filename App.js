import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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
      <Button
        title="Alert"
        onPress={() => Alert.alert("Invalid data")}
      ></Button>
      <Button
        title="Alert 2"
        onPress={()=>Alert.alert("Invalid data!","DOB incorrect")}
      ></Button>
       <Button
        title="Alert 3"
        onPress={()=>Alert.alert("Invalid data!","DOB incorrect",[{
            text:'Cancel', 
            onPress:()=>console.log("Cancel pressed")
        },
        {
            text:'Ok', 
            onPress:()=>console.log("Cancel pressed")
        }])}
      ></Button>
    </View>
  );
}
