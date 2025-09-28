import React, { useState, useRef } from "react";
import "./Player.css";

import hozier from '../../assets/hozier.jpeg';
import hozierSong from '../../assets/hozier.mp3';

import paramore from '../../assets/paramore.jpeg';
import paramoreSong from '../../assets/paramore.mp3';

import khruangbin from '../../assets/khruangbin.jpeg';
import khruangbinSong from '../../assets/khruangbin.mp3';

const tracks = [
    {
        id: 1,
        title: "Hozier - Would That I",
        src: hozierSong,
        cover: hozier,
    },
    {
        id: 2,
        title: "Paramore - Still Into You",
        src: paramoreSong,
        cover: paramore,
    },
    {
        id: 3,
        title: "Khruangbin - Lady and Man",
        src: khruangbinSong,
        cover: khruangbin,
    },
];

const Player = () => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const audioRef = useRef(null);

    const handlePlay = (track) => {
        if (currentTrack?.id === track.id) {
            // já está tocando, reinicia
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            setCurrentTrack(track);
            setTimeout(() => audioRef.current.play(), 100);
        }
    };

    return (
        <div className="player-container">
            <div className="track-list">
                {tracks.map((track) => (
                    <div
                        key={track.id}
                        className={`track-item ${currentTrack?.id === track.id ? "active" : ""
                            }`}
                        onClick={() => handlePlay(track)}
                    >
                        <img src={track.cover} alt={track.title} className="track-cover" />
                        <p className="track-title">{track.title}</p>
                    </div>
                ))}
            </div>

            {currentTrack && (
                <audio ref={audioRef} src={currentTrack.src} controls autoPlay />
            )}
        </div>
    );
};

export default Player;