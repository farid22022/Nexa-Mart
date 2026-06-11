import {
  Leaf,
  Battery,
  Sun,
  Ship,
  FileBarChart,
  BarChart3,
} from "lucide-react";

import { PageHero } from "@/components/enterprise/page-hero";
import { FeatureCard } from "@/components/enterprise/feature-card";
import { KpiCard } from "@/components/enterprise/kpi-card";

const features = [
  {
    title: "Carbon Dashboard",
    description: "Track emissions across logistics operations.",
    icon: Leaf,
  },
  {
    title: "Electric Fleet",
    description: "Transition to sustainable transportation.",
    icon: Battery,
  },
  {
    title: "Solar Warehouses",
    description: "Renewable energy powered facilities.",
    icon: Sun,
  },
  {
    title: "Green Shipping",
    description: "Reduce environmental impact.",
    icon: Ship,
  },
  {
    title: "Sustainability Reports",
    description: "Transparent reporting and insights.",
    icon: FileBarChart,
  },
  {
    title: "ESG Metrics",
    description: "Environmental, social and governance KPIs.",
    icon: BarChart3,
  },
];

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">

      <PageHero
        badge="GREEN LOGISTICS"
        title="Sustainability"
        description="Build a cleaner and more sustainable logistics ecosystem."
      />

      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KpiCard title="Carbon Saved" value="18%" />
          <KpiCard title="Fleet Electrification" value="42%" />
          <KpiCard title="Renewable Energy" value="67%" />
          <KpiCard title="Green Deliveries" value="1.2M" />
        </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <div className="h-[500px] border rounded-xl flex items-center justify-center">
          Green Energy Flowing Through Logistics Network
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

    </main>
  );
}