import { PageHero } from "@/components/enterprise/page-hero";

export default function SavedRoutesPage() {
  return (
    <main>

      <PageHero
        badge="ROUTE LIBRARY"
        title="Saved Routes"
        description="Quickly reuse logistics routes."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6">
            Singapore → Dhaka
          </div>

          <div className="border rounded-xl p-6">
            Shanghai → Khulna
          </div>

          <div className="border rounded-xl p-6">
            Rotterdam → Chittagong
          </div>

        </div>

      </section>

    </main>
  );
}