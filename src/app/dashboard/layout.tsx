import Sidebar from "../components/sidebar/Sidebar";
import styles from "./dashboard-layout.module.css";
export default function DashboardPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.root__layout}>
      <Sidebar />
      <main className="main"> {children}</main>
    </div>
  );
}