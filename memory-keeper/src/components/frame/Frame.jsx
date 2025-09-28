import React, { useState, useEffect } from 'react';
import './Frame.css';

import img1 from '../../assets/pics/01.jpg';
import img2 from '../../assets/pics/02.jpg';
import img3 from '../../assets/pics/03.jpg';
import arrow_right from '../../assets/arrow-right.svg'

const Frame = () => {
    const images = [
        { src: img1, alt: '<3' },
        { src: img2, alt: '<3' },
        { src: img3, alt: '<3' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // 🔥 Preload das imagens
    useEffect(() => {
        images.forEach((img) => {
            const preloader = new Image();
            preloader.src = img.src;
        });
    }, []);

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="container">
            <ul id="Frames">
                <li className="Frame">
                    <img
                        key={images[currentIndex].src}
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                    />
                </li>
            </ul>
            <button className="btn-next-image" onClick={handleNextImage}>
                <img src={arrow_right} alt="Arrow Right" />
            </button>
        </div>
    );
};

export default Frame;
