import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import styles from "./VideosBlock.module.css";

import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";

export function VideosBlock() {
  return (
    <VisibilityManager classes={containerStyles.container}>
      <h2 className={containerStyles.container__title} id="videos">
        Оценить красоту момента помогает кино
      </h2>
      <p className={styles.videos__description}>
        Чтобы вы могли оценить нас, снимаем разные видео-ролики о компании, о
        людях
      </p>
      <ul className={styles.videos}>
        <VisibilityManager
          itemScope
          itemType="http://schema.org/VideoObject"
          side="topmax"
          classes={`${styles.videos__item} ${shadowStyles.shadow}`}
        >
          <meta itemProp="description" content="Процесс разработки протезов" />
          <meta itemProp="duration" content="" />
          <link itemProp="url" href="https://www.youtube.com/embed/2A6QQnWIc_o?si=wBFMxf9fYTWeHmgb" />
          <link
            itemProp="thumbnailUrl"
            href="https://i.ytimg.com/vi/2A6QQnWIc_o/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWihdMA8=&rs=AOn4CLDbq-_CPl922TAJ2xB1glAcPTMa-Q&quot"
          />
          <meta itemProp="name" content="О процессе разработки" />
          <meta itemProp="uploadDate" content="" />
          <meta itemProp="isFamilyFriendly" content="true" />
          <span
            style={{ display: 'none' }}
            itemProp="thumbnail"
            itemScope
            itemType="http://schema.org/ImageObject"
          >
            <img
              itemProp="contentUrl"
              src="https://i.ytimg.com/vi/2A6QQnWIc_o/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWihdMA8=&rs=AOn4CLDbq-_CPl922TAJ2xB1glAcPTMa-Q&quot"
            />
          </span>
          <iframe
            itemProp="embedUrl"
            className={styles.videos__frame}
            src="https://www.youtube.com/embed/2A6QQnWIc_o?si=wBFMxf9fYTWeHmgb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VisibilityManager>
        <VisibilityManager
          itemScope
          itemType="http://schema.org/VideoObject"
          side="topmax"
          classes={`${styles.videos__item} ${shadowStyles.shadow}`}
        >
          <meta itemProp="description" content="Первая часть серии роликов о компании Модеста" />
          <meta itemProp="duration" content="" />
          <link itemProp="url" href="https://www.youtube.com/embed/3PvROXkoezI?si=L9emIEvrY5ZRlPIM" />
          <link
            itemProp="thumbnailUrl"
            href="https://i.ytimg.com/vi/3PvROXkoezI/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXSg_MA8=&rs=AOn4CLDxhFsGOxX-DCHoglrZRGRomFR_oQ&quot"
          />
          <meta itemProp="name" content="Модеста. Часть 1" />
          <meta itemProp="uploadDate" content="" />
          <meta itemProp="isFamilyFriendly" content="true" />
          <span
            style={{ display: 'none' }}
            itemProp="thumbnail"
            itemScope
            itemType="http://schema.org/ImageObject"
          >
            <img
              itemProp="contentUrl"
              src="https://i.ytimg.com/vi/3PvROXkoezI/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXSg_MA8=&rs=AOn4CLDxhFsGOxX-DCHoglrZRGRomFR_oQ&quot"
            />
          </span>
          <iframe
            itemProp="embedUrl"
            className={styles.videos__frame}
            src="https://www.youtube.com/embed/3PvROXkoezI?si=L9emIEvrY5ZRlPIM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <meta itemProp="allowEmbed" content="true"></meta>
        </VisibilityManager>
      </ul>
    </VisibilityManager>
  );
}
