import React, { useState } from "react";
import "./Nav.css";
import image from "../../assets/image.svg";
import message from "../../assets/message.svg";
import music from "../../assets/music.svg";
import Modal from "../modal/Modal"; // importa o Modal.jsx

const Nav = () => {
    const [openModal, setOpenModal] = useState(null); // "image", "message", "music" ou null

    const closeModal = () => setOpenModal(null);

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
                        {openModal === "image" && "Galeria de Imagens"}
                        {openModal === "message" && "Mensagens"}
                        {openModal === "music" && "Player de Música"}
                    </h2>

                    <div className="modal-body">
                        {openModal === "image" && <p>Aqui você mostra imagens.</p>}
                        {openModal === "message" && <p>Aqui ficam as mensagens.</p>}
                        {openModal === "music" && <p>Aqui você toca músicas.</p>}
                    </div>

                    <button onClick={closeModal} className="btn-close">
                        Fechar
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Nav;