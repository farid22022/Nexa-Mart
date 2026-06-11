import { ManagementPage } from "@/components/management-page";

export default function AdminReportsPage() {
  return (
    <ManagementPage
      title="Reports"
      description="Sales, customer, vendor, and inventory reports."
      primaryAction="Generate report"
      stats={["Daily sales ready", "Vendor report queued", "Inventory variance 1.8%"]}
      rows={[
        { name: "Sales report", detail: "Revenue and conversion", status: "Ready", value: "$1.42M" },
        { name: "Customer report", detail: "Cohorts and retention", status: "Ready", value: "284K" },
        { name: "Vendor report", detail: "Payout and SLA", status: "Queued", value: "1,284" },
        { name: "Inventory report", detail: "Stock movement", status: "Ready", value: "98K SKUs" },
      ]}
    />
  );
}
