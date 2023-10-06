import { useState } from "react";
import { View, Text, Image, Button, Modal } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  const [isModalVisible, setIsMoadalVisble] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Text>Krushna</Text> */}
      {/* <Text><Text style={{color:"red"}}>Krushnakant</Text> Shinde</Text> */}
      {/* <Image source={logoImg} style={{width:300,height:300}} /> */}
      <Button
        title="Press"
        onPress={() => setIsMoadalVisble(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsMoadalVisble(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsMoadalVisble(false)}
          ></Button>
        </View>
      </Modal>
    </View>
  );
}
