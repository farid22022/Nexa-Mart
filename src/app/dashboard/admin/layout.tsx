import type { ReactNode } from "react";

import { DashboardShell } from "@/components/dashboard-shell";
import { adminNav } from "@/lib/data";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardShell
      title="Admin dashboard"
      subtitle="Enterprise operations, marketplace controls, reporting"
      nav={adminNav}
    >
      {children}
    </DashboardShell>
  );
}
