import { Pressable, StyleSheet, Text, View } from "react-native";
import { useContact } from "../../providers/Contact";

const WhatsAppModal = () => {
  const { contact } = useContact();
  const number = contact.contact?.phoneNumbers?.[0].number;
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
        onPress={() => {}}
      >
        <View style={styles.text_layout}>
          <Text style={styles.text}>Message </Text>
          <Text style={styles.text}>{number}</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
        onPress={() => {}}
      >
        <View style={styles.text_layout}>
          <Text style={styles.text}>Voice call </Text>
          <Text style={styles.text}>{number}</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
        onPress={() => {}}
      >
        <View style={styles.text_layout}>
          <Text style={styles.text}>Video call </Text>
          <Text style={styles.text}>{number}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default WhatsAppModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  text_layout: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  btn: {
    padding: 24,
    paddingVertical: 16,
    width: "100%",
  },
  pressed: {
    backgroundColor: "#f7f7f7",
  },
});
