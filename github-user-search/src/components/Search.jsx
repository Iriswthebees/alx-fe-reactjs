import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      // If extra filters are empty → basic search
      if (!location && !minRepos) {
        const user = await fetchUserData(username);
        setResults([user]);
      } else {
        // Advanced search
        const users = await fetchAdvancedUsers({
          username,
          location,
          minRepos,
        });

        if (users.length === 0) {
          setError("Looks like we cant find the user");
        } else {
          setResults(users);
        }
      }
    } catch {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">
        GitHub User Search
      </h1>

      {/* Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Search username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Filter by location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Minimum repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-600 mt-4">Loading...</p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center text-red-500 font-semibold mt-4">
          {error}
        </p>
      )}

      {/* Results */}
      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 border rounded shadow-sm"
          >
            <img
              src={user.avatar_url}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">
                {user.login || user.name}
              </h2>

              {/* Display location if available */}
              {user.location && (
                <p className="text-sm text-gray-600">
                  📍 {user.location}
                </p>
              )}

              {/* Display repos count if available */}
              {user.public_repos !== undefined && (
                <p className="text-sm text-gray-600">
                  📦 Repos: {user.public_repos}
                </p>
              )}

              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-600 underline text-sm"
              >
                View Profile →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
