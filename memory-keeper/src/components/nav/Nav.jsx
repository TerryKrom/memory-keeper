import React, { useState } from "react";
import "./Nav.css";
import image from "../../assets/image.svg";
import message from "../../assets/message.svg";
import music from "../../assets/music-notes.svg";

import Modal from "../customModal/Modal";
import { ImageGallery } from "react-image-grid-gallery";
import Message from "../message/Message";
import Player from "../player/Player";

const Nav = () => {
    const [openModal, setOpenModal] = useState(null);

    const closeModal = () => setOpenModal(null);

    const imagesArray = [
        {
            id: "img1",
            alt: "Montanhas ao pôr do sol",
            src: "https://picsum.photos/id/1018/1200/800",
            thumbSrc: "https://picsum.photos/id/1018/400/300",
        },
        {
            id: "img2",
            alt: "Floresta com névoa",
            src: "https://picsum.photos/id/1015/1200/800",
            thumbSrc: "https://picsum.photos/id/1015/400/300",
        },
        {
            id: "img3",
            alt: "Cidade à noite",
            src: "https://picsum.photos/id/1011/1200/800",
            thumbSrc: "https://picsum.photos/id/1011/400/300",
        },
        {
            id: "img4",
            alt: "Mar azul",
            src: "https://picsum.photos/id/1016/1200/800",
            thumbSrc: "https://picsum.photos/id/1016/400/300",
        },
        {
            id: "img5",
            alt: "Campo verde",
            src: "https://picsum.photos/id/1025/1200/800",
            thumbSrc: "https://picsum.photos/id/1025/400/300",
        },
        {
            id: "img6",
            alt: "Estrada no deserto",
            src: "https://picsum.photos/id/1035/1200/800",
            thumbSrc: "https://picsum.photos/id/1035/400/300",
        },
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
                            <ImageGallery imagesInfoArray={imagesArray} gapSize={24} />
                        )}
                        {openModal === "message" && (
                            <Message />
                        )}
                        {openModal === "music" && (
                            <Player />
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Nav;
