import { Ionicons } from "@expo/vector-icons";

import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useRef, useState } from "react";
import { useContact } from "../../providers/Contact";

const Header = () => {
  const { length } = useContact();
  const [isSearchBox, setisSearchBox] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const handleClearInput = () => {
    if (inputRef.current) {
      inputRef.current.clear();
    }
  };

  const OpenSearchBox = () => {
    setisSearchBox(true);
  };

  const CloseSearchBox = () => {
    setisSearchBox(false);
  };

  return (
    <View style={styles.header}>
      {isSearchBox ? (
        <View style={styles.SearchBox}>
          <Ionicons name="search" size={18} color="#8b8d98" />
          <TextInput
            ref={inputRef}
            style={styles.SearchBarInput}
            placeholder="Search contacts"
          />
          <Pressable onPress={handleClearInput}>
            <Ionicons name="close-circle-outline" size={18} color="#8b8d98" />
          </Pressable>
        </View>
      ) : (
        <Pressable style={styles.SearchBox} onPress={OpenSearchBox}>
          <Ionicons name="search" size={18} color="#8b8d98" />
          <Text style={styles.text}>{length} contacts</Text>
        </Pressable>
      )}
      {isSearchBox && (
        <Pressable onPress={CloseSearchBox}>
          <Text style={{ fontSize: 14, color: "#8b8d98" }}>cancel</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 16,
  },
  SearchBox: {
    flex: 1,
    borderRadius: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 16,
    overflow: "hidden",
    backgroundColor: "#f7f7f7",
    gap: 12,
    height: 48,
  },
  text: {
    fontSize: 16,
    color: "#8b8d98",
  },
  SearchBarInput: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
    height: "100%",
  },
});
