import React from 'react';
import { VisibilityManager } from '../VisibilityManager';
import MediaGrid from './MediaGrid';
import NewsStats from './NewsStats';
import styles from './styles/NewsItem.module.css';


const NewsItem = ({ item }) => {
  return (
            <VisibilityManager as="article" className={styles.newsItem + " shadow-lg"}>
      <div className={styles.header}>
        <time className={styles.date}>{item.date}</time>
        <NewsStats
          views={item.viewsCount}
          likes={item.likesCount}
          comments={item.commentsCount}
        />
      </div>
      <MediaGrid attachments={item.attachments} />
      <p className={styles.text}>{formatTextWithLinks(item.text)}</p>
    </VisibilityManager>
  );
};

/**
 * Formats text and converts links of format [URL|text] into actual link elements
 */
const formatTextWithLinks = (text) => {
  // Regex for finding links in format [URL|text]
  const regex = /\[([^\]|]+)\|([^\]]+)\]/g;

  // Function to check if string is an alias (#alias)
  const isAlias = (str) => str.startsWith("[#alias");

  // Split text by potential link markers and process each part
  return (
    <>
      {text.split(/(\[[^\]]+\])/).map((part, index) => {
        // If part is an alias, return as is
        if (isAlias(part)) {
          return <span key={index}>{part}</span>;
        }

        // If part matches link format, convert to link
        const match = part.match(/^\[([^\]|]+)\|([^\]]+)\]$/);
        if (match) {
          const url = match[1]; // URL
          const title = match[2]; // Link text
          return (
            <a
              style={{ cursor: "pointer", color: "var(--accent)" }}
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          );
        }

        // Return regular text
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

export default NewsItem; 