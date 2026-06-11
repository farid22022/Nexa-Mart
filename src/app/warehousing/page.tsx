export default function WarehousingPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-6">
          Smart Warehousing
        </h1>

        <p className="text-muted-foreground max-w-3xl mb-12">
          AI-powered warehousing, inventory visibility,
          robotic automation, and scalable storage solutions.
        </p>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          <WarehouseStat title="Warehouses" value="420+" />
          <WarehouseStat title="Countries" value="67" />
          <WarehouseStat title="Storage Capacity" value="5.8M m²" />
          <WarehouseStat title="Inventory Accuracy" value="99.8%" />
        </div>

        <div className="h-[500px] border rounded-xl flex items-center justify-center">
          3D Smart Warehouse Scene
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard title="Warehouse Finder" />
          <FeatureCard title="Inventory Dashboard" />
          <FeatureCard title="Storage Calculator" />
          <FeatureCard title="Capacity Availability" />
          <FeatureCard title="Space Booking" />
          <FeatureCard title="Warehouse Analytics" />
        </div>
      </section>
    </main>
  );
}