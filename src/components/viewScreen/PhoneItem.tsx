import Sperator from "../UI/Sperator";
import * as ClipBoard from "expo-clipboard";
import * as Linking from "expo-linking";

import { Ionicons } from "@expo/vector-icons";

import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface PhoneItemProps {
  number: string | undefined;
  type: string;
  country: string;
}

const PhoneItem = ({ number, type, country }: PhoneItemProps) => {
  const copyToClipBoard = async () => {
    await ClipBoard.setStringAsync(number ?? "");
    alert("copied");
  };

  const HandleTel = () => {
    const url =
      Platform.OS === "android" ? `tel:${number}` : `telprompt:${number}`;

    Linking.canOpenURL(url).then((canOpen) => {
      if (canOpen) {
        Linking.openURL(url);
      }
    });
  };

  const handleSMS = () => {
    const url = `sms:${number}`;
    Linking.canOpenURL(url).then((canOpen) => {
      if (canOpen) {
        Linking.openURL(url);
      }
    });
  };

  return (
    <Pressable
      onLongPress={copyToClipBoard}
      onPress={HandleTel}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {number ?? "Unknown"}
          </Text>
          <View style={styles.content}>
            <Text style={{ fontSize: 12, color: "gray" }}>{type}</Text>
            <Sperator direction="vertical" />
            <Text style={{ fontSize: 12, color: "gray" }}>{country}</Text>
          </View>
        </View>
        <View style={{ ...styles.content, gap: 16 }}>
          <View style={styles.img}>
            <Ionicons name="call" size={20} color="gray" />
          </View>
          <Pressable onPress={handleSMS}>
            <View style={styles.img}>
              <Ionicons name="chatbox" size={20} color="gray" />
            </View>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default PhoneItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 6,
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
