import React, { useState, useRef } from 'react';
import './Video.css';

const Video = ({ src, type }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-container">
      <video ref={videoRef} controls>
        <source src="/assets/videos/python_51.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="play-pause-btn" onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Video;
