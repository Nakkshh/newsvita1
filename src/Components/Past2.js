import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample Data for Images and Videos (with dynamic require for images)
const images = [
  { src: require('../assets/images/21.jpg')},
  { src: require('../assets/images/22.jpg')},
  { src: require('../assets/images/23.jpg')},
  { src: require('../assets/images/24.jpg')},
];

const videos = [
  { src: require('../assets/videos/1.mp4'), alt: "Holi Celebration" },
  { src: require('../assets/videos/2.mp4'), alt: "Garba Dance" },  
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
        Past Events Gallery - ADVITYA
      </header>

      <nav className="flex justify-center gap-5 mt-6">
        <button
          className={`${
            view === "photos" ? "text-green-500" : "text-black"
          } font-medium text-lg hover:text-green-500`}
          onClick={() => setView("photos")}
        >
          Photos
        </button>
        <button
          className={`${
            view === "videos" ? "text-green-500" : "text-black"
          } font-medium text-lg hover:text-green-500`}
          onClick={() => setView("videos")}
        >
          Videos
        </button>
      </nav>

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

        {/* Videos Section */}
        {view === "videos" && (
          <main className="flex gap-6 mt-12 justify-center flex-wrap">
            {videos.map((video, index) => (
              <video
                key={index}
                src={video.src}
                width="250"
                controls
                className="rounded-md"
                alt={video.alt}
              ></video>
            ))}
          </main>
        )}
      </section>
    </div>
  );
};

export default PastEvents;
