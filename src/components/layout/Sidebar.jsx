import { NavLink } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg">
     <header className="h-16 bg-white shadow flex items-center px-8">
  <h1 className="text-3xl font-extrabold tracking-tight">
    <span className="text-indigo-600">Client</span>
    <span className="text-slate-900">Flow</span>
    <span className="text-gray-400 ml-2 text-base font-semibold uppercase tracking-widest">
      CRM
    </span>
  </h1>
</header>

      <nav className="p-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-100"
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/contacts"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-100 mt-2"
        >
          <FaUsers />
          Contacts
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;