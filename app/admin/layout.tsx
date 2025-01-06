import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed">
      <div className="p-4 font-bold text-lg">Admin Panel</div>
      <nav className="mt-4">
        <ul>
          <li className="p-2 hover:bg-gray-700">
            <Link href="/admin">🕒 Dashboard</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link href="/admin/products">📦 Products</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link href="/admin/orders">🛒 Orders</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link href="/admin/users">👥 Users</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link href="/admin/testimonials">💬 Testimonials</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link href="/admin/settings">⚙ Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
