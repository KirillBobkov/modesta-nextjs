import { MediaGrid } from './MediaGrid';
import { NewsStats } from './NewsStats';
import styles from './NewsFeed.module.css';

import shadowStyles from '../../styles/shadow.module.css';

export function NewsItem({ item }) {
  return (
    <article className={styles.newsItem + ' ' + shadowStyles.shadow}>
      <div className={styles.header}>
        <time className={styles.date}>{item.date}</time>
        <NewsStats
          views={item.viewsCount}
          likes={item.likesCount}
          comments={item.commentsCount}
        />
      </div>
      
      <p className={styles.text}>{item.text}</p>
      
      <MediaGrid attachments={item.attachments} />
    </article>
  );
}