// Update the import path below to the correct relative path for CartCounter

import { CartCounter } from "@/shooping-cart/components";
import styles from "./counter.module.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter app",
  description: "Counter app",
};
export default function CounterPage() {
  return (
    <div className={styles.counter}>
      <h1 className={styles.title}>Counter Page</h1>
      <CartCounter  />
    </div>
  );
}
