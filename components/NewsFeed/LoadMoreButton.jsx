import styles from './NewsFeed.module.css';

export function LoadMoreButton({ onClick, disabled }) {
  return (
    <button
      className={styles.loadMore}
      onClick={onClick}
      disabled={disabled}
    >
      Читать дальше
    </button>
  );
}