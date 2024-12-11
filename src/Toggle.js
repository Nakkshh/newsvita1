export const onchangeView = (view) => {
    const video = document.getElementById("videos");
    const image = document.getElementById("photos");
  
    if (view === "image") {
      if (video) video.style.display = "none";
      if (image) image.style.display = "flex";
    } else {
      if (video) video.style.display = "flex";
      if (image) image.style.display = "none";
    }
  };
  