import { ManagementPage } from "@/components/management-page";

export default function AdminUsersPage() {
  return (
    <ManagementPage
      title="User management"
      description="Customers, vendors, staff, roles, and permissions."
      primaryAction="Invite staff"
      stats={["284K customers", "1,284 vendors", "18 permission roles"]}
      rows={[
        { name: "Customers", detail: "Retail accounts", status: "Active", value: "284K" },
        { name: "Vendors", detail: "Marketplace sellers", status: "Reviewing", value: "1,284" },
        { name: "Staff", detail: "Operations team", status: "Active", value: "64" },
        { name: "Roles", detail: "Access groups", status: "Configured", value: "18" },
      ]}
    />
  );
}
