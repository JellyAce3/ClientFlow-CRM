# ClientFlow CRM

A modern Contact Relationship Management (CRM) application built with React and Vite.

## ✨ Features

- 📊 Dashboard Analytics
- 👥 Contact Management (CRUD)
- 🔍 Search Contacts
- 🎯 Filter by Status
- ↕️ Sorting
- 📁 CSV Import
- 📤 CSV Export
- 🌙 Dark Mode
- 📱 Responsive Design
- 💾 Local Storage Persistence

## 🛠 Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- React Router
- Recharts
- React Icons
- Local Storage

## 📂 Project Structure

```text
ClientFlow-CRM/
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── contacts/
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ContactList.jsx
│   │   │   ├── ContactRow.jsx
│   │   │   └── SearchBar.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── ContactContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── charts/
│   │   │   │   ├── CompanyChart.jsx
│   │   │   │   └── ContactStatusChart.jsx
│   │   │   │
│   │   │   ├── QuickActions.jsx
│   │   │   ├── RecentContacts.jsx
│   │   │   └── StatsCard.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   └── ui/
│   │
│   ├── pages/
│   │   ├── Contacts.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── utils/
│   │   ├── exportContactsToCSV.js
│   │   └── importContactsFromCSV.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🚀 Installation

```bash
npm install
npm run dev
```

## 📸 Screenshots

(Add screenshots here)

## 📄 License

MIT
