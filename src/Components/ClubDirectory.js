// src/Components/ClubDirectory.js
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import navigation module styles
import 'swiper/css/pagination'; // Import pagination module styles
import { Navigation, Pagination } from 'swiper/modules'; // Import Swiper modules
import './cdir.css'; // Ensure your CSS file is imported

const ClubDirectory = () => {
  const showPopup = (popupId) => {
    const popup = document.getElementById(`popup-${popupId}`);
    if (popup) {
      popup.style.display = 'flex';
      setTimeout(() => {
        popup.scrollTop = 0;
      }, 0);
    }
  };
  

  const hidePopup = () => {
    const popupBoxes = document.querySelectorAll('.popup-box');
    popupBoxes.forEach((popup) => {
      popup.style.display = 'none';
    });
  };

  return (
    <div className="club-directory-container">
      {/* Swiper Component */}
      <Swiper
        className="Myswiper slide-container"
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
      >
        {/* Swiper Slide for each club */}
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src={require('../assets/images/1.jpg')}
                alt="Club Image"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Space Innovators Club</h2>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!  
            </p>
            <button
              className="button"
              onClick={() => showPopup('space-innovators')}
            >
              Read More
            </button>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides here for other clubs */}
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src={require('../assets/images/2.jpg')}
                alt="Club Image"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Gujrati Club</h2>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            
            </p>
            <button
              className="button"
              onClick={() => showPopup('gujrati')}
            >
              Read More
            </button>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides here for other clubs */}
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src={require('../assets/images/3.jpg')}
                alt="Club Image"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Marathi Club</h2>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!</p>
            <button
              className="button"
              onClick={() => showPopup('marathi')}
            >
              Read More
            </button>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides here for other clubs */}
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src={require('../assets/images/4.jpg')}
                alt="Club Image"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">IEEE Student Branch</h2>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!</p>
            <button
              className="button"
              onClick={() => showPopup('ieee')}
            >
              Read More
            </button>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides here for other clubs */}
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src={require('../assets/images/5.jpg')}
                alt="Club Image"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Open Source Club</h2>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!</p>
            <button
              className="button"
              onClick={() => showPopup('open-source')}
            >
              Read More
            </button>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides here for other clubs */}
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src={require('../assets/images/6.jpg')}
                alt="Club Image"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Fusion Club</h2>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!</p>
            <button
              className="button"
              onClick={() => showPopup('fusion')}
            >
              Read More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Popup structure for each club */}
      <div
        className="popup-box"
        id="popup-space-innovators"
        style={{ display: 'none' }}
      >
        <div className="popup-content">
          <div className="popup-header">
            <h1>Space Innovators Club</h1>
            <img
              src={require('../assets/images/11.png')}
              alt="Popup Image"
              className="popup-image"
            />
          </div>
          <div className="popup-body">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!</p>
          </div>
          <div className="popup-footer">
            <button className="popup-close-btn" onClick={hidePopup}>
              Close
            </button>
          </div>
        </div>
      </div>
      {/* Add more popups here for other clubs */}
      <div
        className="popup-box"
        id="popup-gujrati"
        style={{ display: 'none' }}
      >
        <div className="popup-content">
          <div className="popup-header">
            <h1>Gujrati Club</h1>
            <img
              src={require('../assets/images/12.png')}
              alt="Popup Image"
              className="popup-image"
            />
          </div>
          <div className="popup-body">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!</p>
          </div>
          <div className="popup-footer">
            <button className="popup-close-btn" onClick={hidePopup}>
              Close
            </button>
          </div>
        </div>
      </div>
      {/* Add more popups here for other clubs */}
      <div
        className="popup-box"
        id="popup-marathi"
        style={{ display: 'none' }}
      >
        <div className="popup-content">
          <div className="popup-header">
            <h1>Marathi Club</h1>
            <img
              src={require('../assets/images/13.png')}
              alt="Popup Image"
              className="popup-image"
            />
          </div>
          <div className="popup-body">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!</p>
          </div>
          <div className="popup-footer">
            <button className="popup-close-btn" onClick={hidePopup}>
              Close
            </button>
          </div>
        </div>
      </div>
      {/* Add more popups here for other clubs */}
      <div
        className="popup-box"
        id="popup-ieee"
        style={{ display: 'none' }}
      >
        <div className="popup-content">
          <div className="popup-header">
            <h1>IEEE Student Branch</h1>
            <img
              src={require('../assets/images/14.png')}
              alt="Popup Image"
              className="popup-image"
            />
          </div>
          <div className="popup-body">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!</p>
          </div>
          <div className="popup-footer">
            <button className="popup-close-btn" onClick={hidePopup}>
              Close
            </button>
          </div>
        </div>
      </div>
      {/* Add more popups here for other clubs */}
      <div
        className="popup-box"
        id="popup-open-source"
        style={{ display: 'none' }}
      >
        <div className="popup-content">
          <div className="popup-header">
            <h1>Open Source Club</h1>
            <img
              src={require('../assets/images/15.png')}
              alt="Popup Image"
              className="popup-image"
            />
          </div>
          <div className="popup-body">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!</p>
          </div>
          <div className="popup-footer">
            <button className="popup-close-btn" onClick={hidePopup}>
              Close
            </button>
          </div>
        </div>
      </div>
      {/* Add more popups here for other clubs */}
      <div
        className="popup-box"
        id="popup-fusion"
        style={{ display: 'none' }}
      >
        <div className="popup-content">
          <div className="popup-header">
            <h1>Fusion Club</h1>
            <img
              src={require('../assets/images/16.png')}
              alt="Popup Image"
              className="popup-image"
            />
          </div>
          <div className="popup-body">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellendus vel illo ullam iusto placeat odio ad error suscipit maxime cumque. Esse voluptatum fugit, repudiandae blanditiis illo modi ad voluptate!</p>
          </div>
          <div className="popup-footer">
            <button className="popup-close-btn" onClick={hidePopup}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDirectory;
