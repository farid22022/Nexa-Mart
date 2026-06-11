import { ManagementPage } from "@/components/management-page";
import { products } from "@/lib/data";

export default function InventoryPage() {
  return (
    <ManagementPage
      title="Inventory management"
      description="Stock monitoring, reorder points, and low stock alerts."
      primaryAction="Create purchase order"
      stats={["24 low stock", "7 pre-orders", "91% fill rate"]}
      rows={products.slice(0, 6).map((product, index) => ({
        name: product.name,
        detail: `${product.category} inventory`,
        status: index % 2 === 0 ? "Low stock" : product.stock,
        value: `${32 + index * 7} units`,
      }))}
    />
  );
}
