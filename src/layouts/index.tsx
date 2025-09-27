import { Outlet } from 'umi';
import '../../tailwind.css';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
    </div>
  );
}
