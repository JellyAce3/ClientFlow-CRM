export function exportContactsToCSV(contacts) {
  if (!Array.isArray(contacts) || contacts.length === 0) {
    alert("There are no contacts to export.");
    return;
  }

  const headers = [
    "ID",
    "Name",
    "Company",
    "Email",
    "Phone",
    "Status",
    "Last Contact",
  ];

  const escapeValue = (value) => {
    const text = String(value ?? "").replace(/"/g, '""');
    return `"${text}"`;
  };

  const rows = contacts.map((contact) => [
    contact.id,
    contact.name,
    contact.company,
    contact.email,
    contact.phone,
    contact.status,
    contact.lastContact,
  ]);

  const csvContent = [
    headers.map(escapeValue).join(","),
    ...rows.map((row) =>
      row.map(escapeValue).join(","),
    ),
  ].join("\r\n");

  const blob = new Blob(
    ["\uFEFF", csvContent],
    { type: "text/csv;charset=utf-8" },
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "clientflow-contacts.csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}