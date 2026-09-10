import React, { useState } from 'react';

function Feedback() {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${name} for your ${rating}-star feedback! ⭐`);
    setName('');
    setReview('');
    setRating(5);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Customer Feedback 💬</h1>
        <p style={styles.subtitle}>Tell us about your dining experience with Zaika Express!</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Rating</label>
            <div style={styles.starContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  style={{
                    fontSize: '28px',
                    cursor: 'pointer',
                    color: star <= rating ? '#FFB703' : '#CBD5E1',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Your Review</label>
            <textarea
              rows="4"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              style={styles.textarea}
            />
          </div>

          <button type="submit" style={styles.submitBtn}>Submit Feedback</button>
        </form>
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
    maxWidth: '450px',
    textAlign: 'center',
  },
  title: { margin: '0 0 8px 0', fontSize: '24px', color: '#2B0910' },
  subtitle: { margin: '0 0 25px 0', fontSize: '14px', color: '#665A5C' },
  form: { display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: 'bold', color: '#2B0910' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none' },
  starContainer: { display: 'flex', gap: '8px' },
  textarea: { padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', resize: 'vertical' },
  submitBtn: {
    backgroundColor: '#E5293E',
    color: '#FFF',
    border: 'none',
    padding: '12px',
    borderRadius: '25px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Feedback;