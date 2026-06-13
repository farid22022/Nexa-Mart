import { PageHero } from "@/components/enterprise/page-hero";

export const metadata = {
  title: "Privacy Policy | Nexa Mart",
  description: "Learn how Nexa Mart collects, stores, protects, and uses your personal and transaction data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="LEGAL & POLICY"
        title="Privacy Policy"
        description="Last updated: June 13, 2026. This policy outlines our procedures on the collection, use, and disclosure of your information."
      />

      <section className="container-page pb-24 max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            At Nexa Mart, accessible from nexamart.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Nexa Mart and how we use it.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8">1. Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account Information:</strong> When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</li>
            <li><strong>Shipping & Logistics Data:</strong> To perform delivery services, we process sender and recipient addresses, package weight, shipping manifests, and customs declaration details.</li>
            <li><strong>Payment Information:</strong> Standard payment transaction tokens, billing address details, and card numbers are secure and processed via certified PCI-DSS compliant providers.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8">2. How We Use Your Information</h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our marketplace and logistics services.</li>
            <li>Improve, personalize, and expand our platform workflows.</li>
            <li>Understand and analyze how you use our platform.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website.</li>
            <li>Process your shipments, custom clearances, and invoices.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8">3. Cookies and Web Beacons</h2>
          <p>
            Like any other website, Nexa Mart uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8">4. Security of Data</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </div>
      </section>
    </main>
  );
}
