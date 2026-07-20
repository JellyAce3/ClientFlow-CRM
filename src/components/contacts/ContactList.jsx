import ContactRow from "./ContactRow";

function ContactList({
  contacts,
  onEdit,
  onDelete,
}) {
  if (contacts.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-10 text-center shadow dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          No contacts found
        </h2>

        <p className="mt-1 text-gray-500 dark:text-slate-400">
          Add a contact or change your search
          filters.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow dark:border-slate-700 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gray-50 dark:bg-slate-800">
            <tr className="border-b border-gray-200 dark:border-slate-700">
              <th className="p-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
                Contact
              </th>

              <th className="text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
                Company
              </th>

              <th className="text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
                Email
              </th>

              <th className="text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
                Status
              </th>

              <th className="text-center text-sm font-semibold text-slate-700 dark:text-slate-200">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
            {contacts.map((contact) => (
              <ContactRow
                key={contact.id}
                contact={contact}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactList;