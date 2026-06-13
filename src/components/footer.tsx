import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = [
  {
    title: "Shop",
    links: [
      { label: "Featured", href: "/products?filter=featured" },
      { label: "Best sellers", href: "/products?filter=best-sellers" },
      { label: "New arrivals", href: "/products?filter=new-arrivals" },
      { label: "Flash sales", href: "/products?filter=flash-sales" },
    ],
  },
  {
    title: "Accounts",
    links: [
      { label: "Dashboard", href: "/dashboard/customer" },
      { label: "Orders", href: "/dashboard/customer/orders" },
      { label: "Wishlist", href: "/dashboard/customer/wishlist" },
      { label: "Rewards", href: "/rewards" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Vendor panel", href: "/dashboard/vendor" },
      { label: "Admin panel", href: "/dashboard/admin" },
      { label: "Payments", href: "/payments" },
      { label: "Reports", href: "/dashboard/admin/reports" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold">Nexa Mart</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            A premium e-commerce frontend with storefront, checkout, tracking,
            customer dashboard, vendor tools, and enterprise admin workflows.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <span className="flex items-center gap-2">
              <MapPin className="size-4" /> Dhaka, Bangladesh
            </span>
            <span className="flex items-center gap-2">
              <Phone className="size-4" /> +8801324623709
            </span>
            <span className="flex items-center gap-2">
              <Mail className="size-4" /> farid220222@cseku.ac.bd
            </span>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-medium">{group.title}</h3>
              <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {group.links.map((link) => (
                  <Link key={link.label} href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t">
        <div className="container-page flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <form className="flex max-w-md gap-2">
            <Input placeholder="Subscribe to product drops" />
            <Button>Join</Button>
          </form>
          <div className="flex items-center gap-2">
            {[Mail, Phone, MapPin].map((Icon, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                aria-label="Social link"
              >
                <Icon />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
