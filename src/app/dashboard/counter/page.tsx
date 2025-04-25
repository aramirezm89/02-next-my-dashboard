'use client';
import { useState } from 'react';
import styles from "./counter.module.css";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <h1 className={styles.title}>Counter Page</h1>
      
      <div className={styles.buttons}>
        <button
          className={styles.decrementButton}
          onClick={() => setCount(prev => prev - 1)}
        >
          -1
        </button>

        <span className={styles.count}>{count}</span>

        <button
          className={styles.incrementButton}
          onClick={() => setCount(prev => prev + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
}