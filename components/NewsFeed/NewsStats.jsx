import styles from './NewsFeed.module.css';

export function NewsStats({ views, likes }) {
  return (
    <div className={styles.stats}>
      <span>👁 {views}</span>
      <span>❤️ {likes}</span>
    </div>
  );
}