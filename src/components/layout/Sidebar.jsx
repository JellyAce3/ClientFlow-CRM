import { NavLink } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-indigo-600">
          ClientFlow CRM
        </h1>
      </div>

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