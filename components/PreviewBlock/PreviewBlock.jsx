import React, { useRef, useState } from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image";

export const FullPageVideo = React.forwardRef(({ video }, ref) => {
  return (
    <div itemType="http://schema.org/VideoObject">
      <meta itemProp="name" content={video.name} />
      <meta itemProp="uploadDate" content={video.uploadDate} />
      <link itemProp="thumbnailUrl" href={video.thumbnailUrl} />
      <video
        ref={ref}
        className="absolute top-0 left-0 w-full h-full block object-cover object-center overflow-hidden -z-10 filter hue-rotate-[12deg]"
        poster={video.poster}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video.link} type="video/mp4" />
      </video>
    </div>
  );
});

export function PreviewBlock({ img, video, title, subTitle }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef();

  const previewClasses = "relative w-full flex items-center justify-start mb-10 h-[90dvh] md:mb-[60px] md:min-h-[600px] md:h-[60dvh]";
  const titleContainerClasses = "px-[30px] w-full h-full flex flex-col justify-center bg-background-opacity text-font md:p-20";
  const titleClasses = "text-[25px] leading-[38px] max-w-[800px] mb-[15px] font-bold uppercase md:text-[52px] md:leading-[60px]";
  const subTitleClasses = "text-base max-w-[800px] leading-[25px] whitespace-pre-line";

  if (img) {
    return (
      <section className={previewClasses}>
        <Image
          src={img}
          alt={title || "Preview image"}
          fill
          className={`-z-10 transition-all duration-[800ms] ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} object-cover object-[40%_center]`}
          onLoad={() => setIsLoaded(true)}
          priority
          sizes="100vw"
        />
        {(title || subTitle) && (
          <VisibilityManager as="div" side="opacity" className={titleContainerClasses}>
            {title && <h2 className={titleClasses}>{title}</h2>}
            {subTitle && <p className={subTitleClasses}>{subTitle}</p>}
          </VisibilityManager>
        )}
      </section>
    );
  }

  if (video) {
    return (
      <VisibilityManager
        side="opacity"
        onClick={() => videoRef?.current?.play()}
        className={previewClasses}
      >
        {(title || subTitle) && (
          <VisibilityManager as="div" side="opacity" className={titleContainerClasses}>
            {title && <h1 className={titleClasses}>{title}</h1>}
            {subTitle && <p className={subTitleClasses}>{subTitle}</p>}
          </VisibilityManager>
        )}
        <FullPageVideo ref={videoRef} video={video} />
      </VisibilityManager>
    );
  }
}
