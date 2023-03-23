import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/?q=${search}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          className="px-4 w-full py-2 rounded-xl outline-none border"
          type="search"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
