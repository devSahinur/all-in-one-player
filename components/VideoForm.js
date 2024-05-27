"use client";
import React, { useState } from "react";

const VideoForm = ({ onFormSubmit }) => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(videoUrl);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-4"
    >
      <label className="flex flex-col items-center">
        <h4 className="mb-2 text-lg font-medium">URL Video:</h4>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full max-w-md"
        />
      </label>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Play Video
      </button>
    </form>
  );
};

export default VideoForm;
