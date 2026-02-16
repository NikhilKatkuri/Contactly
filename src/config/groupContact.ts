import { TypeOfContact } from "../providers/Contact";

const GroupContact = (contacts: TypeOfContact[]) => {
  const sectionsMap: Record<string, TypeOfContact[]> = {};
  contacts.forEach((contact) => {
    const name = contact.name.trim() || "#";
    const firstChar = name[0].toUpperCase() || "#";

    const isletter = /^[A-Z]$/.test(firstChar);
    const key = isletter ? firstChar : "#";
    if (!sectionsMap[key]) {
      sectionsMap[key] = [];
    }
    sectionsMap[key].push(contact);
  });

  const sections = Object.keys(sectionsMap)
    .sort((a, b) => {
      if (a === "#") return 1;
      if (b === "#") return -1;
      return a.localeCompare(b);
    })
    .map((key) => ({
      title: key,
      data: sectionsMap[key].sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
      ),
    }));

  return sections.map((section) => ({
    title: section.title,
    data: section.data,
  }));
};

export default GroupContact;
