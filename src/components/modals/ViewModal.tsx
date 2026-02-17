import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface ViewModalProps extends React.ComponentProps<typeof Modal> {
  visible?: boolean;
  onRequestClose?: () => void;
  title: string;
}

const ViewModal = ({
  visible = false,
  onRequestClose,
  ...props
}: ViewModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onRequestClose}
    >
      <Pressable style={styles.backdrop} onPress={onRequestClose}>
        <Pressable
          style={styles.sheetContent}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.title_container}>
            <Text style={styles.title}>{props.title}</Text>
          </View>
          {props.children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ViewModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "flex-end",
  },
  sheetContent: {
    minHeight: 250,
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 20,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 10,
  },
  title_container: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
});
