import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/viewScreen/Header";
import ContactView from "../components/viewScreen/ContactView";
import Sperator from "../components/UI/Sperator";
import PhoneItem from "../components/viewScreen/PhoneItem";
import VideoCallItem from "../components/viewScreen/VideoCallItem";
import { TypeOfContact, useContact } from "../providers/Contact";

interface ViewScreenProps {
  id?: string;
}
const ViewScreen = ({ id = "" }: ViewScreenProps) => {
  const [contact, setcontact] = useState<TypeOfContact | undefined>(undefined);
  const [loading, setloading] = useState(true);
  const { contacts } = useContact();
  const getContact = async () => {
    const contObject = contacts.find((contact) => contact.id === id);
    setcontact(contObject);
    setloading(false);
  };
  useEffect(() => {
    getContact();
  }, [id]);
  if (loading || !contact) {
    return <View style={styles.body} />;
  }
  return (
    <View style={styles.body}>
      <Header />
      <ContactView
        hasImage={contact.imageAvailable ?? false}
        name={contact.name}
        uri={contact.image?.uri ?? undefined}
      />
      <View style={{ paddingHorizontal: 2 }}>
        <Sperator />
      </View>
      <View>
        <PhoneItem
          number={contact.phoneNumbers?.[0].number}
          type="Mobile"
          country="India"
        />
        <VideoCallItem number={contact.phoneNumbers?.[0].number} />
      </View>
    </View>
  );
};

export default ViewScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});
