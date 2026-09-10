import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.subheading}>Have questions or want to make a reservation? Reach out to us!</p>

      <div style={styles.contentGrid}>
        {/* Contact Info Card */}
        <div style={styles.infoCard}>
          <h2 style={styles.cardTitle}>Get In Touch</h2>
          <p style={styles.infoText}>📍 <strong>Address:</strong> 123 Food Street, Zaika Hub, New Delhi</p>
          <p style={styles.infoText}>📞 <strong>Phone:</strong> +91 98765 43210</p>
          <p style={styles.infoText}>✉️ <strong>Email:</strong> support@zaikaexpress.com</p>
          <p style={styles.infoText}>⏰ <strong>Opening Hours:</strong> Mon - Sun: 10:00 AM - 11:00 PM</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={styles.formCard}>
          <h2 style={styles.cardTitle}>Send a Message</h2>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Message</label>
            <textarea
              rows="4"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              style={styles.textarea}
            />
          </div>

          <button type="submit" style={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '0 20px',
    textAlign: 'center',
  },
  heading: { color: '#2B0910', fontSize: '32px', marginBottom: '8px' },
  subheading: { color: '#665A5C', fontSize: '15px', marginBottom: '30px' },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    textAlign: 'left',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  cardTitle: { color: '#2B0910', marginTop: 0, marginBottom: '20px', fontSize: '20px' },
  infoText: { color: '#4A4A4A', fontSize: '14px', marginBottom: '15px', lineHeight: '1.5' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: 'bold', color: '#2B0910' },
  input: { padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none' },
  textarea: { padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', resize: 'vertical' },
  submitBtn: {
    backgroundColor: '#E5293E',
    color: '#FFF',
    border: 'none',
    padding: '12px',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Contact;