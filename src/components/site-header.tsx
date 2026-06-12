import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Store,
  User,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { categories } from "@/lib/data";

const navLinks = [
  { label: "Products", href: "/products" },

  // Enterprise Pages
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Global Network", href: "/global-network" },
  { label: "Tracking Center", href: "/tracking-center" },

  // Logistics Services
  { label: "Warehousing", href: "/warehousing" },
  { label: "Transportation", href: "/transportation" },
  { label: "Air Freight", href: "/air-freight" },
  { label: "Ocean Freight", href: "/ocean-freight" },
  { label: "Rail Freight", href: "/rail-freight" },
  { label: "Road Freight", href: "/road-freight" },
  { label: "Customs", href: "/customs-clearance" },

  // Solutions
  { label: "Supply Chain", href: "/supply-chain-solutions" },
  { label: "E-Fulfillment", href: "/ecommerce-fulfillment" },
  { label: "Technology", href: "/technology-innovation" },
  { label: "Platform", href: "/digital-logistics-platform" },

  // Company
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news-media" },
  { label: "Investors", href: "/investor-relations" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Support", href: "/support-center" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/92 backdrop-blur-xl">
      <div className="container-page flex min-h-16 items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Open navigation"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetTitle className="text-left">Nexa Mart</SheetTitle>
            <nav className="mt-6 grid gap-2">
              {navLinks.map((item) => (
                <Button key={item.href} asChild variant="ghost" className="justify-start">
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
              <Button asChild variant="ghost" className="justify-start">
                <Link href="/dashboard/customer">Customer dashboard</Link>
              </Button>
              <Button asChild variant="ghost" className="justify-start">
                <Link href="/dashboard/admin">Admin dashboard</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Nexa Mart Logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-semibold tracking-tight whitespace-nowrap">Nexa Mart</span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Categories</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72">
              <DropdownMenuLabel>Shop departments</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((category) => (
                <DropdownMenuItem key={category.name} asChild>
                  <Link href={`/products?category=${category.name}`}>
                    <Store className="mr-2 size-4" />
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="ml-auto">
                      {category.count}
                    </Badge>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.map((item) => (
            <Button key={item.href} asChild variant="ghost">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <form className="ml-auto hidden min-w-64 max-w-md flex-1 items-center gap-2 rounded-lg border bg-card px-2 py-1 md:flex">
          <Search className="size-4 text-muted-foreground" />
          <Input
            className="h-8 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
            placeholder="Search products, brands, categories"
          />
        </form>

        <Button variant="outline" size="icon" asChild aria-label="Search">
          <Link href="/search">
            <Search />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild aria-label="Wishlist">
          <Link href="/dashboard/customer/wishlist">
            <Heart />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild aria-label="Cart">
          <Link href="/cart">
            <ShoppingBag />
          </Link>
        </Button>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Account menu">
              <User />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem asChild>
              <Link href="/login">Login</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/register">Create account</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/customer">
                <BarChart3 className="mr-2 size-4" />
                Customer dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/admin">Admin panel</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}