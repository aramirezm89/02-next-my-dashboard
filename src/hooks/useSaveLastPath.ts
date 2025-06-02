// hooks/useSaveLastPath.ts
'use client';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const useSaveLastPath = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && typeof window !== "undefined") {
      // Excluye rutas como /login o /register si no quieres guardarlas
      if (!pathname.startsWith("/login")) {
        localStorage.setItem("lastPath", pathname);
      }
    }
  }, [pathname]);
};
