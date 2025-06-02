
import { WidgetGrid } from "@/components/dashboard/WidgetGrid";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard with various widgets and features',
};
export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
      <span className="text-gray-600">Información general</span>

      <div className="flex flex-wrap justify-between  gap-y-9">
        <WidgetGrid/>
      </div>
    </div>
  );
}
