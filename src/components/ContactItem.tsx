import FontAwesome from "@expo/vector-icons/FontAwesome";

import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import React, { memo } from "react";

export interface ContactItemProps {
  name: string;
  hasImg: boolean;
  imageUri?: string;
}

const ContactItem = ({ name, hasImg, imageUri }: ContactItemProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.img}>
        {hasImg ? (
          <Image source={{ uri: imageUri }} style={styles.img} />
        ) : (
          <FontAwesome name="user" size={20} color="#fff" />
        )}
      </View>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default memo(ContactItem);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  pressed: {
    backgroundColor: "#f7f7f7",
  },
  img: {
    width: 44,
    height: 44,
    borderRadius: 64,
    backgroundColor: "#e1e3e6",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0F172A",
  },
});
