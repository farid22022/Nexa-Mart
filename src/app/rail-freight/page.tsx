import { Train, Route, Package, BarChart3 } from "lucide-react";
import dynamic from "next/dynamic";

const RailScene = dynamic(
  () => import("@/components/3d/RailScene").then((m) => m.RailScene),
  { ssr: false, loading: () => <div className="h-full w-full bg-muted/20 rounded-xl" /> }
);

const features = [
  {
    title: "Intermodal Freight",
    icon: Train,
  },
  {
    title: "Cross-Border Rail",
    icon: Route,
  },
  {
    title: "Bulk Cargo",
    icon: Package,
  },
  {
    title: "Route Analytics",
    icon: BarChart3,
  },
];

export default function RailFreightPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">

        <span className="text-red-600 font-semibold">
          RAIL LOGISTICS NETWORK
        </span>

        <h1 className="text-5xl font-bold mt-4 mb-6">
          Rail Freight Services
        </h1>

        <p className="max-w-3xl text-muted-foreground mb-12">
          Sustainable, efficient, and scalable rail transportation
          across domestic and international corridors.
        </p>

        <div className="h-[500px] border rounded-xl overflow-hidden mb-16">
          <RailScene />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border rounded-xl p-6"
            >
              <feature.icon className="w-10 h-10 mb-4 text-red-600" />

              <h3 className="font-semibold text-xl">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <StatCard title="Rail Routes" value="850+" />
          <StatCard title="Countries" value="42" />
          <StatCard title="Terminals" value="130+" />
          <StatCard title="Efficiency" value="96%" />
        </div>

      </section>
    </main>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border rounded-xl p-6 text-center">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-muted-foreground mt-2">{title}</div>
    </div>
  );
}