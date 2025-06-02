'use client';
import { increment, decrement, setCount } from '@/store/counter/counterSlice';
import styles from "./cart-counter.module.css";

import { useAppDispatch, useAppSelector } from '@/store';
import { useEffect } from "react";

interface CartCounterProps {
  readonly initialCount?: number;
}
export default function CartCounter({ initialCount }: CartCounterProps) {
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (initialCount) {
            dispatch(setCount(initialCount));
        }
    }, [initialCount, dispatch]);
    
  
  return (
    <div className={styles.buttons}>
    <button
      className={styles.decrementButton}
      onClick={() => dispatch(decrement())}
    >
      -1
    </button>

    <span className={styles.count}>{count}</span>

    <button
      className={styles.incrementButton}
      onClick={() => dispatch(increment())}
    >
      +1
    </button>
  </div>
  )
}
