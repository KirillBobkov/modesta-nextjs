import { MediaGrid } from "./MediaGrid";
import { NewsStats } from "./NewsStats";
import styles from "./NewsFeed.module.css";
import { VisibilityManager } from "../VisibilityManager";

export function NewsItem({ item }) {
  return (
    <VisibilityManager as="article" className={styles.newsItem}>
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
}

function formatTextWithLinks(text) {
  // Регулярное выражение для поиска ссылок вида [URL|текст]
  const regex = /\[([^\]|]+)\|([^\]]+)\]/g;

  // Функция для проверки, является ли строка исключением (#alias)
  const isAlias = (str) => str.startsWith("[#alias");

  // Заменяем только те части текста, которые соответствуют формату [URL|текст]
  return (
    <>
      {text.split(/(\[[^\]]+\])/).map((part, index) => {
        // Если часть текста является исключением (#alias), оставляем её как есть
        if (isAlias(part)) {
          return <span key={index}>{part}</span>;
        }

        // Если часть текста соответствует формату [URL|текст], преобразуем её в ссылку
        const match = part.match(/^\[([^\]|]+)\|([^\]]+)\]$/);
        if (match) {
          const url = match[1]; // URL
          const title = match[2]; // Текст ссылки
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

        // Возвращаем обычный текст
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
