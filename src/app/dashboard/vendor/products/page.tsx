import { ManagementPage } from "@/components/management-page";
import { products } from "@/lib/data";

export default function VendorProductsPage() {
  return (
    <ManagementPage
      title="Product management"
      description="Product table with add, edit, delete, and bulk action UI."
      primaryAction="Add product"
      stats={["312 active products", "24 low stock alerts", "8 drafts waiting"]}
      rows={products.slice(0, 6).map((product) => ({
        name: product.name,
        detail: product.category,
        status: product.stock,
        value: `$${product.price}`,
      }))}
    />
  );
}
