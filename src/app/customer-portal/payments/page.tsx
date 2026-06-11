import { PageHero } from "@/components/enterprise/page-hero";

export default function PaymentsPage() {
  return (
    <main>

      <PageHero
        badge="PAYMENTS"
        title="Payment Center"
        description="Manage billing and payment methods."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Payment Methods
            </h2>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                Visa **** 8844
              </div>

              <div className="border rounded-lg p-4">
                Corporate Account
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Recent Payments
            </h2>

            Payment History
          </div>

        </div>

      </section>

    </main>
  );
}