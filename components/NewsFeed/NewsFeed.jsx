import { NewsItem } from './NewsItem';
import { LoadMoreButton } from './LoadMoreButton';
import { useNews } from '../../hooks/useNews';
import styles from './NewsFeed.module.css';
import containerStyles from "../../styles/container.module.css";


export function NewsFeed() {
  const { news, hasMore, loadMore } = useNews();

  return (
    <div className={styles.container}>
      <h2 className={containerStyles.container__title}>Новости</h2>
      {news.map(item => (
        <NewsItem key={item.id} item={item} />
      ))}     
      {hasMore && (
        <LoadMoreButton onClick={loadMore} />
      )}
    </div>
  );
}