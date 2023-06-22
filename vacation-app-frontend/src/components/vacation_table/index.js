import React from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
const VacationTable = () => {
 const vacations = [
    {
      id: 1,
      description: 'Annual Leave',
      startDate: '2023-06-01',
      endDate: '2023-06-05',
      duration: 5,
      status: 'Approved'
    },
    {
      id: 2,
      description: 'Sick Leave',
      startDate: '2023-06-10',
      endDate: '2023-06-12',
      duration: 3,
      status: 'Pending'
    },
   
  ];

 const navigate = useNavigate(); 
 const handleAddVacation=()=>{
    navigate('./addvacation')
 }
return (
    <div>
    
      <div className='add-vacation'>
        <button onClick={handleAddVacation} className='all-btn'>add vacation</button>
      </div>
      
      <h1 className='vacation-title'>Vacation List</h1>
      <div className="vacation-table-container">
        <table className="vacation-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {vacations.map((vacation) => (
            <tr key={vacation.id}>
              <td>{vacation.id}</td>
              <td>{vacation.description}</td>
              <td>{vacation.startDate}</td>
              <td>{vacation.endDate}</td>
              <td>{vacation.duration}</td>
              <td>{vacation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </div>
      
    </div>
  );
};

export default VacationTable;
