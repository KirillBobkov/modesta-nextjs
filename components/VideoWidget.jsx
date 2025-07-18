import React, { useState } from "react";
import { VideoPlayer } from "./VideoPlayer.jsx";
import { VideoList } from "./VideoList.tsx";
import { VisibilityManager } from "./VisibilityManager.jsx";

export const videosContent = {
  title: "Оценить красоту момента помогает кино",
  description:
    "Чтобы вы могли оценить нас, снимаем разные видео-ролики о компании, о людях",
  videos: [
    {
      link: "https://vk.com/video_ext.php?oid=-131964440&id=456239059&hd=2&hash=febd42762d907c81",
      thumbnailUrl: "https://sun9-47.userapi.com/hVxPgf_KCcdxg8IFY2h9DWpDUQx-43TGT8YuXw/Vb-Zr8lbrcw.jpg",
      name: "Модеста. Гараж. Часть 1",
      uploadDate: new Date("October 03, 2024").toISOString(),
    },
    {
      link: "https://vk.com/video_ext.php?oid=-131964440&id=456239060&hash=c9aea3c8e98382fc",
      thumbnailUrl: "https://i.mycdn.me/getVideoPreview?id=7414206827251&idx=0&type=39&tkn=beJTEbbBSBfa0JYcShRn_VyF_nI&fn=vid_t",
      name: "В чем отличие антропоморфного протеза от не антропоморфного?",
      uploadDate: new Date("October 03, 2024").toISOString(),
    },
    {
      link: "https://vk.com/video_ext.php?oid=-131964440&id=456239057&hash=036dbb9b4720f062",
      thumbnailUrl: "https://i.mycdn.me/getVideoPreview?id=6956089084421&idx=0&type=39&tkn=tB1Kg3mCqcgG6nxhjVs-courw1A&fn=vid_t",
      name: "Замороженный протез. Провал в ходе испытаний?",
      uploadDate: new Date("October 03, 2024").toISOString(),
    },
    {
      link: "https://vk.com/video_ext.php?oid=-131964440&id=456239058&hash=70978a073e4858a1",
      thumbnailUrl: "https://sun9-29.userapi.com/impg/v0Fr1b4nJjG829Nh_Wxw5PB5eHDXt-OovWKRew/Eyut_HS2ETk.jpg?size=320x240&quality=95&sign=2e2629c2bc62aac65f907652cc61f559&c_uniq_tag=BHupWoKKoDPaHZfk-ljqJKeDXU5Pa_BCZAmO699u7yk&type=video_thumb",
      name: "Собираем робота-реабилитолога Вертера. Часть 1",
      uploadDate: new Date("October 03, 2024").toISOString(),
    },
    {
      link: "https://vk.com/video_ext.php?oid=-131964440&id=456239022&hash=16e8e0109ca6dc0b",
      thumbnailUrl: "https://sun9-46.userapi.com/Apgj59mBwKFyDk4f0ETKpIugEi3055OyZm8aFA/vrrRO65hv2Y.jpg",
      name: "Разработка протезов рук",
      uploadDate: new Date("October 03, 2024").toISOString(),
    },
    {
      link: "https://vk.com/video_ext.php?oid=-131964440&id=456239061&hash=5b13f9b42b508b22",
      thumbnailUrl: "https://i.mycdn.me/getVideoPreview?id=7078997265029&idx=4&type=39&tkn=t3lborNlES0gSgm7eZl4SGVwQlI&fn=vid_u",
      name: "Впечатления от I регионального молодёжного профориентационного форума Моя профессия — IT",
      uploadDate: new Date("October 14, 2024").toISOString(),
    },
      ],
};

export const VideoWidget = ({ title, description, videos }) => {
  // Используем переданные пропсы или дефолтные значения
  const widgetTitle = title || videosContent.title;
  const widgetDescription = description || videosContent.description;
  const widgetVideos = videos || videosContent.videos;
  
  const [selectedVideo, setSelectedVideo] = useState(widgetVideos[0]);

  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-8 mb-16 md:mb-32" id="videos">
      <VisibilityManager
        itemProp="name"
        as="h2"
        className="text-2xl md:text-5xl leading-8 md:leading-tight font-bold mb-5 md:mb-8 text-left md:text-center uppercase"
      >
        {widgetTitle}
      </VisibilityManager>

      <VisibilityManager
        as="p"
        className="w-full md:w-1/2 mx-auto text-left md:text-center text-font-secondary mb-10"
      >
        {widgetDescription}
      </VisibilityManager>

      <div className="flex flex-col-reverse md:flex-row mx-auto gap-8">
        <div className="w-full md:w-[35%] md:min-w-[350px]">
          <VideoList
            videos={widgetVideos}
            selectedVideo={selectedVideo}
            onVideoSelect={setSelectedVideo}
          />
        </div>
        <VisibilityManager className="w-full md:w-[65%]">
          <VideoPlayer video={selectedVideo} />
        </VisibilityManager>
      </div>
    </div>
  );
};
