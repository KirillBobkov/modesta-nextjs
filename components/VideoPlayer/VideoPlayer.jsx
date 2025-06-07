import React from "react";


export const VideoPlayer = ({ video }) => {
  return (
    <div
      itemScope
      itemType="http://schema.org/VideoObject"
      className={`w-full relative bg-[var(--card-bg-color)] h-full rounded-[20px] overflow-hidden aspect-[5/6] md:aspect-auto shadow-lg`}
    >
      <meta itemProp="name" content={video.name} />
      <meta itemProp="uploadDate" content={video.uploadDate} />
      <link itemProp="thumbnailUrl" href={video.thumbnailUrl} />
      <iframe
        className="w-full h-full"
        src={video.link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
