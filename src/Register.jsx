import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* ---------- internal CSS (JS‑in‑JS) ---------- */
const styles = {
  card: {
    maxWidth: "420px",
    margin: "48px auto",
    padding: "32px",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    fontFamily: "system-ui, sans-serif",
  },
  heading: {
    margin: "0 0 24px",
    textAlign: "center",
    fontSize: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    padding: "12px 16px",
    border: "1px solid #cbd5e0",
    borderRadius: "8px",
    fontSize: "1rem",
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",       // blue‑600
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },
  message: {
    marginTop: "18px",
    textAlign: "center",
    fontWeight: 500,
  },
};
/* -------------------------------------------- */

const Register = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/users/register",
        formData
      );
      setMessage(res.data.message);

      // ✅ Navigate to login page after short delay (optional)
      setTimeout(() => {
        navigate("/LoginPage");
      }, 1000);

    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>Home Page – Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          style={styles.input}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={styles.input}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={styles.input}
          onChange={handleChange}
          required
        />
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default Register;
