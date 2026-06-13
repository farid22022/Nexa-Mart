import {
  Truck,
  Route,
  Radio,
  Fuel,
  Wrench,
  UserCog,
} from "lucide-react";
import { FeatureCard } from "@/components/enterprise/feature-card";
import dynamic from "next/dynamic";

const ContainerScene = dynamic(
  () => import("@/components/3d/ContainerScene").then((m) => m.ContainerScene),
  { ssr: false, loading: () => <div className="h-full w-full bg-muted/20 rounded-xl" /> }
);


export default function TransportationPage() {
  const transportationFeatures = [
  {
    title: "Vehicle Management",
    description:
      "Manage trucks, trailers, containers and logistics assets across the network.",
    icon: Truck,
  },
  {
    title: "Route Optimization",
    description:
      "AI-powered route planning to reduce delivery time and transportation costs.",
    icon: Route,
  },
  {
    title: "Dispatch Center",
    description:
      "Centralized dispatch operations with real-time fleet coordination.",
    icon: Radio,
  },
  {
    title: "Fuel Monitoring",
    description:
      "Track fuel consumption, efficiency metrics and operating expenses.",
    icon: Fuel,
  },
  {
    title: "Maintenance Tracking",
    description:
      "Monitor service schedules, inspections and preventive maintenance.",
    icon: Wrench,
  },
  {
    title: "Driver Management",
    description:
      "Manage driver performance, certifications and safety compliance.",
    icon: UserCog,
  },
];
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold mb-6">
          Transportation Management
        </h1>

        <p className="mb-12 text-muted-foreground max-w-3xl">
          Unified control of road, rail, air, and ocean logistics.
        </p>

        <div className="h-auto border rounded-xl overflow-hidden">
          <ContainerScene />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {transportationFeatures.map((feature) => (
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