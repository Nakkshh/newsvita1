import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample Data for Images (with dynamic require for images)
const images = [
  { src: require('../assets/images/garba.jpg'), alt: "Event 1", link: "/past-events/past3" },
  { src: require('../assets/images/advitya.jpg'), alt: "Event 2", link: "/past-events/past1" },
  { src: require('../assets/images/ganeshaya.jpg'), alt: "Event 3", link: "/past-events/past2" },
];

const PastEvents = () => {
  const [view, setView] = useState("photos"); // State to toggle between photos and videos

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage:
          "url('https://wallpapertag.com/wallpaper/full/2/5/3/111542-blue-and-white-background-2560x1600-for-windows-10.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="text-center text-4xl mt-12 font-bold">
        Past Events
      </header>

      <section className="flex justify-center">
        {/* Photos Section */}
        {view === "photos" && (
          <main className="flex gap-6 mt-12 justify-center flex-wrap">
            {images.map((image, index) => (
              <Link to={image.link} key={index}>
                <div className="h-[400px] w-[400px] overflow-hidden rounded-md cursor-pointer hover:scale-125 transition-transform duration-500">
                  <img src={image.src} alt={image.alt} className="w-full h-full" />
                </div>
              </Link>
            ))}
          </main>
        )}
      </section>
    </div>
  );
};

export default PastEvents;
