import { createContext, useContext, useEffect, useState } from "react";
import initialContacts from "../../data/contacts";


const ContactContext = createContext(null);

const STORAGE_KEY = "clientflow_contacts";

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = localStorage.getItem(STORAGE_KEY);

      return savedContacts
        ? JSON.parse(savedContacts)
        : initialContacts;
    } catch (error) {
      console.error("Failed to load contacts:", error);
      return initialContacts;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(contacts),
      );
    } catch (error) {
      console.error("Failed to save contacts:", error);
    }
  }, [contacts]);

  const addContact = (newContact) => {
    const contact = {
      ...newContact,
      id: crypto.randomUUID(),
      lastContact: "Today",
    };

    setContacts((previousContacts) => [
      contact,
      ...previousContacts,
    ]);
  };

  const updateContact = (updatedContact) => {
    setContacts((previousContacts) =>
      previousContacts.map((contact) =>
        contact.id === updatedContact.id
          ? updatedContact
          : contact,
      ),
    );
  };

  const deleteContact = (id) => {
    setContacts((previousContacts) =>
      previousContacts.filter(
        (contact) => contact.id !== id,
      ),
    );
  };

  const importContacts = (importedContacts) => {
    const contactsWithIds =
      importedContacts.map((contact) => ({
        ...contact,
        id: crypto.randomUUID(),
        lastContact:
          contact.lastContact || "Today",
      }));

    setContacts((previousContacts) => [
      ...contactsWithIds,
      ...previousContacts,
    ]);
  };

  const resetContacts = () => {
    setContacts(initialContacts);
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact,
        updateContact,
        deleteContact,
        importContacts,
        resetContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error(
      "useContacts must be used inside ContactProvider",
    );
  }

  return context;
}