import React, { useState } from 'react';
import './App.css';

const Modal = ({ show, onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Username validation: should not be empty and must contain only letters
    const usernamePattern = /^[A-Za-z]+$/;
    if (!usernamePattern.test(username)) {
      alert('Invalid username. Username should contain only letters.');
      return; // Stop submission if invalid
    }

    // Email validation: standard email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Invalid email address. Please enter a valid email.');
      return; // Stop submission if invalid
    }

    // Phone number validation: should be exactly 10 digits
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return; // Stop submission if invalid
    }

    // Date of birth validation: should not be in the future
    const today = new Date();
    const enteredDob = new Date(dob);
    if (enteredDob > today) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      return; // Stop submission if invalid
    }

    // Reset fields after submission without showing a success alert
    setUsername('');
    setEmail('');
    setPhone('');
    setDob('');

    // Modal will remain open after submission for continued interaction
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
            <label>Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
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

