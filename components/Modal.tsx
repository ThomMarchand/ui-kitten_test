import {
  Button,
  IndexPath,
  Input,
  Modal,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function ModalComponent({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const options = ["Coucou", "Salut", "Ciao"];

  const [value, setValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0)
  );

  return (
    <Modal
      style={styles.container}
      visible={visible}
      backdropStyle={styles.backdrop}
    >
      <Text category="h5">Un super titre</Text>

      <Select
        style={{ width: "100%" }}
        placeholder="Votre sélection ici"
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        {options.map((option, index) => (
          <SelectItem key={index} title={option} />
        ))}
      </Select>

      <Input
        placeholder="Votre texte ici"
        value={value}
        onChangeText={setValue}
        multiline={true}
      />

      <Button onPress={onClose}>Close</Button>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    gap: 20,
    width: "85%",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
