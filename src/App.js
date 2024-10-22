import React, { useState } from 'react';
import './App.css';

const Modal = ({ show, onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState({}); // To store validation errors

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Username validation: should not be empty and must contain only letters
    const usernamePattern = /^[A-Za-z]+$/;
    if (!usernamePattern.test(username)) {
      formErrors.username = 'Invalid username. Username should contain only letters.';
    }

    // Email validation: standard email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Invalid email. Please check your email address.');
      formErrors.email = 'Invalid email. Please check your email address.';
    }

    // Phone number validation: should be exactly 10 digits
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      formErrors.phone = 'Invalid phone number. Please enter a 10-digit phone number.';
    }

    // Date of birth validation: should not be in the future
    const today = new Date();
    const enteredDob = new Date(dob);
    if (enteredDob > today) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      formErrors.dob = 'Invalid date of birth. Date of birth cannot be in the future.';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Reset fields after submission
      setUsername('');
      setEmail('');
      setPhone('');
      setDob('');

      // Close modal upon successful submission
      onClose();
    }
  };

  // Close the modal when clicking outside of it
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username" // Added id for username
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email" // Added id for email
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone" // Added id for phone
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob" // Added id for date of birth
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
            {errors.dob && <div className="error">{errors.dob}</div>}
          </div>
          <button type="submit" className="submit-button">Submit</button> {/* Changed className to submit-button */}
        </form>
      </div>
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal} className="open-form-btn">Open Form</button>

      <Modal show={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
