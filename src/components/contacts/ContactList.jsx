import ContactRow from "./ContactRow";


function ContactList({ contacts, onEdit, onDelete}) {
  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-4">Contact</th>
            <th className="text-left">Company</th>
            <th className="text-left">Email</th>
            <th className="text-left">Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
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
  );
}

export default ContactList;