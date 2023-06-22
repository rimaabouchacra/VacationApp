import React, { useState, useEffect } from 'react';
import './index.css';
import '../signup/index.css';

const AddVacation = ({ onAddVacation }) => {
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [duration, setDuration] = useState('');
  const [isStartDateValid, setIsStartDateValid] = useState(true);
  const [isEndDateValid, setIsEndDateValid] = useState(true);

  useEffect(() => {
    calculateDuration();
    validateStartDate();
    validateEndDate();
  }, [startDate, endDate]);

  const calculateDuration = () => {
    if (startDate && endDate) {
      const duration = new Date(endDate) - new Date(startDate);
      const durationInDays = Math.floor(duration / (1000 * 60 * 60 * 24));
      setDuration(durationInDays.toString());
    } else {
      setDuration('');
    }
  };

  const validateStartDate = () => {
    if (startDate) {
      const isStartDateValid = new Date(startDate) >= new Date();
      setIsStartDateValid(isStartDateValid);
    } else {
      setIsStartDateValid(true);
    }
  };

  const validateEndDate = () => {
    if (startDate && endDate) {
      const isEndDateValid = new Date(endDate) > new Date(startDate);
      setIsEndDateValid(isEndDateValid);
    } else {
      setIsEndDateValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new vacation (this data should be retrieved from the database but as the backend is not working, this data is static for now )
    const newVacation = {
      description,
      startDate,
      endDate,
      duration,
    };

    onAddVacation(newVacation);
  };

  return (
    <div>
      <div className="signup-form">
        <h1 className="titre">New Vacation</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="signup-container">
            <label className="label date" htmlFor="description">
              Description:
            </label>
            <textarea
              className="input-field textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <br />

          <div className="signup-container">
            <label className="label date" htmlFor="startDate">
              Start Date:
            </label>
            <input
              className="input-field"
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
            {!isStartDateValid && (
              <p className="error-message">Start Date must be on or after today</p>
            )}
          </div>
          <br />

          <div className="signup-container">
            <label className="label date" htmlFor="endDate">
              End Date:
            </label>
            <input
              className="input-field"
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
            {!isEndDateValid && (
              <p className="error-message">End Date must be after Start Date</p>
            )}
          </div>
          <br />

          <div className="signup-container">
            <label className="label date" htmlFor="duration">
              Duration (Days):
            </label>
            <input className="input-field" type="text" value={duration} readOnly />
          </div>
          <br />

          <div className="btn">
            <button className="all-btn signup-btn" type="submit">
              Add
            </button>
          </div>
          <br />
        </form>
      </div>
      <br />
    </div>
  );
};

export default AddVacation;
