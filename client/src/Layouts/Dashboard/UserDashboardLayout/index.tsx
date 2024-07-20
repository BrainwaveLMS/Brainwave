import { ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
}

function UserDashboardLayout({ children }: DashboardProps) {
  return (
    <div className="container">
      <main className="main">{children}</main>
    </div>
  );
}

export default UserDashboardLayout;
