import { FaFileExport } from "react-icons/fa";
import { exportContactsToCSV } from "../utils/exportContactsToCSV";
import { useState } from "react";
import SearchBar from "../components/contacts/SearchBar";
import ContactList from "../components/contacts/ContactList";
import ContactForm from "../components/contacts/ContactForm";
import { useContacts } from "../components/context/ContactContext";

function Contacts() {
  const {
    contacts,
    addContact,
    updateContact,
    deleteContact,
  } = useContacts();

  const [showModal, setShowModal] = useState(false);
  const [editingContact, setEditingContact] =
    useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const handleAddContact = (newContact) => {
    addContact(newContact);
    closeModal();
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    setShowModal(true);
  };

  const handleUpdateContact = (updatedContact) => {
    updateContact(updatedContact);
    closeModal();
  };

  const handleDeleteContact = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact?",
    );

    if (!confirmed) return;

    deleteContact(id);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingContact(null);
  };

  const openAddModal = () => {
    setEditingContact(null);
    setShowModal(true);
  };

  const filteredContacts = [...contacts]
    .filter((contact) => {
      const normalizedSearch = searchTerm
        .trim()
        .toLowerCase();

      const matchesSearch =
        contact.name
          .toLowerCase()
          .includes(normalizedSearch) ||
        contact.company
          .toLowerCase()
          .includes(normalizedSearch) ||
        contact.email
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "All" ||
        contact.status === statusFilter;

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
          return String(b.id).localeCompare(
            String(a.id),
          );
      }
    });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Contacts
          </h1>

          <p className="text-gray-500 dark:text-slate-400">
            Manage your contacts and clients.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() =>
              exportContactsToCSV(contacts)
            }
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-slate-700 transition hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <FaFileExport />
            Export
          </button>

          <button
            type="button"
            onClick={openAddModal}
            className="rounded-lg bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-700"
          >
            + Add Contact
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-900"
        >
          <option value="All">All statuses</option>
          <option value="Lead">Lead</option>
          <option value="Client">Client</option>
        </select>

        <select
          value={sortBy}
          onChange={(event) =>
            setSortBy(event.target.value)
          }
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-900"
        >
          <option value="newest">Newest</option>
          <option value="name-asc">
            Name (A–Z)
          </option>
          <option value="name-desc">
            Name (Z–A)
          </option>
          <option value="company">
            Company
          </option>
        </select>
      </div>

      <ContactList
        contacts={filteredContacts}
        onEdit={handleEditContact}
        onDelete={handleDeleteContact}
      />

      {showModal && (
        <ContactForm
          onClose={closeModal}
          editingContact={editingContact}
          onSave={
            editingContact
              ? handleUpdateContact
              : handleAddContact
          }
        />
      )}
    </div>
  );
}

export default Contacts;