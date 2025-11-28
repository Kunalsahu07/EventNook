import { useState } from "react";
import "./CSS/Gallery.css";

// Import your images here
import img1 from "../assets/event-images/event1.jpg";
import img2 from "../assets/event-images/event2.jpg";
import img3 from "../assets/event-images/event3.jpg";
import img4 from "../assets/event-images/event4.jpg";
import img5 from "../assets/event-images/event5.jpg";
import img6 from "../assets/event-images/event6.jpg";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { id: 1, src: img1, title: "Annual Sports Day" },
    { id: 2, src: img2, title: "Cultural Fest Performance" },
    { id: 3, src: img3, title: "Tech Seminar Session" },
    { id: 4, src: img4, title: "Inter-College Activity" },
    { id: 5, src: img5, title: "Science Exhibition" },
    { id: 6, src: img6, title: "Independence Day Program" },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Event Gallery</h1>

      <div className="gallery-grid">
        {photos.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => setSelectedImage(item.src)}
          >
            <img src={item.src} alt={item.title} className="gallery-img" />
            <p className="caption">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Lightbox Preview */}
      {selectedImage && (
        <div className="popup" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Preview" className="popup-img" />
        </div>
      )}
    </div>
  );
};
