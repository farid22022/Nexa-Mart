import type { ReactNode } from "react";

import { DashboardShell } from "@/components/dashboard-shell";
import { vendorNav } from "@/lib/data";

export default function VendorLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardShell
      title="Vendor dashboard"
      subtitle="Revenue, products, orders, inventory"
      nav={vendorNav}
    >
      {children}
    </DashboardShell>
  );
}
