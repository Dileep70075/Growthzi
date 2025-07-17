import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/* ---------- Internal CSS ---------- */
const styles = {
  card: {
    maxWidth: '420px',
    margin: '48px auto',
    padding: '32px',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    fontFamily: 'system-ui, sans-serif',
  },
  heading: {
    marginBottom: '24px',
    textAlign: 'center',
    fontSize: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  input: {
    padding: '12px 16px',
    border: '1px solid #cbd5e0',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  button: {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    background: '#10b981', // green‑500
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  message: {
    marginTop: '18px',
    textAlign: 'center',
    fontWeight: 500,
    color: '#ef4444', // red‑500
  },
};
/* ---------------------------------- */

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/users/loginUser', formData);

      // ✅ Save token and user data in localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      setMessage('Login successful');
      navigate('/');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
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
          Login
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default LoginPage;
















// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';   // ✅ NEW

// /* ---------- Internal CSS ---------- */
// const styles = {
//   card: {
//     maxWidth: '420px',
//     margin: '48px auto',
//     padding: '32px',
//     border: '1px solid #e2e8f0',
//     borderRadius: '12px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
//     fontFamily: 'system-ui, sans-serif',
//   },
//   heading: {
//     marginBottom: '24px',
//     textAlign: 'center',
//     fontSize: '1.5rem',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '14px',
//   },
//   input: {
//     padding: '12px 16px',
//     border: '1px solid #cbd5e0',
//     borderRadius: '8px',
//     fontSize: '1rem',
//   },
//   button: {
//     padding: '12px',
//     border: 'none',
//     borderRadius: '8px',
//     background: '#10b981', // green‑500
//     color: '#fff',
//     fontSize: '1rem',
//     cursor: 'pointer',
//   },
//   message: {
//     marginTop: '18px',
//     textAlign: 'center',
//     fontWeight: 500,
//     color: '#ef4444', // red‑500
//   },
// };
// /* ---------------------------------- */

// const LoginPage = () => {
//   const navigate = useNavigate();                // ✅ NEW
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) =>
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         'http://localhost:3001/users/loginUser',
//         formData
//       );

//       // Optionally persist the JWT or session token here
//       // localStorage.setItem('token', res.data.token);

//       setMessage(res.data.message || 'Login successful');

//       // ✅ Route to Home immediately (or after a brief delay if
//       //    you want to show the success message for a moment).
//       navigate('/Home');   // or navigate('/home')
//     } catch (err) {
//       setMessage(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div style={styles.card}>
//       <h2 style={styles.heading}>Login</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           style={styles.input}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           style={styles.input}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//       </form>
//       {message && <p style={styles.message}>{message}</p>}
//     </div>
//   );
// };

// export default LoginPage;
