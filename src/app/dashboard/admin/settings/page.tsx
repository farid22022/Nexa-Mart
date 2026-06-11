import { ManagementPage } from "@/components/management-page";

export default function AdminSettingsPage() {
  return (
    <ManagementPage
      title="Settings"
      description="General, store, payment, shipping, tax, and email settings."
      primaryAction="Save changes"
      stats={["8 payment methods", "12 shipping zones", "6 email templates"]}
      rows={[
        { name: "General settings", detail: "Store identity", status: "Configured", value: "Global" },
        { name: "Payment settings", detail: "Gateways", status: "8 active", value: "Healthy" },
        { name: "Shipping settings", detail: "Zones and rates", status: "Configured", value: "12 zones" },
        { name: "Tax settings", detail: "Regional rules", status: "Review", value: "4 regions" },
        { name: "Email settings", detail: "Transactional templates", status: "Active", value: "6 templates" },
      ]}
    />
  );
}
