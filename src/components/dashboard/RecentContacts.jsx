function RecentContacts({ contacts }) {
  const recentContacts = contacts.slice(0, 5);

  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-gray-200 p-6 dark:border-slate-700">
        <h2 className="text-xl font-semibold dark:text-white">
          Recent Contacts
        </h2>
      </div>

      {recentContacts.length === 0 ? (
        <div className="p-8 text-center text-gray-500 dark:text-slate-400">
          No contacts available.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px]">
            <thead>
              <tr className="border-b border-gray-200 text-left text-gray-500 dark:border-slate-700 dark:text-slate-400">
                <th className="p-4">Name</th>
                <th>Company</th>
                <th>Status</th>
                <th>Last Contact</th>
              </tr>
            </thead>

            <tbody>
              {recentContacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="border-b border-gray-200 hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <td className="p-4 font-medium dark:text-white">
                    {contact.name}
                  </td>

                  <td className="dark:text-slate-300">
                    {contact.company}
                  </td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-sm text-white ${
                        contact.status === "Lead"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </td>

                  <td className="dark:text-slate-300">
                    {contact.lastContact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RecentContacts;