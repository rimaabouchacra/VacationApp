//Linking doesn't work i made the table static
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const VacationTable = () => {
//   const [vacations, setVacations] = useState([]);

//   useEffect(() => {
//     fetchVacations();
//   }, []);

//   const fetchVacations = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/swagger/api/Vacation');
//       setVacations(response.data);
//     } catch (error) {
//       console.error('Error fetching vacations:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Vacation Table</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Description</th>
//             <th>StartDate</th>
//             <th>EndDate</th>
//             <th>Duration</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vacations.map((vacation) => (
//             <tr key={vacation.Id}>
//               <td>{vacation.Id}</td>
//               <td>{vacation.Description}</td>
//               <td>{vacation.StartDate}</td>
//               <td>{vacation.EndDate}</td>
//               <td>{vacation.Duration}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default VacationTable;

import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const VacationTable = () => {
  const vacations = [
    {
      id: 1,
      description: 'Annual Leave',
      startDate: '2023-06-01',
      endDate: '2023-06-05',
      duration: 5
    },
    {
      id: 2,
      description: 'Sick Leave',
      startDate: '2023-06-10',
      endDate: '2023-06-12',
      duration: 3
    },
    {
      id: 3,
      description: 'Family Vacation',
      startDate: '2023-07-15',
      endDate: '2023-07-22',
      duration: 8
    },
    {
      id: 4,
      description: 'Business Trip',
      startDate: '2023-08-05',
      endDate: '2023-08-09',
      duration: 5
    },
    {
      id: 5,
      description: 'Weekend Trip',
      startDate: '2023-09-02',
      endDate: '2023-09-04',
      duration: 3
    }
    
  ];

  const navigate = useNavigate();
  const handleAddVacation = () => {
    navigate('./addvacation');
  };
  const handleEditVacation = () => {
    navigate('./editvacation');
  };
  return (
    <div>
      <div className='add-vacation'>
        <button onClick={handleAddVacation} className='all-btn'>Add Vacation</button>
        <button onClick={handleEditVacation} className='all-btn'>Edit Vacation</button>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VacationTable;