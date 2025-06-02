"use client";
import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap justify-between  gap-y-9">
      <SimpleWidget
        count={count}
        title="Contador"
        subtitle="contador redux"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
      <SimpleWidget
        count={count}
        title="Contador"
        subtitle="contador redux"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
