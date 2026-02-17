import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Pressable, StyleSheet, View } from "react-native";
import React from "react";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={20} color="#0F172A" />
      </Pressable>
      <Pressable>
        <Ionicons name="ellipsis-vertical" size={20} color="#0F172A" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
