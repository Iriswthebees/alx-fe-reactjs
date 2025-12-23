import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Mock API call
  const mockRegisterAPI = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "User registered successfully" });
      }, 1000);
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { username, email, password } = formData;

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await mockRegisterAPI();
      setSuccess(response.message);
      setFormData({ username: "", email: "", password: "" });
    } catch (err) {
      setError("Registration failed.");
    }
  };

  return (
    <div>
      <h2>User Registration (Controlled)</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default RegistrationForm;
