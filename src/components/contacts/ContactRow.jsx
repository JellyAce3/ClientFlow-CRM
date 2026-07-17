import { FaEdit, FaTrash } from "react-icons/fa";

function ContactRow({ contact, onEdit }) {
  const initials = contact.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <tr className="border-t hover:bg-gray-50 transition">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
            {initials}
          </div>

          <div>
            <p className="font-semibold">{contact.name}</p>
            <p className="text-sm text-gray-500">{contact.phone}</p>
          </div>
        </div>
      </td>

      <td>{contact.company}</td>

      <td>{contact.email}</td>

      <td>
        <span
          className={`px-3 py-1 rounded-full text-sm text-white ${
            contact.status === "Lead" ? "bg-yellow-500" : "bg-green-500"
          }`}
        >
          {contact.status}
        </span>
      </td>

      <td>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => onEdit(contact)}
            className="text-blue-600 hover:text-blue-800"
          >
            <FaEdit />
          </button>

          <button className="text-red-600 hover:text-red-800">
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ContactRow;
