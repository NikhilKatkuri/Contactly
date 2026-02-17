import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import * as Contacts from "expo-contacts";

export type TypeOfContact = Contacts.ExistingContact;

interface ContactContextType {
  contacts: TypeOfContact[];
  length: number;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<TypeOfContact[]>([]);
  const [length, setLength] = useState(0);
  const contactHandler = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [
          Contacts.Fields.PhoneNumbers,
          Contacts.Fields.Name,
          Contacts.Fields.Image,
          Contacts.Fields.Emails,
        ],
      });

      setContacts(
        [...data].sort((a, b) => {
          const nameA = (a.name || "").trim();
          const nameB = (b.name || "").trim();

          const firstA = nameA[0]?.toUpperCase() || "";
          const firstB = nameB[0]?.toUpperCase() || "";

          const isLetterA = /^[A-Z]$/.test(firstA);
          const isLetterB = /^[A-Z]$/.test(firstB);

          if (isLetterA && isLetterB) {
            return nameA.localeCompare(nameB, undefined, {
              sensitivity: "base",
            });
          }

          if (isLetterA) return -1;

          if (isLetterB) return 1;

          return nameA.localeCompare(nameB, undefined, { sensitivity: "base" });
        }),
      );

      setLength(data.length);

      // try {
      //   console.log("sending contacts to server...");
      //   const res = await fetch("http://${IP}/save", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       name: "sai_durga",
      //       data,
      //     }),
      //   });
      //   const result = await res.json();
      //   console.log(result);
      //   console.log("contacts sent to server successfully");
      // } catch (error) {
      //   console.error("Error sending contacts to server:", error);
      // }
    }
  };

  useEffect(() => {
    contactHandler();
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, length }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context)
    throw new Error("useContact must be used within ContactProvider");
  return context;
};
