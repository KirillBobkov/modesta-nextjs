import React from "react";

const MediaGrid = ({ attachments }) => {
  // Filter attachments by type for easier rendering
  const photos = attachments.filter((a) => a.type === "photo");
  const videos = attachments.filter((a) => a.type === "video");
  const links = attachments.filter((a) => a.type === "link");

  // No media to show
  if (attachments.length === 0) {
    return null;
  }

  const mediaGridClasses =
    "grid gap-1 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]";

  return (
    <div className="flex flex-col gap-1 mb-10">
      {/* Photo Gallery */}
      {photos.length > 0 && (
        <div className={mediaGridClasses}>
          {photos.map((photo, index) => (
            <img
              key={`photo-${index}`}
              src={photo.photoUrl}
              alt={`Photo ${index + 1}`}
              className="w-full object-cover aspect-[2/1]"
            />
          ))}
        </div>
      )}

      {/* Video Gallery */}
      {videos.length > 0 && (
        <div className={mediaGridClasses}>
          {videos.map((video, index) => (
            <div
              key={`video-${index}`}
              className="relative overflow-hidden bg-card-bg-color"
            >
              <iframe
                className="w-full min-h-[600px] object-cover"
                src={video.iframe}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}

      {/* Link Previews */}
      {links.length > 0 && (
        <div className={mediaGridClasses}>
          {links.map((link, index) => (
            <a
              key={`link-${index}`}
              className="p-5 relative overflow-hidden cursor-pointer rounded-lg min-h-[200px] flex justify-center items-center text-center flex-col font-bold"
              target="_blank"
              href={link.url}
              rel="noopener noreferrer"
            >
              <img
                src={
                  link.image ||
                  "https://cache3.youla.io/files/images/720_720_out/5d/e3/5de3cf0866fb070cf1104855.jpg"
                }
                alt={`Link Preview ${index + 1}`}
                className="absolute top-0 left-0 w-full h-auto object-cover -z-10 opacity-70 filter blur-md"
              />
              <p>Просмотр по ссылке:</p>
              <p className="font-normal text-secondary-font-color">
                {link.title}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaGrid;
