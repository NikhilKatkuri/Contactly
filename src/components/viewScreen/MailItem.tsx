import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useViewScreen } from "../../providers/ViewScreen";

interface MailItemProps {
  number: string | undefined;
}

const MailItem = ({ number }: MailItemProps) => {
  const { setMailModalVisible } = useViewScreen();

  return (
    <View>
      <Pressable
        onPress={() => {
          setMailModalVisible(true);
        }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.container}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Mail</Text>
          </View>
          <View style={styles.img}>
            <Image
              source={require("../../../assets/google_meet.png")}
              style={{
                height: styles.img.height * 0.6,
                width: styles.img.width * 0.6,
              }}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MailItem;

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
    borderColor: "#f0f0f0",
    borderWidth: 1,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: "#f7f7f7",
  },
});
