import styles from "./sidebar.module.css";
import Image from "next/image";
import {
  IoLogoReact,
  IoBrowsersOutline,
  IoCalculator,
  IoHeartOutline,
} from "react-icons/io5";
import { MdCatchingPokemon } from "react-icons/md";
import SidebarMenuItem from "./menu-item/SidebarMenuItem";


const menuItems = [
  {
    icon: <IoBrowsersOutline style={{ width: "37px", height: "37px" }} />,
    title: "Dashboard",
    subtitle: "Data Overview",
    path: "/dashboard/main",
  },
  {
    icon: <IoCalculator style={{ width: "37px", height: "37px" }} />,
    title: "Counter",
    subtitle: "Counter Manager",
    path: "/dashboard/counter",
  },
  {
    icon: <MdCatchingPokemon style={{ width: "37px", height: "37px" }} />,
    title: "Pokemons",
    subtitle: "Generación estatica",
    path: "/dashboard/pokemons",
  },
  {
    icon: <IoHeartOutline style={{ width: "37px", height: "37px" }} />,
    title: "Pokemones favoritos",
    subtitle: "Global state",
    path: "/dashboard/favorites",
  },
];
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className="">
        <div
          id="menu"
          className={`bg-gray-900  z-10 text-slate-300 fixed left-0 h-screen ${styles.sidebar}`}
        >
          <div id="logo" className="my-4 px-6">
            <h1 className={`text-lg md:text-2xl font-bold text-white   ${styles.logo__container}`}><IoLogoReact /><span className="text-blue-500">Dash</span></h1>
            <p className="text-slate-500 text-sm">Manage your actions and activities</p>
          </div>
          <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
              <span>
                <Image
                  className="rounded-full w-8 h-8"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                  alt="User profile picture"
                  width={50}
                  height={50}   
                />
              </span>
              <span className="text-sm md:text-base font-bold">
                Antonio Ramirez
              </span>
            </a>
          </div>
          <div id="nav" className="w-full px-6">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path} {...item} />
          ))}

          </div>
        </div>
      </div>
    </div>
  );
}