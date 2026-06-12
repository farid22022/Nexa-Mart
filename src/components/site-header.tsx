import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  ChevronDown,
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

// Grouped nav for desktop row-2 dropdowns
const navGroups = [
  {
    label: "Enterprise",
    links: [
      { label: "Services",        href: "/services" },
      { label: "Industries",      href: "/industries" },
      { label: "Global Network",  href: "/global-network" },
      { label: "Tracking Center", href: "/tracking-center" },
    ],
  },
  {
    label: "Logistics",
    links: [
      { label: "Warehousing",    href: "/warehousing" },
      { label: "Transportation", href: "/transportation" },
      { label: "Air Freight",    href: "/air-freight" },
      { label: "Ocean Freight",  href: "/ocean-freight" },
      { label: "Rail Freight",   href: "/rail-freight" },
      { label: "Road Freight",   href: "/road-freight" },
      { label: "Customs",        href: "/customs-clearance" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { label: "Supply Chain",  href: "/supply-chain-solutions" },
      { label: "E-Fulfillment", href: "/ecommerce-fulfillment" },
      { label: "Technology",    href: "/technology-innovation" },
      { label: "Platform",      href: "/digital-logistics-platform" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Sustainability", href: "/sustainability" },
      { label: "Careers",        href: "/careers" },
      { label: "News",           href: "/news-media" },
      { label: "Investors",      href: "/investor-relations" },
      { label: "Case Studies",   href: "/case-studies" },
      { label: "Support",        href: "/support-center" },
      { label: "Contact",        href: "/contact" },
    ],
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/92 backdrop-blur-xl">

      {/* ── Row 1: Logo · Search · Icons ── */}
      <div className="container-page flex min-h-16 items-center gap-2 sm:gap-3">

        {/* Hamburger — visible below lg */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 lg:hidden"
              aria-label="Open navigation"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetTitle className="text-left">Nexa Mart</SheetTitle>
            <nav className="mt-6 grid gap-1">
              <Button asChild variant="ghost" className="justify-start font-medium">
                <Link href="/products">Products</Link>
              </Button>

              {navGroups.map((group) => (
                <div key={group.label}>
                  <p className="mt-3 px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </p>
                  {group.links.map((item) => (
                    <Button
                      key={item.href}
                      asChild
                      variant="ghost"
                      className="w-full justify-start pl-5 text-sm"
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                </div>
              ))}

              <div className="mt-3 border-t pt-3">
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/dashboard/customer">Customer dashboard</Link>
                </Button>
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/dashboard/admin">Admin dashboard</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo.png"
            alt="Nexa Mart Logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="hidden font-semibold tracking-tight sm:inline">Nexa Mart</span>
        </Link>

        {/* Search bar — md+ */}
        <form className="mx-3 hidden min-w-0 flex-1 items-center gap-2 rounded-lg border bg-card px-2 py-1 md:flex">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <Input
            className="h-8 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
            placeholder="Search products, brands, categories"
          />
        </form>

        {/* Right-side icons */}
        <div className="ml-auto flex items-center gap-1 md:ml-0">
          {/* Search icon — mobile only */}
          <Button
            variant="outline"
            size="icon"
            asChild
            aria-label="Search"
            className="md:hidden"
          >
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

          {/* Account dropdown */}
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
      </div>

      {/* ── Row 2: Nav bar — desktop (lg+) only ── */}
      <div className="hidden border-t lg:block">
        <div className="container-page flex h-10 items-center gap-0.5">

          {/* Categories dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 text-sm">
                <Store className="size-4" />
                Categories
                <ChevronDown className="size-3 opacity-50" />
              </Button>
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

          {/* Products standalone link */}
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <Link href="/products">Products</Link>
          </Button>

          <div className="mx-1.5 h-4 w-px bg-border" />

          {/* Group dropdowns */}
          {navGroups.map((group) => (
            <DropdownMenu key={group.label}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 text-sm">
                  {group.label}
                  <ChevronDown className="size-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-44">
                {group.links.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </div>

    </header>
  );
}