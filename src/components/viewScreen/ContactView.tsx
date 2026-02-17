import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface ContactViewProps {
  uri?: string | undefined;
  name: string;
  hasImage: boolean;
}
const ContactView = (props: ContactViewProps) => {
  const { uri, name, hasImage } = props;

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        {hasImage && uri ? (
          <Image source={{ uri: uri }} style={styles.img} />
        ) : (
          <FontAwesome
            name="user"
            size={Math.floor(styles.img.width * 0.6)}
            color="#fff"
          />
        )}
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default ContactView;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 36,
    gap: 10,
  },
  img: {
    width: 72,
    height: 72,
    borderRadius: 64,
    backgroundColor: "#e1e3e6",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "400",
    color: "#232329",
  },
});
