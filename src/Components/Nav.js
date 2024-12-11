import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./FirebaseConfig";  // Make sure to initialize Firebase in this file

const Nav = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();  // useNavigate replaces useHistory()
  const auth = getAuth(app);  // Firebase Authentication
  const db = getFirestore(app);  // Firestore Database

  // Check if the user is admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          const userData = userDoc.data();
          if (userData && userData.role === "admin") {
            setIsAdmin(true); // User is an admin
          }
        } catch (error) {
          console.error("Error checking user role:", error);
        }
      }
    };
    checkAdminStatus();
  }, [auth, db]);

  // Handle Admin Login Button Click
  const handleAdminLoginClick = () => {
    if (isAdmin) {
      navigate("/admin-dashboard");  // Redirect to the admin dashboard
    } else {
      navigate("./AdminLogin");  // Redirect to the admin login page
    }
  };

  return (
    <nav className="flex justify-center gap-5 p-4 bg-[#ffc107] shadow-md sticky top-0 z-100">
      {/* Upcoming Events */}
      <Link
        to="/upcoming-events"
        className="text-[#0c4b85] text-lg font-semibold py-2 px-5 rounded-full bg-white transition-transform transform hover:bg-[#0c4b85] hover:text-white"
      >
        Upcoming Events
      </Link>

      {/* Past Events */}
      <Link
        to="/past-events"
        className="text-[#0c4b85] text-lg font-semibold py-2 px-5 rounded-full bg-white transition-transform transform hover:bg-[#0c4b85] hover:text-white"
      >
        Past Events Clicks
      </Link>

      {/* Club Vacancy */}
      <Link
        to="/club-vacancy"
        className="text-[#0c4b85] text-lg font-semibold py-2 px-5 rounded-full bg-white transition-transform transform hover:bg-[#0c4b85] hover:text-white"
      >
        Club Vacancy
      </Link>

      {/* Club Directory */}
      <Link
        to="/club-directory"
        className="text-[#0c4b85] text-lg font-semibold py-2 px-5 rounded-full bg-white transition-transform transform hover:bg-[#0c4b85] hover:text-white"
      >
        Club Directory
      </Link>

      {/* Admin Login Button */}
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
        <button
          onClick={handleAdminLoginClick}
          className="text-white text-lg font-semibold py-2 px-5 rounded-full bg-[#0c4b85] transition-transform transform hover:bg-[#073763]"
        >
          {isAdmin ? "Admin Dashboard" : "Admin Login"}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
