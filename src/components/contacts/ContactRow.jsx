import { FaEdit, FaTrash } from "react-icons/fa";

function ContactRow({ contact, onEdit, onDelete }) {
  const initials = contact.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <tr className="border-t border-gray-200 transition hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-800">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
            {initials}
          </div>

          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              {contact.name}
            </p>

            <p className="text-sm text-gray-500 dark:text-slate-400">
              {contact.phone}
            </p>
          </div>
        </div>
      </td>

      <td className="text-slate-700 dark:text-slate-300">
        {contact.company}
      </td>

      <td className="text-slate-700 dark:text-slate-300">
        {contact.email}
      </td>

      <td>
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium text-white ${
            contact.status === "Lead"
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          {contact.status}
        </span>
      </td>

      <td>
        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={() => onEdit(contact)}
            aria-label={`Edit ${contact.name}`}
            title="Edit contact"
            className="rounded-md p-2 text-blue-600 transition hover:bg-blue-50 hover:text-blue-800 dark:text-blue-400 dark:hover:bg-slate-700 dark:hover:text-blue-300"
          >
            <FaEdit />
          </button>

          <button
            type="button"
            onClick={() => onDelete(contact.id)}
            aria-label={`Delete ${contact.name}`}
            title="Delete contact"
            className="rounded-md p-2 text-red-600 transition hover:bg-red-50 hover:text-red-800 dark:text-red-400 dark:hover:bg-slate-700 dark:hover:text-red-300"
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ContactRow;