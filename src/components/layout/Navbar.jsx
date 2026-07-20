import { FaMoon, FaSun } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();

  const pageTitle =
    location.pathname === "/contacts"
      ? "Contacts"
      : "Dashboard";

  return (
    <header className="flex h-16 items-center justify-between bg-white px-8 shadow dark:bg-slate-900 dark:text-white">
      <h2 className="text-xl font-semibold">
        {pageTitle}
      </h2>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="rounded-lg border p-3 hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
          J
        </div>
      </div>
    </header>
  );
}

export default Navbar;