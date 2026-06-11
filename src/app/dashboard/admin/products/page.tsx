import { ManagementPage } from "@/components/management-page";

export default function AdminProductsPage() {
  return (
    <ManagementPage
      title="Product management"
      description="Products, categories, brands, attributes, and reviews."
      primaryAction="Add category"
      stats={["98K products", "42 categories", "12K pending reviews"]}
      rows={[
        { name: "Products", detail: "Catalog moderation", status: "Healthy", value: "98K" },
        { name: "Categories", detail: "Navigation taxonomy", status: "Active", value: "42" },
        { name: "Brands", detail: "Brand registry", status: "Verified", value: "914" },
        { name: "Reviews", detail: "Customer feedback", status: "Pending", value: "12K" },
      ]}
    />
  );
}
