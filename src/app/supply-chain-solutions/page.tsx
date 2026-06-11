import {
  Eye,
  Activity,
  TrendingUp,
  Boxes,
  Network,
  ShieldAlert,
  Cpu,
} from "lucide-react";

const solutions = [
  {
    title: "Supply Chain Visibility",
    icon: Eye,
    description:
      "End-to-end shipment and inventory visibility.",
  },
  {
    title: "Control Tower",
    icon: Activity,
    description:
      "Centralized monitoring of logistics operations.",
  },
  {
    title: "Demand Planning",
    icon: TrendingUp,
    description:
      "Forecast demand and improve resource allocation.",
  },
  {
    title: "Inventory Optimization",
    icon: Boxes,
    description:
      "Reduce stockouts while maximizing inventory efficiency.",
  },
  {
    title: "Procurement Logistics",
    icon: Network,
    description:
      "Streamline supplier collaboration and sourcing.",
  },
  {
    title: "Network Design",
    icon: Network,
    description:
      "Optimize transportation and distribution networks.",
  },
  {
    title: "Risk Management",
    icon: ShieldAlert,
    description:
      "Identify disruptions before they impact operations.",
  },
  {
    title: "Digital Twin Simulation",
    icon: Cpu,
    description:
      "Simulate and optimize logistics networks in real time.",
  },
];

const analytics = [
  {
    title: "Supply Chain Efficiency",
    value: "94%",
  },
  {
    title: "Inventory Turnover",
    value: "12.8x",
  },
  {
    title: "Delivery Performance",
    value: "98.7%",
  },
  {
    title: "Risk Score",
    value: "Low",
  },
  {
    title: "Carbon Impact",
    value: "-18%",
  },
];

export default function SupplyChainSolutionsPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="container mx-auto px-6 py-24">
        <span className="text-red-600 font-semibold">
          DIGITAL SUPPLY CHAIN
        </span>

        <h1 className="text-5xl font-bold mt-4 mb-6">
          Supply Chain Solutions
        </h1>

        <p className="max-w-3xl text-muted-foreground">
          Build resilient, intelligent, and sustainable supply
          chains with visibility, analytics, optimization,
          forecasting, and AI-driven decision making.
        </p>
      </section>

      {/* Analytics Dashboard */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {analytics.map((item) => (
            <div
              key={item.title}
              className="border rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-red-600">
                {item.value}
              </div>

              <div className="text-sm mt-2 text-muted-foreground">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Control Tower */}
      <section className="container mx-auto px-6 pb-16">
        <div className="h-[550px] border rounded-xl flex items-center justify-center">
          Global Supply Chain Control Tower Dashboard
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <item.icon className="w-10 h-10 text-red-600 mb-4" />

              <h3 className="font-semibold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Visibility Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Intelligent Supply Chain Visibility
          </h2>

          <p className="max-w-3xl text-muted-foreground">
            Connect suppliers, warehouses, transportation assets,
            and customers through one unified logistics ecosystem.
          </p>
        </div>
      </section>

      {/* Digital Twin */}
      <section className="container mx-auto px-6 py-24">
        <div className="border rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-6">
            Digital Twin Simulation
          </h2>

          <p className="text-muted-foreground">
            Model real-world logistics networks, simulate risks,
            test route changes, and optimize operational
            performance before deployment.
          </p>
        </div>
      </section>

    </main>
  );
}