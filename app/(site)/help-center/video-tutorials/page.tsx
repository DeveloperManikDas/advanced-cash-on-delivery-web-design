"use client";
import React, { useState } from "react";
import VideoCard from "./videoCard"; // Adjust the import path as necessary

// Sample video data with categories
const videoData = [
  { title: "Video 1", description: "Description 1", videoId: "waBXlVfTF5M", category: "Fees" },
  { title: "Video 2", description: "Description 2", videoId: "waBXlVfTF5M", category: "Customer" },
  { title: "Video 3", description: "Description 3", videoId: "waBXlVfTF5M", category: "Product" },
  { title: "Video 4", description: "Description 4", videoId: "waBXlVfTF5M", category: "Location" },
  { title: "Video 5", description: "Description 5", videoId: "waBXlVfTF5M", category: "Fees" },
  { title: "Video 6", description: "Description 6", videoId: "waBXlVfTF5M", category: "Customer" },
  { title: "Video 7", description: "Description 7", videoId: "waBXlVfTF5M", category: "Product" },
  { title: "Video 8", description: "Description 8", videoId: "waBXlVfTF5M", category: "Location" },
  { title: "Video 9", description: "Description 9", videoId: "waBXlVfTF5M", category: "Fees" },
  { title: "Video 10", description: "Description 10", videoId: "waBXlVfTF5M", category: "Customer" },
  { title: "Video 11", description: "Description 11", videoId: "waBXlVfTF5M", category: "Product" },
  { title: "Video 12", description: "Description 12", videoId: "waBXlVfTF5M", category: "Location" },
];

const VideoGalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Videos");

  // Filter videos based on the selected category
  const filteredVideos = selectedCategory === "All Videos"
    ? videoData
    : videoData.filter(video => video.category === selectedCategory);

  return (
    <div className="pt-28 w-full inline-flex flex-col items-center">
      <div className="">
        <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
          Video Gallery: Cash on Delivery Features
        </h2>
        <p className="mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          aliquid vero natus ipsam, repudiandae voluptates!{" "}
        </p>
      </div>

      {/* Tabs for video categories */}
      <div className="flex space-x-4 mb-8">
        {["All Videos", "Fees", "Customer", "Product", "Location"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${selectedCategory === category ? "bg-green-600 text-white rounded-full" : "text-black"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display video cards */}
      <div className="grid grid-cols-1 lg:w-full gap-8 md:grid-cols-2 lg:grid-cols-3 pt-24 p-8">
        {filteredVideos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            description={video.description}
            videoId={video.videoId}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGalleryPage;
