import { PageHero } from "@/components/enterprise/page-hero";

const faqs = [
  {
    question: "How do I track a shipment?",
    answer:
      "Use the Tracking Center or Customer Portal Live Tracking module.",
  },
  {
    question: "How can I download shipping documents?",
    answer:
      "Documents can be accessed from Customer Portal → Documents.",
  },
  {
    question: "How do I create a support ticket?",
    answer:
      "Visit Support Center → Tickets and create a new request.",
  },
  {
    question: "How can I update delivery instructions?",
    answer:
      "Open the shipment details page and submit updated instructions.",
  },
  {
    question: "Which payment methods are supported?",
    answer:
      "Credit cards, bank transfers, and enterprise billing accounts.",
  },
];

export default function FAQPage() {
  return (
    <main>
      <PageHero
        badge="SUPPORT CENTER"
        title="Frequently Asked Questions"
        description="Find answers to common logistics, shipment, billing, and support questions."
      />

      <section className="container mx-auto px-6 pb-24">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg mb-3">
                {faq.question}
              </h3>

              <p className="text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}