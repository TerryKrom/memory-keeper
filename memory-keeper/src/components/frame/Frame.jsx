import React, { useState } from 'react';
import './Frame.css';

import img1 from '../../assets/img01.jpg';
import img2 from '../../assets/img02.jpg';
import img3 from '../../assets/img03.jpg';

const Frame = () => {
    const images = [
        { src: img1, alt: 'Imagem 1 - descrição aqui' },
        { src: img2, alt: 'Imagem 2 - descrição aqui' },
        { src: img3, alt: 'Imagem 3 - descrição aqui' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="container">
            <ul id="Frames">
                <li className="Frame">
                    {/* a key força o React a recriar o <img> */}
                    <img
                        key={images[currentIndex].src}
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                    />
                </li>
            </ul>
            <button className="btn-next-image" onClick={handleNextImage}>
                <i className="fa fa-arrow-circle-right"></i>
            </button>
        </div>
    );
};

export default Frame;