import React from "react";
import { useNews } from "../../hooks/useNews.jsx";
import NewsItem from "./NewsItem";
import LoadMoreButton from "./LoadMoreButton";
import SearchNews from "./SearchNews";
import styles from "./styles/NewsFeed.module.css";

const NewsFeed = () => {
  const { news, hasMore, loadMore, searchQuery, handleSearch, totalCount } =
    useNews();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* На мобильных устройствах поиск отображается здесь */}
        <div className={styles.mobileSearchContainer}>
          <SearchNews value={searchQuery} onChange={handleSearch} />
          {news.length > 0 && searchQuery && (
            <div className={styles.searchResults}>
              Найдено результатов: {totalCount}
            </div>
          )}
        </div>

        {news.length === 0 ? (
          <div className={styles.noResults}>
            Новости не найдены. Попробуйте изменить поисковый запрос.
          </div>
        ) : (
          <>
            {news.map((item) => (
              <NewsItem key={item.id} item={item} />
            ))}

            {hasMore && <LoadMoreButton onClick={loadMore} />}
          </>
        )}
      </div>

      {/* На десктопе поиск отображается здесь */}
      <div className={styles.desktopSearchContainer}>
        <SearchNews value={searchQuery} onChange={handleSearch} />
        {news.length > 0 && searchQuery && (
          <div className={styles.searchResults}>
            Найдено результатов: {totalCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
