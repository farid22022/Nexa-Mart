import type { ReactNode } from "react";

import { DashboardShell } from "@/components/dashboard-shell";
import { customerNav } from "@/lib/data";

export default function CustomerLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardShell
      title="Customer dashboard"
      subtitle="Profile, orders, rewards, wishlist, notifications"
      nav={customerNav}
    >
      {children}
    </DashboardShell>
  );
}
