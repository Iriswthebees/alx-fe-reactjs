import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", textAlign: "center" }}>
      <h2>GitHub User Search</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Success State */}
      {userData && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #eee",
            borderRadius: "8px",
          }}
        >
          <img
            src={userData.avatar_url}
            alt="avatar"
            width="120"
            style={{ borderRadius: "50%" }}
          />
          <h3>{userData.name || userData.login}</h3>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}
