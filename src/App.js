import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import CBLogo from './assets/cbuaelogo.png';
import OLogo from './assets/eyamllogo.png';

function App() {
  // State to track selected language and day
  const [language, setLanguage] = useState('english');
  const [day, setDay] = useState(1);

  // Function to get the correct video URL based on the state
  const getVideoUrl = () => {
    if (language === 'arabic') {
      if (day === 1) {
        return 'https://www.youtube-nocookie.com/embed/QRPJBXEV2kU?si=xVfABWegWEwRWJfd';
      } else {
        return 'https://www.youtube-nocookie.com/embed/gpKwWWzBH-A?si=obrYtZATHwS_mF4_';
      }
    } else if (language === 'english') {
      if (day === 1) {
        return 'https://www.youtube-nocookie.com/embed/FEB3Tr6Yovg?si=XkkP6HrMcv0Vm6hs';
      } else {
        return 'https://www.youtube-nocookie.com/embed/UsVH9qJ6YQY?si=o9RUwjfu3B0_o7Gd';
      }
    }
  };

  return (
    <div className='App back-image d-flex flex-column justify-content-between align-items-center'>
      <div className='d-flex justify-content-between align-items-center w-100'>
        <img className='logos' src={CBLogo} />
        <img className='logos' src={OLogo} />
      </div>
      {/* Display Video */}
      <div style={{ marginTop: '20px' }}>
        <iframe
        className='iframe'
          src={getVideoUrl()}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
      {/* Language Selection */}
      <div className='d-flex flex-column '>
        <div className='btn-group' role='group' aria-label='Language selection'>
          <button
            className={`btn ${
              language === 'arabic'
                ? 'btn-primary bg-trans'
                : 'btn-secondary bg-trans'
            }`}
            onClick={() => setLanguage('arabic')}
          >
            Arabic
          </button>
          <button
            className={`btn ${
              language === 'english'
                ? 'btn-primary bg-trans'
                : 'btn-secondary bg-trans'
            }`}
            onClick={() => setLanguage('english')}
          >
            English
          </button>
        </div>

        {/* Day Selection */}
        <div
          className='btn-group'
          role='group'
          aria-label='Day selection'
          style={{ marginTop: '10px' }}
        >
          <button
            className={`btn ${
              day === 1 ? 'btn-primary bg-trans' : 'btn-secondary bg-trans'
            }`}
            onClick={() => setDay(1)}
          >
            Day 1
          </button>
          <button
            className={`btn ${
              day === 2 ? 'btn-primary bg-trans' : 'btn-secondary bg-trans'
            }`}
            onClick={() => setDay(2)}
          >
            Day 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
