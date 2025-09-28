import React, { useState } from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (img) => {
        setExpanded(expanded === img ? null : img);
    };

    return (
        <div className="gallery-container">
            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`gallery-item ${expanded === img ? "expanded" : ""}`}
                        onClick={() => toggleExpand(img)}
                    >
                        <img src={img} alt={`foto-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
