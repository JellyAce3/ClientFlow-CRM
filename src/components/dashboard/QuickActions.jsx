import { FaPlus, FaFileImport, FaFileExport } from "react-icons/fa";

function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-md border mt-8">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">
          Quick Actions
        </h2>
      </div>

      <div className="p-6 flex flex-wrap gap-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 transition">
          <FaPlus />
          Add Contact
        </button>

        <button className="border px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
          <FaFileImport />
          Import
        </button>

        <button className="border px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
          <FaFileExport />
          Export
        </button>
      </div>
    </div>
  );
}

export default QuickActions;