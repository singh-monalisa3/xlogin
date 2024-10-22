import React, { useState } from 'react';
import './App.css';

const Modal = ({ show }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // No custom validation needed since `required` attribute is being used.
    alert("Form submitted successfully!");
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input 
              type="text" 
              placeholder="Enter your username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required  // Required field
            />
          </div>
          <div className="form-group">
            <label>Email Address:</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required  // Required field
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input 
              type="tel" 
              placeholder="Enter your phone number" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required  // Required field
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input 
              type="date" 
              value={dob} 
              onChange={(e) => setDob(e.target.value)} 
              required  // Required field
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

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal} className="open-form-btn">Open Form</button>

      <Modal show={isModalOpen} />
    </div>
  );
}

export default App;
