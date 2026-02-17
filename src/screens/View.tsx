import { View } from "react-native";
import ViewScreenWrapper from "../components/viewScreen";
import { useViewScreen, ViewScreenProvider } from "../providers/ViewScreen";
import WhatsAppModal from "../components/modals/WhatsApp.modal";
import ViewModal from "../components/modals/ViewModal";
import MailModal from "../components/modals/Mail.modal";

const ViewContainer = () => {
  const {
    whatsAppModalVisible,
    setWhatsAppModalVisible,
    mailModalVisible,
    setMailModalVisible,
  } = useViewScreen();

  return (
    <View style={{ flex: 1 }}>
      <ViewScreenWrapper layerView={whatsAppModalVisible || mailModalVisible}>
        <ViewModal
          title="WhatsApp"
          visible={whatsAppModalVisible}
          onRequestClose={() => setWhatsAppModalVisible(false)}
        >
          <WhatsAppModal />
        </ViewModal>

        <ViewModal
          title="Mail"
          visible={mailModalVisible}
          onRequestClose={() => setMailModalVisible(false)}
        >
          <MailModal />
        </ViewModal>
      </ViewScreenWrapper>
    </View>
  );
};

const ViewScreen = () => {
  return (
    <ViewScreenProvider>
      <ViewContainer />
    </ViewScreenProvider>
  );
};

export default ViewScreen;
