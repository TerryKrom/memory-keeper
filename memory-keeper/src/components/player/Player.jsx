import React, { useState, useRef } from "react";
import "./Player.css";

const tracks = [
    {
        id: 1,
        title: "Chill Vibes",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        cover: "https://picsum.photos/200?random=1",
    },
    {
        id: 2,
        title: "Focus Beats",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        cover: "https://picsum.photos/200?random=2",
    },
    {
        id: 3,
        title: "LoFi Dreams",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        cover: "https://picsum.photos/200?random=3",
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