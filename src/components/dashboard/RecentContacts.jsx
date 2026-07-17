import contacts from "../../data/contacts";

function RecentContacts() {
  return (
    <div className="bg-white rounded-xl shadow-md border mt-8">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">
          Recent Contacts
        </h2>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="p-4">Name</th>
            <th>Company</th>
            <th>Status</th>
            <th>Last Contact</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr
              key={contact.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-4 font-medium">
                {contact.name}
              </td>

              <td>{contact.company}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm text-white ${
                    contact.status === "Lead"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {contact.status}
                </span>
              </td>

              <td>{contact.lastContact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentContacts;