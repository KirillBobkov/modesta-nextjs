import React from "react";
import { useNews } from "../../hooks/useNews.jsx";
import NewsItem from "./NewsItem";
import LoadMoreButton from "./LoadMoreButton";
import SearchNews from "./SearchNews";

const NewsFeed = () => {
  const { news, hasMore, loadMore, searchQuery, handleSearch, totalCount } =
    useNews();

  const searchResultsIndicator = (
    <div className="mb-6 py-3 px-4 bg-card-bg-color rounded-3xl text-secondary-font-color text-sm text-center">
      Найдено результатов: {totalCount}
    </div>
  );

  return (
    <div className="flex relative gap-12 px-5 w-full mx-auto lg:px-10 lg:max-w-screen-xl">
      <div className="flex-1 max-w-4xl mx-auto rounded-none bg-bg-color lg:rounded-2xl">
        {/* On mobile devices, search is displayed here */}
        <div className="md:hidden mb-6">
          <SearchNews value={searchQuery} onChange={handleSearch} />
          {news.length > 0 && searchQuery && searchResultsIndicator}
        </div>

        {news.length === 0 ? (
          <div className="text-center p-8 bg-card-bg-color rounded-3xl text-secondary-font-color text-lg">
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

      {/* On desktop, search is displayed here */}
      <div className="hidden md:block w-72">
        <SearchNews value={searchQuery} onChange={handleSearch} />
        {news.length > 0 && searchQuery && searchResultsIndicator}
      </div>
    </div>
  );
};

export default NewsFeed;
