import { Ionicons } from "@expo/vector-icons";

import { Pressable, StyleSheet, Text, View } from "react-native";
import { useViewScreen } from "../../providers/ViewScreen";

interface WhatsAppItemProps {
  number: string | undefined;
}

const WhatsAppItem = ({ number }: WhatsAppItemProps) => {
  const { setWhatsAppModalVisible } = useViewScreen();

  return (
    <View>
      <Pressable
        onPress={() => {
          setWhatsAppModalVisible(true);
        }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.container}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>WhatsApp</Text>
          </View>
          <View style={styles.img}>
            <Ionicons name="logo-whatsapp" size={24} color="white" />
          </View>
          {/* <View style={styles.img}>
            <Ionicons name="logo-whatsapp" size={24} color="#25D366" />
          </View> */}
        </View>
      </Pressable>
    </View>
  );
};

export default WhatsAppItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  img: {
    width: 44,
    height: 44,
    borderRadius: 64,
    // borderColor: "#f0f0f0",
    // borderWidth: 1,
    backgroundColor: "#25D366",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: "#f7f7f7",
  },
});
