import { PageHero } from "@/components/enterprise/page-hero";

export default function LiveChatPage() {
  return (
    <main>

      <PageHero
        badge="AI SUPPORT"
        title="Live Chat"
        description="Get real-time support from our AI assistant and support team."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="border rounded-xl overflow-hidden">

          <div className="border-b p-4 font-semibold">
            Logistics Assistant
          </div>

          <div className="h-[500px] p-6 overflow-y-auto">
            <div className="bg-muted rounded-xl p-4 max-w-md mb-4">
              Hello! How can I assist you today?
            </div>

            <div className="bg-red-600 text-white rounded-xl p-4 max-w-md ml-auto">
              Where is my shipment SHP-1001?
            </div>
          </div>

          <div className="border-t p-4">
            <input
              className="w-full border rounded-lg p-3"
              placeholder="Type your message..."
            />
          </div>

        </div>

      </section>

    </main>
  );
}