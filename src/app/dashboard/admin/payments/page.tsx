import { ManagementPage } from "@/components/management-page";

export default function AdminPaymentsPage() {
  return (
    <ManagementPage
      title="Payment management"
      description="Transactions, settlements, and refunds."
      primaryAction="Create settlement"
      stats={["$1.42M processed", "$218K pending settlement", "418 refunds"]}
      rows={[
        { name: "Stripe", detail: "Card gateway", status: "Operational", value: "$612K" },
        { name: "SSLCommerz", detail: "Local gateway", status: "Operational", value: "$342K" },
        { name: "bKash", detail: "Mobile wallet", status: "Reconciling", value: "$221K" },
        { name: "Cash On Delivery", detail: "Offline collection", status: "Pending", value: "$89K" },
      ]}
    />
  );
}
