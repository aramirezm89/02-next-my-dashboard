"use client";
import React, { useEffect, useRef } from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppDispatch, useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";
import { setCount } from "@/store/counter/counterSlice";

export const WidgetGrid = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref para almacenar el ID del intervalo
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const valorGuardado = localStorage.getItem("count");
      if (valorGuardado) {
        dispatch(setCount(Number(valorGuardado)));
      }
    }
  }, []);

  useEffect(() => {
    changeColor();

    return () => {
      stopTextColor(); // Detener el intervalo al desmontar el componente
    };
  }, []);

  function changeColor() {
    intervalRef.current ??= setInterval(flashText, 1000);
  }

  function flashText() {
    const oElem = document.getElementById("box");
    if (oElem!.className.includes("go")) {
      oElem!.className = "stop flex flex-wrap justify-between  gap-y-9";
    } else {
      oElem!.className = "go flex flex-wrap justify-between  gap-y-9";
    }
  }

  function stopTextColor() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Liberar el intervalo
    }
  }

  return (
    <div id="box" className="flex flex-wrap justify-between  gap-y-9">
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
