import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import ContactList from "../components/home/ContactList";

const Home = () => {
  return (
    <View style={styles.body}>
      <Header />
      <ContactList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
});
