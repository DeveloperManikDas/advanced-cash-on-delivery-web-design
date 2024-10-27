import React from "react";
import VideoCard from "./videoCard"; // Adjust the import path as necessary

// Sample video data
const videoData = [
  { title: "Video 1", description: "Description 1", videoId: "waBXlVfTF5M" },
  { title: "Video 2", description: "Description 2", videoId: "waBXlVfTF5M" },
  { title: "Video 2", description: "Description 2", videoId: "waBXlVfTF5M" },
  // Add more video data as needed
];

const VideoGalleryPage: React.FC = () => {
  return (
    <div className="pt-28 w-full border-2 inline-flex flex-col items-center">
      <div className="">
        <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
          Video Gallery: Cash on Delivery Features
        </h2>
        <p className="mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          aliquid vero natus ipsam, repudiandae voluptates!{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:w-full gap-8 md:grid-cols-2 lg:grid-cols-3 pt-24 p-8">
        {videoData.map((video, index) => (
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
