import React from 'react';
import styles from './styles/LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick, disabled }) => {
  return (
    <button
      className={styles.loadMore}
      onClick={onClick}
      disabled={disabled}
    >
      Читать дальше
    </button>
  );
};

export default LoadMoreButton; 