import initialContacts from "../data/contacts";
import { useState } from "react";
import SearchBar from "../components/contacts/SearchBar";
import ContactList from "../components/contacts/ContactList";
import ContactForm from "../components/contacts/ContactForm";

function Contacts() {
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState(initialContacts);
  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");


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
  const handleDeleteContact = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact?",
    );

    if (!confirmed) return;

    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id),
    );
  };

 const filteredContacts = contacts
  .filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || contact.status === statusFilter;

    return matchesSearch && matchesStatus;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);

      case "name-desc":
        return b.name.localeCompare(a.name);

      case "company":
        return a.company.localeCompare(b.company);

      case "newest":
      default:
        return b.id - a.id;
    }
  });
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Contacts</h1>
          <p className="text-gray-500">Manage your contacts and clients.</p>
        </div>

        <button
          onClick={() => {
            setEditingContact(null);
            setShowModal(true);
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg"
        >
          + Add Contact
        </button>
      </div>

      <div className="flex gap-4">
  <div className="flex-1">
    <SearchBar
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
  </div>

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="border rounded-lg px-4 py-3"
  >
    <option value="All">All</option>
    <option value="Lead">Lead</option>
    <option value="Client">Client</option>
  </select>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="border rounded-lg px-4 py-3"
  >
    <option value="newest">Newest</option>
    <option value="name-asc">Name (A-Z)</option>
    <option value="name-desc">Name (Z-A)</option>
    <option value="company">Company</option>
  </select>
</div>

      <ContactList
        contacts={filteredContacts}
        onEdit={handleEditContact}
        onDelete={handleDeleteContact}

      />

      {showModal && (
        <ContactForm
          onClose={() => {
            setShowModal(false);
            setEditingContact(null);
          }}
          editingContact={editingContact}
          onSave={editingContact ? handleUpdateContact : handleAddContact}
        />
      )}
    </div>
  );
}

export default Contacts;
