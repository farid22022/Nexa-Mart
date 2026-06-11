import { ManagementPage } from "@/components/management-page";

export default function AdminMarketingPage() {
  return (
    <ManagementPage
      title="Marketing management"
      description="Coupons, campaigns, flash sales, and banners."
      primaryAction="Create campaign"
      stats={["18 active coupons", "4 flash sales", "9 banner placements"]}
      rows={[
        { name: "Summer Drop", detail: "Campaign", status: "Live", value: "18.4% CTR" },
        { name: "WELCOME15", detail: "Coupon", status: "Active", value: "1,240 redemptions" },
        { name: "Weekend Flash", detail: "Flash sale", status: "Scheduled", value: "$42K forecast" },
        { name: "Hero Banner A", detail: "Homepage", status: "Testing", value: "Variant B wins" },
      ]}
    />
  );
}
