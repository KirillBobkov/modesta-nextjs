import { useState } from 'react';
import data from '../content/news.json';

const COUNT = 5;
const LOAD_COUNT = 5;
export function useNews() {
  const [news, setNews] = useState(data.slice(0, COUNT));

  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    const nextShown = news.length + LOAD_COUNT;

    if (data.length <= news.length) {
        setHasMore(false);
    } else {
        setNews(prev => [...prev, ...data.slice(news.length, nextShown)])
    }
  };

  return {
    news,
    hasMore,
    loadMore
  };
}