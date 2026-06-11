import { ChartCard } from "@/components/chart-card";
import { StatsCard } from "@/components/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminStats, performanceData, salesData } from "@/lib/data";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {adminStats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard title="Revenue analytics" data={salesData} />
        <ChartCard title="Sales analytics" data={salesData} variant="bar" />
        <ChartCard title="User growth" data={salesData} />
        <ChartCard title="Product performance" data={performanceData} variant="bar" />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Control center</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          {["Vendor approvals", "Refund management", "Campaign schedule"].map((item) => (
            <div key={item} className="rounded-lg border bg-background p-4 text-sm font-medium">
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
