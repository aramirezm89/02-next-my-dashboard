
import Link from "next/link";
import { IoCafeOutline } from "react-icons/io5";

interface SimpleWidgetProps {
  count?: number; // Título del widget  
  title: string; // Título del widget
  subtitle?: string; // Subtítulo del widget
 
  icon?: React.ReactNode; // Icono del widget
  href?: string; // Enlace del widget

}

export const SimpleWidget = ({count,title,href,icon, subtitle} : SimpleWidgetProps) => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-600 text-center">{title}</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon" >
              {/* Icono irá aquí */}
              {icon ?? <IoCafeOutline size={50} />}
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{count}</h4>
              <p className="text-xs text-gray-500">{subtitle ?? 'Subtitulo'}</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          <Link href={href ?? '#'} className="text-indigo-600 text-xs font-medium">
            Más
          </Link>
        </div>
      </div>
    </div>
  );
};
