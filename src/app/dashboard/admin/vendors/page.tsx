import { ManagementPage } from "@/components/management-page";

export default function AdminVendorsPage() {
  return (
    <ManagementPage
      title="Vendor management"
      description="Approve vendors, suspend stores, and review vendor analytics."
      primaryAction="Review applications"
      stats={["42 awaiting approval", "8 suspended", "94% SLA compliance"]}
      rows={[
        { name: "UrbanTech Store", detail: "Electronics", status: "Approve vendor", value: "$84K" },
        { name: "Solace Beauty", detail: "Beauty", status: "Verified", value: "$32K" },
        { name: "Avenue Bags", detail: "Travel", status: "Analytics review", value: "$18K" },
        { name: "Alpine Row", detail: "Apparel", status: "Compliant", value: "$27K" },
      ]}
    />
  );
}
