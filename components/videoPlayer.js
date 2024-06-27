"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl="https://catchup.yuppcdn.net/amazonv2/36/preview/colorsbanglahd/master/chunklist.m3u8" }) => {
  return (
    <div className="flex justify-center items-center w-full py-8">
      <div className="relative w-full max-w-2xl aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden shadow-lg">
        <ReactPlayer
          url={videoUrl}
          controls
          light={true}
          width="100%"
          height="100%"
          config={{ file: { forceVideo: true } }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
