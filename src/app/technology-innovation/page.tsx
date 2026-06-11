import {
  Brain,
  Cpu,
  Radio,
  Link2,
  Network,
  TrendingUp,
  Warehouse,
} from "lucide-react";

import { PageHero } from "@/components/enterprise/page-hero";
import { FeatureCard } from "@/components/enterprise/feature-card";

const features = [
  {
    title: "AI Logistics",
    description: "AI-powered logistics intelligence.",
    icon: Brain,
  },
  {
    title: "Machine Learning",
    description: "Continuous optimization and prediction.",
    icon: Cpu,
  },
  {
    title: "IoT Sensors",
    description: "Real-time shipment monitoring.",
    icon: Radio,
  },
  {
    title: "Blockchain Tracking",
    description: "Secure logistics records.",
    icon: Link2,
  },
  {
    title: "Digital Twins",
    description: "Virtual logistics simulations.",
    icon: Network,
  },
  {
    title: "Predictive Analytics",
    description: "Forecast disruptions before they occur.",
    icon: TrendingUp,
  },
  {
    title: "Autonomous Warehouses",
    description: "Robotic warehouse operations.",
    icon: Warehouse,
  },
];

export default function TechnologyInnovationPage() {
  return (
    <main className="min-h-screen">

      <PageHero
        badge="FUTURE LOGISTICS"
        title="Technology & Innovation"
        description="Advanced technologies transforming global logistics."
      />

      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Innovation Lab
            </h2>
          </div>

          <div className="border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Technology Stack
            </h2>
          </div>

          <div className="border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Research Programs
            </h2>
          </div>

          <div className="border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Future Logistics
            </h2>
          </div>

        </div>
      </section>

    </main>
  );
}