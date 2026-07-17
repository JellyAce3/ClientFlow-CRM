import { FaSearch } from "react-icons/fa";

function SearchBar({searchTerm, setSearchTerm}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow border">
      <div className="relative">
  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

  <input
    type="text"
    placeholder="Search contacts..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
</div>
    </div>
  );
}

export default SearchBar;