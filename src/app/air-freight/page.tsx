import { Plane, Globe, Shield, Thermometer } from "lucide-react";

const services = [
  {
    title: "Express Cargo",
    description:
      "Fast global delivery with priority handling and real-time tracking.",
    icon: Plane,
  },
  {
    title: "Charter Services",
    description:
      "Dedicated aircraft solutions for urgent and oversized shipments.",
    icon: Globe,
  },
  {
    title: "Dangerous Goods",
    description:
      "Certified transportation for hazardous and regulated cargo.",
    icon: Shield,
  },
  {
    title: "Temperature Controlled",
    description:
      "Cold-chain logistics for pharmaceuticals and perishables.",
    icon: Thermometer,
  },
];

export default function AirFreightPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">
        <span className="text-red-600 font-semibold">
          GLOBAL AIR LOGISTICS
        </span>

        <h1 className="text-5xl font-bold mt-4 mb-6">
          Air Freight Solutions
        </h1>

        <p className="max-w-3xl text-muted-foreground mb-12">
          Accelerate global trade with express cargo, charter flights,
          temperature-controlled transportation, and international airport
          connectivity.
        </p>

        <div className="h-[500px] border rounded-xl flex items-center justify-center mb-16">
          3D Airport Cargo Hub Scene
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <service.icon className="w-10 h-10 mb-4 text-red-600" />

              <h3 className="font-semibold text-xl mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <StatCard title="Airports" value="320+" />
          <StatCard title="Countries" value="120+" />
          <StatCard title="Daily Flights" value="2,500+" />
          <StatCard title="On-Time Rate" value="98.4%" />
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