import { ManagementPage } from "@/components/management-page";
import { orders } from "@/lib/data";

export default function VendorOrdersPage() {
  return (
    <ManagementPage
      title="Vendor order management"
      description="Pending, processing, delivered, and refund request queues."
      primaryAction="Export orders"
      stats={["18 pending orders", "42 processing", "4 refund requests"]}
      rows={orders.map((order) => ({
        name: order.id,
        detail: order.customer,
        status: order.status,
        value: order.total,
      }))}
    />
  );
}
