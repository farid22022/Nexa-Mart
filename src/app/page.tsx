import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Award,
  Zap,

  TrendingUp,
  Heart,
  Globe,
  Flame,
} from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { categories, products, reviews } from "@/lib/data";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.slice(1, 5);
  const newArrivals = products.slice(4, 8);

  const stats = [
    { label: "Active Customers", value: "100K+" },
    { label: "Quality Products", value: "50K+" },
    { label: "Daily Orders", value: "5K+" },
    { label: "Trusted Vendors", value: "1K+" },
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Verified Vendors",
      description: "All sellers are thoroughly verified for quality and reliability",
    },
    {
      icon: Truck,
      title: "Fast & Free Delivery",
      description: "Express shipping available nationwide with tracking",
    },
    {
      icon: Heart,
      title: "Buyer Protection",
      description: "Secure payment methods and full money-back guarantee",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Curated selection of the finest products available",
    },
  ];

  const marqueeItems = [
    { icon: Truck, text: "Free express delivery on orders over $50" },
    { icon: BadgePercent, text: "Up to 70% off — flash sale ends soon" },
    { icon: ShieldCheck, text: "100% secure checkout & buyer protection" },
    { icon: Sparkles, text: "New arrivals dropping every week" },
    { icon: Award, text: "Trusted by 100,000+ happy shoppers" },
  ];

  return (
    <div>
      {/* Scoped styles for animated banner + 3D effects */}
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          animation: marquee-scroll 24s linear infinite;
        }
        .animate-marquee-scroll:hover {
          animation-play-state: paused;
        }

        /* ── Market widget ── */
        @keyframes chart-draw {
          from { stroke-dashoffset: 600; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes bar-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes tick-up {
          0%   { transform: translateY(0);    opacity: 1; }
          40%  { transform: translateY(-8px); opacity: 0; }
          41%  { transform: translateY(8px);  opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
        @keyframes live-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); }
          60%      { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
        @keyframes market-float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes sparkle-pop {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1.2); }
        }
        .market-card {
          animation: market-float 7s ease-in-out infinite;
        }
        .chart-line {
          stroke-dasharray: 600;
          animation: chart-draw 2.2s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .chart-line-2 {
          stroke-dasharray: 600;
          animation: chart-draw 2.8s cubic-bezier(0.4,0,0.2,1) 0.3s forwards;
        }
        .bar-fill {
          transform-origin: left;
          animation: bar-grow 1.4s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .bar-fill-1 { animation-delay: 0.1s; }
        .bar-fill-2 { animation-delay: 0.25s; }
        .bar-fill-3 { animation-delay: 0.4s; }
        .bar-fill-4 { animation-delay: 0.55s; }
        .live-dot {
          animation: live-pulse 1.6s ease-out infinite;
        }
        .price-tick {
          animation: tick-up 3s ease-in-out infinite;
        }
        .price-tick-2 { animation-delay: 1s; }
        .price-tick-3 { animation-delay: 2s; }
        .sparkle-1 { animation: sparkle-pop 2.2s ease-in-out infinite; }
        .sparkle-2 { animation: sparkle-pop 2.2s ease-in-out infinite 0.7s; }
        .sparkle-3 { animation: sparkle-pop 2.2s ease-in-out infinite 1.4s; }

        .tilt-wrap { perspective: 1100px; }
        .tilt-card {
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          transform-style: preserve-3d;
          will-change: transform;
        }
        .tilt-card:hover {
          transform: rotateX(8deg) rotateY(-8deg) translateY(-6px) scale(1.02);
        }
      `}</style>
      {/* Animated Announcement Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-blue-600 to-purple-600 py-2.5 text-white">
        <div className="flex w-max animate-marquee-scroll whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-10 pr-10">
              {marqueeItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <span key={i} className="flex items-center gap-2 text-sm font-medium">
                    <Icon className="size-4" />
                    {item.text}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-[880px] overflow-hidden lg:min-h-[960px]">
        <div className="absolute inset-0 bg-muted/20" />
        <Image
          src="/team.png"
          alt="Premium e-commerce shopping experience"
          fill
          className="object-cover opacity-20 dark:opacity-10 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10 pointer-events-none" />

        {/* Animated background elements */}
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-blue-500 blur-3xl opacity-10 animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-purple-500 blur-3xl opacity-10 animate-float pointer-events-none" style={{ animationDelay: "1s" }} />

        {/* Live Market Widget */}
        <div className="market-card pointer-events-none absolute right-[5%] top-1/2 hidden -translate-y-1/2 xl:flex xl:flex-col xl:gap-3" style={{ width: 260 }}>
          {/* Main chart card */}
          <div className="rounded-2xl border border-white/20 bg-background/80 backdrop-blur-xl shadow-2xl p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="live-dot inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-foreground">LIVE MARKET</span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">Today</span>
            </div>

            {/* SVG Sparkline */}
            <div className="relative mb-4 h-[80px] w-full overflow-hidden rounded-xl bg-primary/5">
              <svg viewBox="0 0 240 80" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="chartGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 70 Q20 60 40 50 T80 30 T120 40 T160 20 T200 28 T240 15 L240 80 L0 80 Z" fill="url(#chartGrad)" />
                <path d="M0 75 Q30 70 60 65 T120 55 T180 45 T240 35 L240 80 L0 80 Z" fill="url(#chartGrad2)" />
                <path
                  className="chart-line"
                  d="M0 70 Q20 60 40 50 T80 30 T120 40 T160 20 T200 28 T240 15"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  className="chart-line-2"
                  d="M0 75 Q30 70 60 65 T120 55 T180 45 T240 35"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="4 3"
                />
                <circle cx="240" cy="15" r="4" fill="hsl(var(--primary))" opacity="0.9" />
                <circle cx="240" cy="15" r="7" fill="hsl(var(--primary))" opacity="0.2" />
              </svg>
            </div>

            {/* Category bars */}
            <div className="space-y-2.5">
              {[
                { label: "Electronics",   pct: 82, change: "+12.4%", color: "hsl(var(--primary))", delay: "price-tick" },
                { label: "Fashion",       pct: 67, change: "+8.1%",  color: "#10b981",             delay: "price-tick price-tick-2" },
                { label: "Home & Living", pct: 54, change: "+5.6%",  color: "#f59e0b",             delay: "price-tick price-tick-3" },
                { label: "Beauty",        pct: 39, change: "+3.2%",  color: "#ec4899",             delay: "" },
              ].map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="font-medium text-foreground">{item.label}</span>
                    <span className={`font-semibold ${item.delay}`} style={{ color: item.color }}>{item.change}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className={`bar-fill bar-fill-${i + 1} h-full rounded-full`}
                      style={{ width: `${item.pct}%`, background: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini stat pills */}
          <div className="flex gap-2">
            <div className="flex-1 rounded-xl border border-white/20 bg-background/80 backdrop-blur-xl shadow-lg p-3 text-center">
              <p className="text-[10px] text-muted-foreground mb-0.5">Orders Today</p>
              <p className="text-base font-bold text-emerald-500">5,284</p>
            </div>
            <div className="flex-1 rounded-xl border border-white/20 bg-background/80 backdrop-blur-xl shadow-lg p-3 text-center">
              <p className="text-[10px] text-muted-foreground mb-0.5">Avg. Value</p>
              <p className="text-base font-bold text-primary">$67.3</p>
            </div>
          </div>

          {/* Sparkle accent dots */}
          <div className="absolute -top-4 -right-4 flex gap-1.5">
            <span className="sparkle-1 inline-block h-2 w-2 rounded-full bg-primary/60" />
            <span className="sparkle-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            <span className="sparkle-3 inline-block h-2.5 w-2.5 rounded-full bg-amber-400/60" />
          </div>
        </div>

        <div className="container-page relative flex min-h-[880px] items-center py-20 lg:min-h-[960px]">
          <MotionReveal className="max-w-2xl">
            <Image
              src="/logo.png"
              alt="Nexa Mart Logo"
              width={150}
              height={150}
              className="mb-6 drop-shadow-lg"
            />
            <Badge className="mb-5 animate-pulse gap-2">
              <Sparkles className="size-4" />
              <span>Summer launch collection</span>
            </Badge>
            <h1 className="animate-fade-in-up text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl xl:text-9xl leading-[1.05]">
              Nexa Mart <span className="text-primary"></span>
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Discover millions of products from verified vendors. Enjoy fast delivery,
              secure payments, and premium quality—all in one modern marketplace.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="group h-14 px-8 text-base">
                <Link href="/products">
                  Shop collection <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
                <Link href="/dashboard/admin">View admin demo</Link>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 py-20 border-y">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <MotionReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center hover-lift rounded-xl p-8 bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all">
                  <p className="text-5xl lg:text-6xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-base text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y bg-card py-16">
        <div className="container-page grid gap-4 py-5 md:grid-cols-4">
          {[
            { label: "Free express delivery", icon: Truck },
            { label: "Verified vendors", icon: ShieldCheck },
            { label: "Easy returns", icon: PackageCheck },
            { label: "Daily flash deals", icon: BadgePercent },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionReveal key={item.label} delay={index * 0.05}>
                <div className="flex items-center gap-3 text-sm hover:translate-x-1 transition-transform group cursor-pointer">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-semibold text-sm">{item.label}</span>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container-page py-20">
        <MotionReveal>
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary">OUR ADVANTAGES</p>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mt-2">
              Why Choose Nexa Mart?
            </h2>
          </div>
        </MotionReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionReveal key={item.title} delay={index * 0.1}>
                <div className="tilt-wrap">
                  <Card className="tilt-card hover-lift border-0 bg-gradient-to-br from-card via-card to-primary/5 hover:shadow-2xl transition-shadow">
                    <CardContent className="p-7">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary mb-4">
                        <Icon className="size-7" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container-page py-16">
        <MotionReveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-primary">DEPARTMENTS</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-2">
                Categories built for discovery
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/products">Browse all</Link>
            </Button>
          </div>
        </MotionReveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <MotionReveal key={category.name} delay={index * 0.08}>
              <Link
                href={`/products?category=${category.name}`}
                className="group relative min-h-72 overflow-hidden rounded-xl border bg-card hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/0 group-hover:from-black/90 transition-all" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <p className="text-sm text-white/80 mt-1">
                    {category.count} curated products
                  </p>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Hot Deals Banner */}
      <section className="my-8 container-page">
        <MotionReveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500/90 to-orange-500/90 p-8 lg:p-12 shadow-2xl">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl animate-float" />
            <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="size-6 text-yellow-300" />
                  <p className="font-semibold text-white/90">FLASH SALE</p>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Up to 70% Off Everything
                </h2>
                <p className="text-white/80 mt-2">Limited time offer - Ends in 48 hours</p>
              </div>
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-white/90 font-semibold">
                <Link href="/products">Shop Now</Link>
              </Button>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* Featured Products Section */}
      <section className="bg-muted/45 py-16 border-y">
        <div className="container-page">
          <MotionReveal>
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-medium text-primary">FEATURED</p>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-2">
                  Products with momentum
                </h2>
              </div>
              <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                <span className="flex items-center gap-2"><TrendingUp className="size-4" /> Best sellers</span>
                <span className="flex items-center gap-2"><Zap className="size-4" /> Flash sales</span>
                <span className="flex items-center gap-2"><Sparkles className="size-4" /> New arrivals</span>
              </div>
            </div>
          </MotionReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <MotionReveal key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionReveal>
          <div className="rounded-xl border bg-gradient-to-br from-card via-card to-primary/5 p-8 hover:shadow-lg transition-all">
            <Badge variant="secondary" className="mb-4 animate-pulse">48 hour flash sale</Badge>
            <h2 className="text-3xl font-bold tracking-tight">
              Smart bundles for work, travel, and everyday upgrades.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Promote time-sensitive campaigns with strong merchandising, clear
              discounting, and quick conversion actions.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {["12h", "44m", "08s"].map((value, index) => (
                <div key={index} className="rounded-lg border bg-background p-4 hover:bg-primary/5 transition-colors group">
                  <p className="text-2xl font-bold text-primary">{value}</p>
                  <p className="text-xs text-muted-foreground">Remaining</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-6 w-full">
              <Link href="/products">Shop flash deals</Link>
            </Button>
          </div>
        </MotionReveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {bestSellers.map((product, index) => (
            <MotionReveal key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="border-y bg-card py-16">
        <div className="container-page">
          <MotionReveal>
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-primary">NEW ARRIVALS</p>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-2">
                  Fresh on the shelf
                </h2>
              </div>
              <Button asChild variant="outline">
                <Link href="/products">See more</Link>
              </Button>
            </div>
          </MotionReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product, index) => (
              <MotionReveal key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="container-page py-16">
        <MotionReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary">FEATURED VENDORS</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-2">
              Meet our trusted partners
            </h2>
          </div>
        </MotionReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Premium Electronics", products: 1250, rating: 4.8, badge: "Top Rated" },
            { name: "Fashion House", products: 890, rating: 4.9, badge: "Best Seller" },
            { name: "Home & Living", products: 2100, rating: 4.7, badge: "Verified" },
          ].map((vendor, index) => (
            <MotionReveal key={vendor.name} delay={index * 0.1}>
              <Card className="hover-lift border-0 bg-gradient-to-br from-card via-card to-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Globe className="size-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">{vendor.badge}</Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{vendor.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${i < Math.floor(vendor.rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
                      />
                    ))}
                    <span className="text-sm font-semibold ml-2">{vendor.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{vendor.products} products</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/sellers">Visit Store</Link>
                  </Button>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.name}>
              <CardContent className="p-6">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  “{review.quote}”
                </p>
                <Separator className="my-5" />
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-page pb-14">
        <div className="rounded-lg border bg-primary p-8 text-primary-foreground md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_420px] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold">
                Get weekly deals, launches, and vendor spotlights.
              </h2>
              <p className="mt-3 text-primary-foreground/75">
                Newsletter UI is ready for backend integration later.
              </p>
            </div>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="you@example.com"
                className="bg-background text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}