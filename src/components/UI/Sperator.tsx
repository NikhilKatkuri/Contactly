import { StyleSheet, View } from "react-native";
import React from "react";

interface SperatorProps {
  direction?: "horizontal" | "vertical";
}

const Sperator = ({ direction = "horizontal" }: SperatorProps) => {
  return <View style={[styles.sectionDivider, styles[direction]]} />;
};

export default Sperator;

const styles = StyleSheet.create({
  sectionDivider: {
    backgroundColor: "#e5e7eb",
  },
  horizontal: {
    height: 1,
  },
  vertical: {
    width: 1,
  },
});
