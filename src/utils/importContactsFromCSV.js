function parseCSVLine(line) {
  const values = [];
  let currentValue = "";
  let insideQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    const nextCharacter = line[index + 1];

    if (character === '"' && insideQuotes && nextCharacter === '"') {
      currentValue += '"';
      index += 1;
    } else if (character === '"') {
      insideQuotes = !insideQuotes;
    } else if (character === "," && !insideQuotes) {
      values.push(currentValue.trim());
      currentValue = "";
    } else {
      currentValue += character;
    }
  }

  values.push(currentValue.trim());

  return values;
}

export function importContactsFromCSV(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("Please select a CSV file."));
      return;
    }

    if (!file.name.toLowerCase().endsWith(".csv")) {
      reject(new Error("Only CSV files are allowed."));
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const csvText = String(event.target.result)
          .replace(/^\uFEFF/, "")
          .trim();

        if (!csvText) {
          throw new Error("The selected CSV file is empty.");
        }

        const lines = csvText
          .split(/\r?\n/)
          .filter((line) => line.trim());

        const headers = parseCSVLine(lines[0]).map((header) =>
          header.toLowerCase().trim(),
        );

        const requiredHeaders = [
          "name",
          "company",
          "email",
          "phone",
          "status",
        ];

        const missingHeaders = requiredHeaders.filter(
          (header) => !headers.includes(header),
        );

        if (missingHeaders.length > 0) {
          throw new Error(
            `Missing columns: ${missingHeaders.join(", ")}`,
          );
        }

        const contacts = lines.slice(1).map((line, rowIndex) => {
          const values = parseCSVLine(line);

          const row = Object.fromEntries(
            headers.map((header, index) => [
              header,
              values[index] ?? "",
            ]),
          );

          const name = row.name.trim();
          const company = row.company.trim();
          const email = row.email.trim();
          const phone = row.phone.trim();
          const normalizedStatus = row.status.trim().toLowerCase();

          if (!name || !company || !email || !phone) {
            throw new Error(
              `Missing required information on row ${rowIndex + 2}.`,
            );
          }

          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error(
              `Invalid email on row ${rowIndex + 2}.`,
            );
          }

          if (
            normalizedStatus !== "lead" &&
            normalizedStatus !== "client"
          ) {
            throw new Error(
              `Status must be Lead or Client on row ${rowIndex + 2}.`,
            );
          }

          return {
            name,
            company,
            email,
            phone,
            status:
              normalizedStatus === "lead"
                ? "Lead"
                : "Client",
            lastContact:
              row["last contact"]?.trim() ||
              row.lastcontact?.trim() ||
              "Today",
          };
        });

        if (contacts.length === 0) {
          throw new Error(
            "The CSV file does not contain any contacts.",
          );
        }

        resolve(contacts);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error("Unable to read the selected file."));
    };

    reader.readAsText(file);
  });
}