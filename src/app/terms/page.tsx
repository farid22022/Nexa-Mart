import { PageHero } from "@/components/enterprise/page-hero";

export const metadata = {
  title: "Terms & Conditions | Nexa Mart",
  description: "Read the official Terms of Service and Conditions of Use governing the Nexa Mart marketplace and logistics platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="LEGAL & POLICY"
        title="Terms & Conditions"
        description="Last updated: June 13, 2026. Please read these terms and conditions carefully before using our services."
      />

      <section className="container-page pb-24 max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Welcome to Nexa Mart! These terms and conditions outline the rules and regulations for the use of Nexa Mart's Website, located at nexamart.com.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Nexa Mart if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8">1. License and Copyright</h2>
          <p>
            Unless otherwise stated, Nexa Mart and/or its licensors own the intellectual property rights for all material on Nexa Mart. All intellectual property rights are reserved. You may access this from Nexa Mart for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p>
            You must not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Republish material from Nexa Mart.</li>
            <li>Sell, rent, or sub-license material from Nexa Mart.</li>
            <li>Reproduce, duplicate, or copy material from Nexa Mart.</li>
            <li>Redistribute content from Nexa Mart.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8">2. Merchant & Vendor Guidelines</h2>
          <p>
            Sellers on Nexa Mart agree to register with correct company, bank, and operations data. Misrepresentation, listing of counterfeit items, or shipping illegal substances will result in instant seller account termination and forfeiture of account balance.
          </p>
          <p>
            Fulfillment times are governed by the merchant SLA, requiring dispatch within 48 hours unless a custom pre-order window is explicitly selected.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8">3. Limitation of Liability</h2>
          <p>
            In no event shall Nexa Mart, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Nexa Mart, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
          </p>
        </div>
      </section>
    </main>
  );
}
