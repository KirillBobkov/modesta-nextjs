import { MediaGrid } from './MediaGrid';
import { NewsStats } from './NewsStats';
import styles from './NewsFeed.module.css';
import { VisibilityManager } from '../VisibilityManager';

import shadowStyles from '../../styles/shadow.module.css';

export function NewsItem({ item }) {
  return (
    <VisibilityManager as='article' className={styles.newsItem}>
           <div className={styles.header}>
        <time className={styles.date}>{item.date}</time>
        <NewsStats
          views={item.viewsCount}
          likes={item.likesCount}
          comments={item.commentsCount}
        />
      </div>
      <MediaGrid attachments={item.attachments} />
      <p className={styles.text}>{item.text}</p>
    </VisibilityManager>
  );
}