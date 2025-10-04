import React, { useState } from "react";
import "./nav.css";

import image from "../../assets/image.svg";
import message from "../../assets/message.svg";
import music from "../../assets/music-notes.svg";

import Modal from "../customModal/Modal";
import { ImageGallery } from "react-image-grid-gallery";
import Message from "../message/Message";
import Player from "../player/Player";

// 📸 Imagens locais
import img04 from '../../assets/pics/04.jpg';
import img05 from '../../assets/pics/05.jpg';
import img06 from '../../assets/pics/06.jpg';
import img07 from '../../assets/pics/07.jpg';
import img08 from '../../assets/pics/08.jpg';
import img09 from '../../assets/pics/09.jpg';
import img10 from '../../assets/pics/10.jpg';
import img11 from '../../assets/pics/11.jpg';
import img12 from '../../assets/pics/12.jpg';
import img13 from '../../assets/pics/13.jpg';

const Nav = () => {
    const [openModal, setOpenModal] = useState(null);
    const closeModal = () => setOpenModal(null);

    // 🖼️ Array de imagens locais
    const imagesArray = [
        { id: "img04", alt: "Memory 04", src: img04, thumbSrc: img04 },
        { id: "img05", alt: "Memory 05", src: img05, thumbSrc: img05 },
        { id: "img06", alt: "Memory 06", src: img06, thumbSrc: img06 },
        { id: "img07", alt: "Memory 07", src: img07, thumbSrc: img07 },
        { id: "img08", alt: "Memory 08", src: img08, thumbSrc: img08 },
        { id: "img09", alt: "Memory 09", src: img09, thumbSrc: img09 },
        { id: "img10", alt: "Memory 10", src: img10, thumbSrc: img10 },
        { id: "img11", alt: "Memory 11", src: img11, thumbSrc: img11 },
        { id: "img12", alt: "Memory 12", src: img12, thumbSrc: img12 },
        { id: "img13", alt: "Memory 13", src: img13, thumbSrc: img13 },
    ];

    return (
        <div className="nav">
            <ul className="nav-icons">
                <li>
                    <img src={image} alt="Image" onClick={() => setOpenModal("image")} />
                </li>
                <li>
                    <img src={message} alt="Message" onClick={() => setOpenModal("message")} />
                </li>
                <li>
                    <img src={music} alt="Music" onClick={() => setOpenModal("music")} />
                </li>
            </ul>

            {/* Modal customizado */}
            <Modal isOpen={!!openModal} handleClose={closeModal}>
                <div className="modal-panel">
                    <h2 className="modal-title">
                        {openModal === "image" && "Our Moments"}
                        {openModal === "message" && "Read me"}
                        {openModal === "music" && "Cute Songs"}
                    </h2>

                    <div className="modal-body">
                        {openModal === "image" && (
                            <ImageGallery imagesInfoArray={imagesArray} gapSize={8} />
                        )}
                        {openModal === "message" && <Message />}
                        {openModal === "music" && <Player />}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Nav;