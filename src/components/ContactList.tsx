import { SectionList, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import { TypeOfContact, useContact } from "../providers/Contact";
import ContactItem from "./ContactItem";
import GroupContact from "../config/groupContact";

const ContactList = () => {
  const { contacts } = useContact();
  if (contacts) {
    const renderItem = useCallback(
      ({ item }: { item: TypeOfContact }) => (
        <ContactItem
          name={item.name}
          hasImg={item.imageAvailable ?? false}
          imageUri={item.image?.uri}
        />
      ),
      [],
    );
    const data = useMemo(() => GroupContact(contacts), [contacts]);

    return (
      <View style={styles.body}>
        <SectionList
          sections={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem({ item })}
          renderSectionHeader={({ section }) => (
            <View style={styles.header}>
              <Text style={styles.headerText}>{section.title}</Text>
            </View>
          )}
          renderSectionFooter={({}) => <View style={styles.sectionDivider} />}
          stickySectionHeadersEnabled
        />
      </View>
    );
  }
  return (
    <View style={styles.body}>
      <Text>Loading...</Text>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
  },

  headerText: {
    fontWeight: "500",
    fontSize: 15,
    color: "#334155",
  },

  sectionDivider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginHorizontal: 16,
    marginVertical: 16,
  },
});
