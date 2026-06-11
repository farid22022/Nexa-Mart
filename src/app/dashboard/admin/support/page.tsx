import { ManagementPage } from "@/components/management-page";

export default function AdminSupportPage() {
  return (
    <ManagementPage
      title="Support management"
      description="Support tickets, customer chat, and complaints."
      primaryAction="Assign tickets"
      stats={["86 open tickets", "12 live chats", "4 escalations"]}
      rows={[
        { name: "Ticket #8842", detail: "Late delivery", status: "Open", value: "High" },
        { name: "Ticket #8841", detail: "Refund request", status: "Escalated", value: "Critical" },
        { name: "Customer chat", detail: "Checkout question", status: "Active", value: "12 waiting" },
        { name: "Complaint queue", detail: "Vendor issue", status: "Review", value: "4 open" },
      ]}
    />
  );
}
