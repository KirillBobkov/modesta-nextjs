import React from 'react';

const LoadMoreButton = ({ onClick, disabled }) => {
  return (
    <button
      className="border-none py-2.5 px-7.5 text-base font-bold uppercase rounded-3xl text-black fill-black bg-accent transition-all duration-500 ease-out hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      Читать дальше
    </button>
  );
};

export default LoadMoreButton; 