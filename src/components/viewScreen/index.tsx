import { StyleSheet, View } from "react-native";
import Header from "../viewScreen/Header";
import ContactView from "../viewScreen/ContactView";
import Sperator from "../UI/Sperator";
import PhoneItem from "../viewScreen/PhoneItem";
import VideoCallItem from "../viewScreen/VideoCallItem";
import { TypeOfContact, useContact } from "../../providers/Contact";
import WhatsAppItem from "../viewScreen/WhatsappItem";
import MailItem from "./MailItem";

interface ViewScreenProps extends React.ComponentProps<typeof View> {
  layerView?: boolean;
}

const ViewScreenWrapper = ({ style, ...props }: ViewScreenProps) => {
  const { contact } = useContact();

  if (contact.loading || !contact.contact) {
    return <View style={styles.body} />;
  }

  const user = contact.contact as TypeOfContact;
  return (
    <View style={[styles.body, style]} {...props}>
      {props.layerView && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.1)",
            zIndex: 1,
          }}
        />
      )}
      <Header />
      <ContactView
        hasImage={user.imageAvailable ?? false}
        name={user.name}
        uri={user.image?.uri ?? undefined}
      />
      <View style={{ paddingHorizontal: 2 }}>
        <Sperator />
      </View>
      <View>
        <PhoneItem
          number={user.phoneNumbers?.[0].number}
          type="Mobile"
          country="India"
        />
        <VideoCallItem number={user.phoneNumbers?.[0].number} />
        <WhatsAppItem number={user.phoneNumbers?.[0].number} />
        <MailItem number={user.phoneNumbers?.[0].number} />
      </View>
      {props.children}
    </View>
  );
};

export default ViewScreenWrapper;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});
