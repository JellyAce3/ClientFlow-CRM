import { useEffect, useState } from "react";

const emptyForm = {
  id: null,
  name: "",
  company: "",
  email: "",
  phone: "",
  status: "Lead",
  lastContact: "Today",
};

function ContactForm({
  onClose,
  onSave,
  editingContact,
}) {
  const [formData, setFormData] =
    useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingContact) {
      setFormData({ ...editingContact });
    } else {
      setFormData(emptyForm);
    }

    setErrors({});
  }, [editingContact]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.company.trim()) {
      newErrors.company =
        "Company is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email,
      )
    ) {
      newErrors.email =
        "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "Phone number is required.";
    } else if (
      !/^[0-9+\-\s()]{7,20}$/.test(
        formData.phone,
      )
    ) {
      newErrors.phone =
        "Enter a valid phone number.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    onSave({
      ...formData,
      name: formData.name.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
    });
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white p-3 text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-indigo-900";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900"
      >
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          {editingContact
            ? "Edit Contact"
            : "Add New Contact"}
        </h2>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={inputClass}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className={inputClass}
            />

            {errors.company && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.company}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={inputClass}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={inputClass}
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.phone}
              </p>
            )}
          </div>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="Lead">Lead</option>
            <option value="Client">
              Client
            </option>
          </select>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-slate-700 transition hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
          >
            {editingContact
              ? "Update Contact"
              : "Save Contact"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;