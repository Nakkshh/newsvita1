import React from 'react';
import './vac.css';

const vacanciesData = [
  {
    clubName: "Health-O-Tech Club",
    imageUrl:  require('../assets/images/40.jpg'),
    description: "Dear Students, We are Recruiting",
    formLink: "https://forms.gle/QqezEqTY5pC8uQGNA",
    positions: 12,
  },
  {
    clubName: "AI CLUB",
    imageUrl: require('../assets/images/33.jpg'),
    description: "Dear Students, We are Recruiting",
    formLink: "https://forms.gle/LaEfXppTxio4LYP27",
    positions: 15,
  },
  {
    clubName: "Bit By Bit CLUB",
    imageUrl: require('../assets/images/36.jpg'),
    description: "Dear Students, We are Recruiting",
    formLink: "https://forms.gle/9RauY4rc2Yp8Bwih8",
    positions: 9,
  },
  {
    clubName: "Bashcraft CLUB",
    imageUrl: require('../assets/images/35.jpg'),
    description: "Dear Students,<br> We are Recruiting",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSet2OxNsCdiiDH-U512SJlDNXjHxsLrfaoO1Hh7-9DpFJz01Q/viewform",
    positions: 8
  },
  {
    clubName: "Linux CLUB",
    imageUrl: require('../assets/images/41.jpg'),
    description: "Dear Students,<br> We are Recruiting",
    formLink: "https://forms.gle/gT2C3dsoRJV2dbXT8",
    positions: 11
  },
  {
    clubName: "Anterix CLUB",
    imageUrl: require('../assets/images/34.jpg'),
    description: "Dear Students,<br>We are Recruiting",
    formLink: "https://forms.gle/WerC2yUYbRdKei3c6",
    positions: 4
  },
  {
    clubName: "FinTech CLUB",
    imageUrl: require('../assets/images/37.jpg'),
    description: "Dear Students,<br> We are Recruiting",
    formLink: "https://forms.gle/p2ebFY5LE1jN5uue7",
    positions: 6
  },
  {
    clubName: "FYI CLUB",
    imageUrl: require('../assets/images/38.jpg'),
    description: "Dear Students,<br>We are Recruiting",
    formLink: "https://forms.gle/B6tukQyHvkJQQw569",
    positions: 2
  },   
  {
    clubName: "GarVIT CLUB",
    imageUrl: require('../assets/images/39.jpg'),
    description: "Dear Students,<br> We are Recruiting",
    formLink: "https://forms.gle/bhJ8f7xbyWqVq1GD7",
    positions: 7
  },
];

const VacancyPage = () => {
  return (
    <div className="Club-List-Container">
      <h2>Vacancies</h2>
      <div className="Vacancies">
        {vacanciesData.map((vacancy, index) => (
          <div className="Vacancy" key={index}>
            <img src={vacancy.imageUrl} alt={`${vacancy.clubName} Image`} />
            <h3 className="Club-Title">{vacancy.clubName}</h3>
            <div className="details">{vacancy.description}</div>
            <a className="details-btn" href={vacancy.formLink} target="_blank" rel="noopener noreferrer">
              Click Here
            </a>
            <span className="Open-Positions">{vacancy.positions} Positions Left</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VacancyPage;
