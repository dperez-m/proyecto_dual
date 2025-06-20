"use client";

import React, { useRef } from "react";

interface HoverVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

const HoverVideo: React.FC<HoverVideoProps> = ({ src, poster, className = "" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={`w-full h-full object-cover rounded-lg ${className}`}
      muted
      loop
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default HoverVideo;
