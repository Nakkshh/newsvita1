import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import ClubDirectory from "./Components/ClubDirectory";
import "./App.css"; // Ensure Tailwind CSS is imported here
import { Toaster } from "react-hot-toast";
import MyState from "./Context/data/myState";
import VacancyPage from "./Components/vac";
import UpcomingEvents from "./Components/UpEvents";
import PastEvents from "./Components/PastEvents";
import Past1 from "./Components/Past1";
import Past2 from "./Components/Past2";
import Past3 from "./Components/Past3";
import AdminLogin from "./Components/AdminLogin";
import AuthComponent from './Components/AdminLogin';
import Dashboard from './Components/admindash';
import CreateBlog from './Components/CreateBlog'; // Import the CreateBlog component

// A generic EventSection component to display event details
const EventSection = ({ title, description, link }) => (
  <div className="p-5 border rounded shadow-lg">
    <Link to={link} className="text-xl font-bold mb-3 text-blue-500 underline block hover:text-blue-700">
      {title}
    </Link>
    <p className="mb-3">{description}</p>
    <Link to={link} className="text-blue-500 underline hover:text-blue-700">
      Learn More
    </Link>
  </div>
);

const AppContent = () => {
  const location = useLocation(); // Get the current route

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Nav />
              <Hero />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10 w-full">
                <EventSection
                  title="Upcoming Events"
                  description="Get the latest updates on events, seminars, and happenings across the VIT campus. Stay ahead with our real-time news updates."
                  link="/upcoming-events"
                />
                <EventSection
                  title="Past Event Clicks"
                  description="Relive the memorable moments from past events. Discover how VIT has been shaping education and innovation over the years."
                  link="/past-events"
                />
                <EventSection
                  title="Club Vacancy"
                  description="Join one of our dynamic clubs. Explore the available roles and opportunities to be a part of the thriving VIT community."
                  link="/club-vacancy"
                />
                <EventSection
                  title="Club Directory"
                  description="Browse through a directory of all clubs to find the one that matches your interests."
                  link="/club-directory"
                />
              </div>
            </>
          }
        />

        {/* Club Directory Route */}
        <Route
          path="/club-directory"
          element={
            <div className=" flex-1">
              <ClubDirectory />
            </div>
          }
        />

        {/* Club Vacancy Route */}
        <Route
          path="/club-vacancy"
          element={
            <div className="vacancy-page-container flex-1">
              <VacancyPage />
            </div>
          }
        />
        <Route
          path="/upcoming-events"
          element={
            <div className=" flex-1">
              <UpcomingEvents />
            </div>
          }
        />
        <Route
          path="/past-events"
          element={
            <div className=" flex-1">
              <PastEvents />
            </div>
          }
        />

        <Route path="/past-events/past1" element={<Past1 />} />
        <Route path="/past-events/past2" element={<Past2 />} />
        <Route path="/past-events/past3" element={<Past3 />} />
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route path="/admindash" element={<Dashboard />} />
        <Route
          path="/createblog"
          element={
            <div className="create-blog-container flex-1">
              <CreateBlog />
            </div>
          }
        />
      </Routes>

      {/* Conditionally Render Footer Only on Homepage */}
      {location.pathname === "/" && <Footer />}
    </div>
  );
};

const App = () => (
  <MyState>
    <Router>
      <AppContent />
      <Toaster />
    </Router>
  </MyState>
);

export default App;
