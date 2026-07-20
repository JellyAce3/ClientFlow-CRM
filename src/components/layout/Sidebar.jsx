import {
  FaAddressBook,
  FaChartPie,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
      isActive
        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
        : "text-slate-600 hover:bg-purple-50 hover:text-purple-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-purple-300"
    }`;

  return (
    <aside className="hidden w-64 flex-col border-r border-purple-100 bg-white p-5 dark:border-slate-700 dark:bg-slate-900 md:flex">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-xl font-bold text-white shadow-lg shadow-purple-200 dark:shadow-none">
            C
          </div>

          <div>
            <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
              ClientFlow
            </h1>

            <p className="text-sm font-medium text-gray-500 dark:text-slate-400">
              Your friendly CRM
            </p>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink
          to="/"
          end
          className={linkClasses}
        >
          <FaChartPie />
          Dashboard
        </NavLink>

        <NavLink
          to="/contacts"
          className={linkClasses}
        >
          <FaAddressBook />
          Contacts
        </NavLink>
      </nav>

      <div className="mt-auto rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-4 dark:from-slate-800 dark:to-slate-800">
        <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">
          ClientFlow CRM
        </p>

        <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">
          Keep your connections flowing ✨
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;