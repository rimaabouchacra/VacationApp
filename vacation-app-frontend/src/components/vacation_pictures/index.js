import React, { useState } from 'react';
import './index.css'
import '../index.css'
import image1 from '../../images/marmaris.png'
import image2 from '../../images/maldives.png'
import image3 from '../../images/istanbul.png'
import image4 from '../../images/holland.png'
import image5 from '../../images/france.png'
import image6 from '../../images/egypt.png'
import image7 from '../../images/cyprus.png'
import image8 from '../../images/latvia.png'
import image9 from '../../images/santorini.png'

const VacationPictures = () => {
  const picturesPerPage = 3; // Number of pictures to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Sample static data for vacation pictures
  const vacationPictures = [
    { id: 1, image: image1 },
    { id: 2, image: image2},
    { id: 3, image: image3},
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6},
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
  ];

  // Calculate the index range of pictures to display for the current page
  const indexOfLastPicture = currentPage * picturesPerPage;
  const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
  const currentPictures = vacationPictures.slice(indexOfFirstPicture, indexOfLastPicture);

const goToPreviousPage = () => {
  if (currentPage > 1) {
    setCurrentPage((prevPage) => prevPage - 1);
  }
};

const goToNextPage = () => {
  if (indexOfLastPicture < vacationPictures.length) {
    setCurrentPage((prevPage) => prevPage + 1);
  }
};


  return (
    <>

      <div>
        <div className="picture-grid">
        {currentPictures.map((picture) => (
          <div key={picture.id} className="vacation-picture-container">
            <img src={picture.image} alt={`Vacations Pictures ${picture.id}`} className="vacation-picture" />
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={goToPreviousPage}
          className="all-btn"
        >
          Previous
        </button>
        <button
          disabled={indexOfLastPicture >= vacationPictures.length}
          onClick={goToNextPage}
          className="all-btn"
        >
          Next
        </button>
      </div>
      </div>
      
    </>
  );
};

export default VacationPictures;
