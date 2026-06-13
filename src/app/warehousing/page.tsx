import { FeatureCard } from "@/components/enterprise/feature-card";
import {
  BarChart3,
  Boxes,
  Calculator,
  CalendarPlus,
  Database,
  Warehouse,
} from "lucide-react";
import { WarehouseStat } from "@/components/enterprise/warehouse-stat";

const warehouseFeatures = [
  {
    title: "Warehouse Finder",
    description:
      "Locate warehouses by region, capacity, and service capabilities.",
    icon: Warehouse,
  },
  {
    title: "Inventory Dashboard",
    description: "Monitor stock levels, movements, and inventory performance.",
    icon: Boxes,
  },
  {
    title: "Storage Calculator",
    description: "Estimate storage requirements and warehouse utilization.",
    icon: Calculator,
  },
  {
    title: "Capacity Availability",
    description: "Track available warehouse capacity in real time.",
    icon: Database,
  },
  {
    title: "Space Booking",
    description: "Reserve warehouse space and manage allocations.",
    icon: CalendarPlus,
  },
  {
    title: "Warehouse Analytics",
    description: "Gain insights from operational and inventory KPIs.",
    icon: BarChart3,
  },
];

export default function WarehousingPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-6">Smart Warehousing</h1>

        <p className="text-muted-foreground max-w-3xl mb-12">
          AI-powered warehousing, inventory visibility, robotic automation, and
          scalable storage solutions.
        </p>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          <WarehouseStat title="Warehouses" value="420+" />
          <WarehouseStat title="Countries" value="67" />
          <WarehouseStat title="Storage Capacity" value="5.8M m²" />
          <WarehouseStat title="Inventory Accuracy" value="99.8%" />
        </div>

        <div className="h-[500px] border rounded-xl overflow-hidden bg-muted/20" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {warehouseFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>
    </main>
  );
}