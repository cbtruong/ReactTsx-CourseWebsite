import React, { useState, useRef, useEffect } from "react";

const useVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setVideoTime(videoRef.current.currentTime);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return { videoRef, isPlaying, videoTime, handlePlayPause };
};

const OtherPage: React.FC = () => {
  const { videoRef, isPlaying, videoTime, handlePlayPause } = useVideoPlayer();

  return (
    <div>
      <video ref={videoRef} width="600" controls>
        <source src="https://res.cloudinary.com/dsdxwarvu/video/upload/v1734696516/Untitled_video_-_Made_with_Clipchamp_lgb0vm.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <p>Time: {videoTime.toFixed(2)} seconds</p>
    </div>
  );
};

export default OtherPage;
