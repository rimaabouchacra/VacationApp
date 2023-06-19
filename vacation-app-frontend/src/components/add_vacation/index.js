import React, { useState } from 'react';

const AddVacation = ({ onAddVacation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate duration based on fromDate and toDate
    const duration = calculateDuration(fromDate, toDate);

    // Create a new vacation object
    const newVacation = {
      description,
      fromDate,
      toDate,
      duration,
    };

    // Pass the new vacation to the parent component
    onAddVacation(newVacation);

    // Close the modal and reset form fields
    closeModal();
  };

  const calculateDuration = (fromDate, toDate) => {
    // Calculate duration logic goes here
    // You can use any date library or JavaScript's built-in Date object methods to calculate the duration
    // Here's a basic example using milliseconds:
    const durationInMs = new Date(toDate) - new Date(fromDate);
    const durationInDays = Math.floor(durationInMs / (1000 * 60 * 60 * 24));
    return durationInDays;
  };

  return (
    <div>
      <button onClick={openModal}>Add Vacation</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Vacation</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Description:</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>From Date:</label>
                <input
                  type="datetime-local"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>To Date:</label>
                <input
                  type="datetime-local"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="submit">Add</button>
                <button type="button" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddVacation;
