import React from 'react';
import { VisibilityManager } from '../VisibilityManager';
import MediaGrid from './MediaGrid';
import NewsStats from './NewsStats';


const NewsItem = ({ item }) => {
  return (
    <VisibilityManager as="article" className="mb-15 lg:mb-25 text-left bg-[var(--card-bg-color)] py-5 rounded-3xl w-full shadow-lg">
      <div className="flex justify-between items-center mb-5">
        <time className="text-base text-[var(--secondary-font-color)] leading-5 uppercase ml-5 lg:text-xl lg:leading-6">{item.date}</time>
        <NewsStats
          views={item.viewsCount}
          likes={item.likesCount}
          comments={item.commentsCount}
        />
      </div>
      <MediaGrid attachments={item.attachments} />
      <p className="whitespace-pre-wrap leading-relaxed mb-4 text-[var(--secondary-font-color)] px-5 w-full">{formatTextWithLinks(item.text)}</p>
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
              className="cursor-pointer text-accent"
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