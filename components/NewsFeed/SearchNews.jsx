import React from 'react';
import { VisibilityManager } from '../VisibilityManager';

const SearchNews = ({ value, onChange }) => {
  return (
    <VisibilityManager className="relative w-full rounded-b-2xl transition-all duration-300 mb-4 md:rounded-2xl md:mb-0">
      <div className="text-sm font-semibold mb-2 text-[var(--font-color)]">Поиск новостей</div>
      <div className="relative flex items-center mb-5 rounded-2xl shadow-lg">
        <span className="absolute left-3 text-[var(--secondary-font-color)] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <input
          type="text"
          className="w-full text-base border-2 border-[var(--card-bg-color)] box-border leading-6 py-1 px-4 pl-9 block bg-[var(--card-bg-color)] rounded-2xl transition-all duration-300 ease-in-out focus:border-accent focus:outline-none placeholder:text-[var(--secondary-font-color)] dark:[color-scheme:dark]"
          placeholder="Поиск по новостям..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {value && (
          <button 
            className="absolute right-2.5 bg-none border-none text-2xl cursor-pointer text-[var(--secondary-font-color)] flex items-center justify-center w-6 h-6 rounded-full hover:bg-black/10"
            onClick={() => onChange('')}
            aria-label="Очистить поиск"
          >
            ×
          </button>
        )}
      </div>
    </VisibilityManager>
  );
};

export default SearchNews; 