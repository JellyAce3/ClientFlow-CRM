import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaFileImport,
  FaFileExport,
} from "react-icons/fa";

import { useContacts } from "../context/ContactContext";
import { exportContactsToCSV } from "../../utils/exportContactsToCSV";
import { importContactsFromCSV } from "../../utils/importContactsFromCSV";

function QuickActions() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const {
    contacts,
    importContacts,
  } = useContacts();

  const handleExport = () => {
    exportContactsToCSV(contacts);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImport = async (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      const importedContacts =
        await importContactsFromCSV(file);

      importContacts(importedContacts);

      alert(
        `${importedContacts.length} contact(s) imported successfully.`,
      );
    } catch (error) {
      alert(error.message);
    } finally {
      event.target.value = "";
    }
  };

  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-gray-200 p-6 dark:border-slate-700">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Quick Actions
        </h2>
      </div>

      <div className="flex flex-wrap gap-4 p-6">
        <button
          type="button"
          onClick={() => navigate("/contacts")}
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-700"
        >
          <FaPlus />
          Add Contact
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,text/csv"
          onChange={handleImport}
          className="hidden"
        />

        <button
          type="button"
          onClick={handleImportClick}
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-slate-700 transition hover:bg-gray-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <FaFileImport />
          Import
        </button>

        <button
          type="button"
          onClick={handleExport}
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-slate-700 transition hover:bg-gray-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <FaFileExport />
          Export
        </button>
      </div>
    </div>
  );
}

export default QuickActions;