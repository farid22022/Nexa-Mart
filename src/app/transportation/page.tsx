export default function TransportationPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold mb-6">
          Transportation Management
        </h1>

        <p className="mb-12 text-muted-foreground max-w-3xl">
          Unified control of road, rail, air, and ocean logistics.
        </p>

        <div className="h-[550px] rounded-xl border flex items-center justify-center">
          Fleet Operations 3D Scene
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard title="Vehicle Management" />
          <FeatureCard title="Route Optimization" />
          <FeatureCard title="Dispatch Center" />
          <FeatureCard title="Fuel Monitoring" />
          <FeatureCard title="Maintenance Tracking" />
          <FeatureCard title="Driver Management" />
        </div>

      </section>
    </main>
  );
}