"use client";
import { increment, decrement, setCount } from "@/store/counter/counterSlice";
import styles from "./cart-counter.module.css";

import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";

/* interface CartCounterProps {
  readonly initialCount?: number;
} */

interface CounterResponse {
  count: number;
}

const getApicounter = async () => {
  const response = await fetch("/api/counter");
  if (!response.ok) {
    throw new Error("Error al obtener el contador");
  }
  const data: CounterResponse = await response.json();
  return data;
};

export default function CartCounter() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const valorGuardado = localStorage.getItem("count");
      if (valorGuardado) {
        dispatch(setCount(Number(valorGuardado)));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    getApicounter().then((data) => {
      dispatch(setCount(data.count));
    });
  }, [dispatch]);

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
  );
}
