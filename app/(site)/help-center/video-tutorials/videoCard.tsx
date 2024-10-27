// components/VideoCard.tsx

type VideoCardProps = {
    title: string;
    description: string;
    videoId: string;
  };
  
  const VideoCard = ({ title, description, videoId }: VideoCardProps) => {
    return (
      <div className="mb-8 p-4 border border-stroke rounded-lg shadow-lg dark:border-strokedark dark:bg-blacksection">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default VideoCard;
  