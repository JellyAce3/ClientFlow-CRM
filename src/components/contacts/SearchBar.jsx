import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="bg-white p-4 rounded-xl shadow border">
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
}

export default SearchBar;