import React, { useState } from 'react';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      alert(`Account created successfully for ${formData.name}!`);
    } else {
      alert(`Welcome back, ${formData.email}!`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
        <p style={styles.subtitle}>
          {isSignUp ? 'Sign up to start ordering tasty meal' : 'Log in to your account'}
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {isSignUp && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.submitBtn}>
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <div style={styles.toggleSection}>
          <span>
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          </span>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            style={styles.toggleBtn}
          >
            {isSignUp ? 'Log In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '20px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: '35px 30px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '24px',
    color: '#2B0910',
    textAlign: 'center',
  },
  subtitle: {
    margin: '0 0 25px 0',
    fontSize: '14px',
    color: '#665A5C',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    textAlign: 'left',
  },
  label: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#2B0910',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #E2E8F0',
    fontSize: '14px',
    outline: 'none',
  },
  submitBtn: {
    backgroundColor: '#E5293E',
    color: '#FFFFFF',
    border: 'none',
    padding: '12px',
    borderRadius: '25px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
  toggleSection: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#665A5C',
  },
  toggleBtn: {
    background: 'none',
    border: 'none',
    color: '#E5293E',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Login;