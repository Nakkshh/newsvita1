import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout functionality here if needed
    console.log("User logged out");
    navigate('/'); // Redirect to home page on logout
  };

  return (
    <div className="py-10 bg-white text-black"> {/* Always light theme */}
      <div className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
        <div className="left">
          <img
            className="w-40 h-40 object-cover rounded-full border-2 border-pink-600 p-1"
            src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'}
            alt="profile"
          />
        </div>
        <div className="right">
          <h1 className="text-center font-bold text-2xl mb-2">{'Kamal Nayan Upadhyay'}</h1>
          <h2 className="font-semibold">Software Developer</h2>
          <h2 className="font-semibold">knupadhyay784@gmail.com</h2>
          <h2 className="font-semibold">
            <span>Total Blog : </span> 15
          </h2>
          <div className="flex gap-4 mt-2">
            {/* Create Blog Button */}
            <button
              onClick={() => navigate('/createblog')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Create Blog
            </button>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>

            
          </div>
        </div>
      </div>

      {/* Line Separator */}
      <hr className="border-2 border-gray-400" />
    </div>
  );
}

export default Dashboard;
