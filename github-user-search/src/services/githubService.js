import axios from "axios";

// 🔹 Basic user fetch (Task 1)
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// 🔹 ADVANCED SEARCH (Task 2)
export async function fetchAdvancedUsers({ username, location, minRepos }) {
  try {
    // Build the query string (GitHub style)
    let query = "";

    if (username) query += `${username}+`;
    if (location) query += `location:${location}+`;
    if (minRepos) query += `repos:>${minRepos}`;

    // Remove trailing +
    query = query.replace(/\+$/, "");

    const url = `https://api.github.com/search/users?q=${query}`;

    const response = await axios.get(url);
    return response.data.items; // GitHub returns results in "items"
  } catch (error) {
    throw error;
  }
}
