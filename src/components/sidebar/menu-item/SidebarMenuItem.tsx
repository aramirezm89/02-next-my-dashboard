/* import styles from "./sidebar-menuitem.module.css" */
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";


interface Props {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    path: string;

}
export default function SidebarMenuItem({icon,title,subtitle,path}: Props) {
    const pathname = usePathname();
 
    const isActive = pathname === path;
  
  return (
    <Link

    href={path}
    className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${isActive ? "bg-blue-800" : ""}`}
  >
    <div >
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-lg font-bold leading-5 text-white">
        {title}
      </span>
      <span className="text-sm text-white/50  md:block mt-1">
        {subtitle}
      </span>
    </div>
  </Link>
  )
}
