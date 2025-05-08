import { useState, useMemo, useDeferredValue } from 'react';
import data from '../content/news.json';

const COUNT = 5;
const LOAD_COUNT = 5;

export function useNews() {
  const [searchQueryValue, setSearchQuery] = useState('');
  const searchQuery = useDeferredValue(searchQueryValue);
  
  // Filter news data based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data;
    
    const query = searchQuery.toLowerCase().trim();
    return data.filter(item => 
      item.text.toLowerCase().includes(query) || 
      (item.date && item.date.toLowerCase().includes(query))
    );
  }, [searchQuery]);
  
  const [news, setNews] = useState(filteredData.slice(0, COUNT));
  const [hasMore, setHasMore] = useState(true);
  
  // Reset displayed news when search query changes
  const handleSearch = (query) => {
    setSearchQuery(query);
    const newFilteredData = query.trim() === '' 
      ? data 
      : data.filter(item => 
          item.text.toLowerCase().includes(query.toLowerCase()) || 
          (item.date && item.date.toLowerCase().includes(query.toLowerCase()))
        );
    
    setNews(newFilteredData.slice(0, COUNT));
    setHasMore(newFilteredData.length > COUNT);
  };

  const loadMore = () => {
    const nextShown = news.length + LOAD_COUNT;

    if (filteredData.length <= news.length) {
      setHasMore(false);
    } else {
      setNews(prev => [...prev, ...filteredData.slice(news.length, nextShown)]);
    }
  };

  return {
    news,
    hasMore,
    loadMore,
    searchQuery,
    handleSearch,
    totalCount: filteredData.length
  };
}