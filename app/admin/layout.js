import "./admin.css";
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="admin-sidebar-title">Admin Panel</h2>
        <ul className="admin-nav">
          <li className="admin-nav-item">
            <Link href="/admin" className="admin-nav-link active">
              Submissions
            </Link>
          </li>
          {/* Add more nav items here in the future */}
        </ul>
      </aside>
      <main className="admin-content">
        {children}
      </main>
    </div>
  );
}
