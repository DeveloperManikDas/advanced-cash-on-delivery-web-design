"use client";
import React, { useState } from "react";
import VideoCard from "./videoCard"; // Adjust the import path as necessary

// Sample video data with categories
const videoData = [
  {
    title: "Setting Up Fees for COD Orders",
    description: "Learn how to configure fees for cash on delivery orders.",
    videoId: "waBXlVfTF5M",
    category: "Fees",
  },
  {
    title: "Managing Customer Tags",
    description: "Discover how to use customer tags for better control.",
    videoId: "waBXlVfTF5M",
    category: "Customer",
  },
  {
    title: "Product-Based COD Restrictions",
    description: "Implement COD options based on specific products.",
    videoId: "waBXlVfTF5M",
    category: "Product",
  },
  {
    title: "Setting Up Location-Based COD",
    description: "Configure COD availability by customer location.",
    videoId: "waBXlVfTF5M",
    category: "Location",
  },
  {
    title: "Dynamic Fees by Region",
    description: "Adjust fees dynamically based on shipping regions.",
    videoId: "waBXlVfTF5M",
    category: "Fees",
  },
  {
    title: "Advanced Customer Segmentation",
    description: "Use advanced segmentation to target customers.",
    videoId: "waBXlVfTF5M",
    category: "Customer",
  },
  {
    title: "Product Exclusions from COD",
    description: "Learn how to exclude certain products from COD.",
    videoId: "waBXlVfTF5M",
    category: "Product",
  },
  {
    title: "Optimizing COD Delivery Areas",
    description: "Manage delivery areas for efficient COD operations.",
    videoId: "waBXlVfTF5M",
    category: "Location",
  },
  {
    title: "Configuring COD Fee Thresholds",
    description: "Set up minimum order values for applying COD fees.",
    videoId: "waBXlVfTF5M",
    category: "Fees",
  },
  {
    title: "Customer Tag Automation",
    description: "Automate customer tagging for better management.",
    videoId: "waBXlVfTF5M",
    category: "Customer",
  },
  {
    title: "Product Bundles and COD",
    description: "Handle COD options for product bundles.",
    videoId: "waBXlVfTF5M",
    category: "Product",
  },
  {
    title: "Expanding COD to New Regions",
    description: "Strategies for expanding COD services.",
    videoId: "waBXlVfTF5M",
    category: "Location",
  },
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
