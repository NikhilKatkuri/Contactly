import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface VideoCallItemProps {
  number: string | undefined;
}

const VideoCallItem = ({ number }: VideoCallItemProps) => {
  const handleVideoCall = () => {
    if (!number) return;
    const url =
      Platform.OS === "ios"
        ? `facetime://${number}`
        : `tel:${number}?video=true`;
    Linking.canOpenURL(url)
      .then((canOpen) => {
        if (canOpen) {
          Linking.openURL(url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  return (
    <Pressable
      onPress={handleVideoCall}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Video call</Text>
        </View>
        <View style={styles.img}>
          <Ionicons name="videocam" size={20} color="gray" />
        </View>
      </View>
    </Pressable>
  );
};

export default VideoCallItem;

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
    backgroundColor: "#e1e3e6",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: "#f7f7f7",
  },
});
