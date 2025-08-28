import { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "@ui-kitten/components";

import ModalComponent from "@/components/Modal";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text appearance="hint">Edit app/index.tsx to edit this screen.</Text>

      <Button onPress={() => setModalVisible(true)}>Click Me</Button>

      <ModalComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
