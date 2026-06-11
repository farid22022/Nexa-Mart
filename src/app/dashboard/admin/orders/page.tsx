import { ManagementPage } from "@/components/management-page";
import { orders } from "@/lib/data";

export default function AdminOrdersPage() {
  return (
    <ManagementPage
      title="Order management"
      description="Orders table, order details, and refund management."
      primaryAction="Export report"
      stats={["42,809 orders", "418 open refunds", "96.2% on-time"]}
      rows={orders.map((order) => ({
        name: order.id,
        detail: order.customer,
        status: order.status,
        value: order.total,
      }))}
    />
  );
}
