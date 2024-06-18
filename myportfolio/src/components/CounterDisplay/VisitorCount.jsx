
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './VisitorCount.module.css';

const VisitorCount = () => {
  const visitorCount = useSelector((state) => state.visitor.count);

  return (
<div className={styles.visitorCountContainer}>
      <h2 className={styles.visitorCountValue}>Number of Visitors 👀: {visitorCount}</h2>
    </div>
  );
};

export default VisitorCount;
