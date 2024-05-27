"use client";
import VideoForm from "@/components/VideoForm";
import VideoPlayer from "@/components/videoPlayer";
import { useState } from "react";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState("");

  const handleFormSubmit = (url) => {
    setVideoUrl(url);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl p-4 sm:p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
          All In One Player
        </h1>
        <p className="mb-4 sm:mb-6 text-center text-gray-600">
          Test your MP4, YouTube, SoundCloud, Facebook, Vimeo, Mux, Twitch,
          Streamable, Wistia, DailyMotion, Mixcloud, Vidyard, Kaltura, M3U8 &
          MPD URLs with our fast player ⚡
        </p>
        <textarea
          className="w-full p-2 sm:p-3 mb-4 sm:mb-6 bg-blue-100 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Note..."
          rows="3"
        />
        <VideoForm onFormSubmit={handleFormSubmit} />
        {videoUrl && (
          <div className="mt-6 sm:mt-8 w-full">
            <VideoPlayer videoUrl={videoUrl} />
          </div>
        )}
      </div>
    </main>
  );
}
