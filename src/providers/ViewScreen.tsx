import { createContext, useContext, useState, ReactNode } from "react";

interface ViewScreenContextType {
  whatsAppModalVisible: boolean;
  setWhatsAppModalVisible: (visible: boolean) => void;
  mailModalVisible: boolean;
  setMailModalVisible: (visible: boolean) => void;
}

const ViewScreenContext = createContext<ViewScreenContextType | undefined>(
  undefined,
);

export const ViewScreenProvider = ({ children }: { children: ReactNode }) => {
  const [whatsAppModalVisible, setWhatsAppModalVisible] = useState(false);
  const [mailModalVisible, setMailModalVisible] = useState(false);

  return (
    <ViewScreenContext.Provider
      value={{
        whatsAppModalVisible,
        setWhatsAppModalVisible,
        mailModalVisible,
        setMailModalVisible,
      }}
    >
      {children}
    </ViewScreenContext.Provider>
  );
};

export const useViewScreen = () => {
  const context = useContext(ViewScreenContext);
  if (!context)
    throw new Error("useViewScreen must be used within ViewScreenProvider");
  return context;
};
