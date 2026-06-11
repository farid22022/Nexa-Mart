import { PageHero } from "@/components/enterprise/page-hero";

export default function InvoicesPage() {
  return (
    <main>

      <PageHero
        badge="BILLING"
        title="Invoices"
        description="Review invoices and payment history."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          <div className="border rounded-xl p-6">
            Outstanding
            <div className="text-3xl font-bold mt-3">
              $12,500
            </div>
          </div>

          <div className="border rounded-xl p-6">
            Paid
            <div className="text-3xl font-bold mt-3">
              $82,100
            </div>
          </div>

          <div className="border rounded-xl p-6">
            Overdue
            <div className="text-3xl font-bold mt-3">
              $1,240
            </div>
          </div>

        </div>

        <div className="h-[500px] border rounded-xl flex items-center justify-center">
          Invoice Management Table
        </div>

      </section>

    </main>
  );
}