import { PageHero } from "@/components/enterprise/page-hero";

export default function SettingsPage() {
  return (
    <main>

      <PageHero
        badge="ACCOUNT SETTINGS"
        title="Profile & Preferences"
        description="Manage your logistics account."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="border rounded-xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Profile Information
            </h2>

            <div className="space-y-4">

              <input
                className="w-full border rounded-lg p-3"
                placeholder="Full Name"
              />

              <input
                className="w-full border rounded-lg p-3"
                placeholder="Email"
              />

              <input
                className="w-full border rounded-lg p-3"
                placeholder="Company"
              />

            </div>

          </div>

          <div className="border rounded-xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Preferences
            </h2>

            Notification Settings

            <br />
            <br />

            Language

            <br />
            <br />

            Theme

          </div>

        </div>

      </section>

    </main>
  );
}