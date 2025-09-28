// Player.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Player.css";

import hozier from '../../assets/hozier.jpeg';
import hozierSong from '../../assets/hozier.mp3';

import paramore from '../../assets/paramore.jpeg';
import paramoreSong from '../../assets/paramore.mp3';

import khruangbin from '../../assets/khruangbin.jpeg';
import khruangbinSong from '../../assets/khruangbin.mp3';

import playIcon from '../../assets/music.svg';
import pauseIcon from '../../assets/pause.svg';

const tracks = [
    { id: 1, title: "Hozier - Would That I", src: hozierSong, cover: hozier },
    { id: 2, title: "Paramore - Still Into You", src: paramoreSong, cover: paramore },
    { id: 3, title: "Khruangbin - Lady and Man", src: khruangbinSong, cover: khruangbin },
];

const Player = () => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio());

    useEffect(() => {
        if (currentTrack) {
            audioRef.current.src = currentTrack.src;
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [currentTrack]);

    const handlePlayPause = (track) => {
        if (currentTrack?.id === track.id) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        } else {
            setCurrentTrack(track);
        }
    };

    return (
        <div className="player-container">
            <div className="track-list">
                {tracks.map(track => (
                    <div
                        key={track.id}
                        className={`track-item ${currentTrack?.id === track.id ? "active" : ""}`}
                    >
                        <img src={track.cover} alt={track.title} className="track-cover" />
                        <p className="track-title">{track.title}</p>
                        <button
                            className="play-btn"
                            onClick={() => handlePlayPause(track)}
                        >
                            <img
                                src={currentTrack?.id === track.id && isPlaying ? pauseIcon : playIcon}
                                alt={currentTrack?.id === track.id && isPlaying ? "Pause" : "Play"}
                                className="play-icon"
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Player;