import { Button, Text } from "@ui-kitten/components";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text appearance="hint">Edit app/index.tsx to edit this screen.</Text>

      <Button>Click Me</Button>
    </View>
  );
}
