import initialContacts from "../data/contacts";
import { useState } from "react";
import SearchBar from "../components/contacts/SearchBar";
import ContactList from "../components/contacts/ContactList";
import ContactForm from "../components/contacts/ContactForm";

function Contacts() {
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState(initialContacts);
  const [editingContact, setEditingContact] = useState(null);
  // ✅ Place it here
  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      {
        id: Date.now(),
        ...newContact,
        lastContact: "Today",
      },
    ]);

    setShowModal(false);
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    setShowModal(true);
  };

  const handleUpdateContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact,
      ),
    );

    setEditingContact(null);
    setShowModal(false);
  };
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Contacts</h1>
          <p className="text-gray-500">Manage your contacts and clients.</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg"
        >
          + Add Contact
        </button>
      </div>

      <SearchBar />

      <ContactList contacts={contacts} onEdit={handleEditContact} />

      {showModal && (
        <ContactForm
          onClose={() =>{
            setShowModal(false);
            setEditingContact(null);} 
            }
            editingContact={editingContact}
          onSave={
            editingContact
            ? handleUpdateContact
            : handleAddContact}
        />
      )}
    </div>
  );
}

export default Contacts;
