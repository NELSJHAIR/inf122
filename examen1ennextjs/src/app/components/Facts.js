"use client"
import React from 'react';
import styles from './Facts.module.css';
function Facts()  {
  return (
    <div className={styles.facts}>
        <div className={styles.factItem}>
            <h2>0</h2>
            <p>Years of work experience</p>
        </div>
        <div className={styles.factItem}>
            <h2>0</h2>
            <p>Completed projects</p>
        </div>
        <div className={styles.factItem}>
            <h2>0</h2>
            <p>Satisfied customers</p>
        </div>
    </div>
  );
};

export default Facts;
