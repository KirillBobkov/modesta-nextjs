import React from "react";
import Image from "next/image";
import { VisibilityManager } from "./VisibilityManager.jsx";

interface VideoListProps {
  videos: any[];
  selectedVideo: any;
  onVideoSelect: (video: any) => void;
}

export const VideoList: React.FC<VideoListProps> = ({
  videos,
  selectedVideo,
  onVideoSelect,
}) => {
  return (
    <VisibilityManager>
                  <div className={`h-full flex flex-col overflow-hidden rounded-[20px] bg-[var(--card-bg-color)] shadow-lg`}>
        <div className="bg-[var(--card-bg-color)] overflow-hidden">
          <ul className="h-[300px] md:h-[400px] overflow-y-auto">
            {videos.map((video, i) => (
              <li key={video.link + i}>
                <button
                  onClick={() => onVideoSelect(video)}
                  className={`w-full p-5 md:p-[20px_30px] flex items-center gap-5 bg-none border-none cursor-pointer text-left transition-all duration-500 text-[var(--secondary-font-color)] hover:text-[var(--accent)] ${
                    selectedVideo.link === video.link ? "selected" : ""
                  }`}
                >
                  <div className="relative w-[50px] h-[50px] flex-shrink-0">
                    <Image
                      width={50}
                      height={50}
                      src={video.thumbnailUrl}
                      alt={""}
                      className="w-full h-full rounded-[10px] object-cover bg-[var(--bg-color)]"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className={`line-clamp-2 ${selectedVideo.link === video.link ? 'font-bold text-[var(--font-color)]' : ''}`}>{video.name}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VisibilityManager>
  );
};
