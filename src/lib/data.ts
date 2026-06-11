import {
  BadgeCheck,
  BarChart3,
  Bell,
  Boxes,
  Building2,
  CreditCard,
  DollarSign,
  Gift,
  Heart,
  Megaphone,
  PackageCheck,
  ReceiptText,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Store,
  Ticket,
  Truck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  stock: "In stock" | "Low stock" | "Pre-order";
  badge: string;
  image: string;
  gallery: string[];
  colors: string[];
  sizes: string[];
  description: string;
  specs: Record<string, string>;
};

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export const products: Product[] = [
  // ─── Nexa Mart — Coffee ───────────────────────────────────────────────────
  {
    id: "PRD-1001",
    slug: "eclaffia-date-seed-coffee",
    name: "Eclaffia Date Seed Coffee",
    brand: "Nexa Mart",
    category: "Coffee",
    price: 450,
    originalPrice: 550,
    rating: 4.8,
    reviews: 312,
    stock: "In stock",
    badge: "0% Caffeine",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#4a2c2a", "#c8a97e", "#f5f0e8"],
    sizes: ["220g"],
    description:
      "A 100% caffeine-free premium coffee alternative made from locally sourced Bangladeshi date seeds. Rich in antioxidants, naturally flavourful, and sustainably produced — your healthiest cup yet.",
    specs: {
      Weight: "220g",
      Caffeine: "0%",
      Origin: "Bangladesh",
      Benefits: "Rich in antioxidants",
    },
  },
  {
    id: "PRD-1002",
    slug: "eclaffia-classic-blend",
    name: "Eclaffia Classic Blend",
    brand: "Nexa Mart",
    category: "Coffee",
    price: 450,
    originalPrice: 520,
    rating: 4.7,
    reviews: 198,
    stock: "In stock",
    badge: "Natural",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#3b1f1a", "#8b5e3c", "#e8d5b7"],
    sizes: ["220g"],
    description:
      "Eclaffia's signature roast — a smooth, taste-variant brew crafted from upcycled date seeds. No caffeine, no compromises. Naturally low cost and better for you.",
    specs: {
      Weight: "220g",
      Caffeine: "0%",
      Taste: "Variant blends",
      Packaging: "Eco-friendly",
    },
  },
  {
    id: "PRD-1006",
    slug: "eclaffia-variety-pack",
    name: "Eclaffia Variety Pack",
    brand: "Nexa Mart",
    category: "Coffee",
    price: 850,
    originalPrice: 1050,
    rating: 4.7,
    reviews: 89,
    stock: "In stock",
    badge: "Taste variant",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#5c3317", "#a0522d", "#deb887"],
    sizes: ["2x 220g"],
    description:
      "Two 220g packs of Eclaffia in two distinct taste variants. Explore the full range of our caffeine-free date seed coffee — from mellow and smooth to bold and roasted.",
    specs: {
      Contents: "2x 220g different blends",
      Caffeine: "0%",
      Source: "Local Bangladeshi dates",
      Ideal: "Sampling & gifting",
    },
  },
  {
    id: "PRD-1008",
    slug: "eclaffia-starter-kit",
    name: "Eclaffia Starter Kit",
    brand: "Nexa Mart",
    category: "Coffee",
    price: 500,
    originalPrice: 620,
    rating: 4.8,
    reviews: 176,
    stock: "Pre-order",
    badge: "New arrival",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#4a2c2a", "#c8a97e", "#f5f0e8"],
    sizes: ["220g + accessories"],
    description:
      "Everything you need to begin your caffeine-free coffee journey. Includes one 220g Eclaffia pouch, a reusable filter, and a brewing guide — perfect for first-time customers.",
    specs: {
      Contents: "220g Eclaffia + filter + guide",
      Caffeine: "0%",
      Ideal: "First-time buyers",
      Packaging: "Eco-friendly box",
    },
  },
  {
    id: "PRD-1009",
    slug: "eclaffia-spiced-cardamom-blend",
    name: "Eclaffia Spiced Cardamom Blend",
    brand: "Nexa Mart",
    category: "Coffee",
    price: 480,
    originalPrice: 580,
    rating: 4.9,
    reviews: 224,
    stock: "In stock",
    badge: "Limited edition",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#5c3317", "#9b7653", "#e8d5b7"],
    sizes: ["220g"],
    description:
      "Eclaffia's aromatic limited-edition blend infused with whole cardamom and warming spices. Caffeine-free, naturally fragrant, and inspired by the traditional Bangladeshi brewing culture.",
    specs: {
      Weight: "220g",
      Caffeine: "0%",
      Flavour: "Cardamom & spice",
      Origin: "Bangladesh",
    },
  },
  {
    id: "PRD-1010",
    slug: "eclaffia-cold-brew-pack",
    name: "Eclaffia Cold Brew Pack",
    brand: "Nexa Mart",
    category: "Coffee",
    price: 520,
    originalPrice: 650,
    rating: 4.7,
    reviews: 158,
    stock: "In stock",
    badge: "Refreshing",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#2c4a6e", "#5b8db8", "#d0e8f5"],
    sizes: ["220g"],
    description:
      "A coarsely ground Eclaffia blend specially formulated for cold brew steeping. Smooth, mellow, and 100% caffeine-free — steep overnight and enjoy chilled all week.",
    specs: {
      Weight: "220g",
      Caffeine: "0%",
      Brew: "Cold brew / overnight steep",
      Yield: "Up to 8 servings",
    },
  },
  {
    id: "PRD-1015",
    slug: "eclaffia-golden-turmeric-blend",
    name: "Eclaffia Golden Turmeric Blend",
    brand: "Nexa Mart",
    category: "Coffee",
    price: 490,
    originalPrice: 600,
    rating: 4.8,
    reviews: 134,
    stock: "In stock",
    badge: "Anti-inflammatory",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#c8900a", "#f5c842", "#fff8e1"],
    sizes: ["220g"],
    description:
      "Eclaffia's wellness-forward blend combining date seed coffee with organic turmeric and black pepper. Naturally anti-inflammatory, caffeine-free, and warm — your daily golden cup.",
    specs: {
      Weight: "220g",
      Caffeine: "0%",
      Flavour: "Turmeric & black pepper",
      Benefits: "Anti-inflammatory",
    },
  },
  {
    id: "PRD-1016",
    slug: "eclaffia-cinnamon-date-blend",
    name: "Eclaffia Cinnamon Date Blend",
    brand: "Nexa Mart",
    category: "Coffee",
    price: 460,
    originalPrice: 560,
    rating: 4.7,
    reviews: 109,
    stock: "In stock",
    badge: "Cosy sip",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#8b3a0f", "#d4883a", "#fdebd0"],
    sizes: ["220g"],
    description:
      "A warming blend of roasted date seed coffee and Ceylon cinnamon. Naturally sweet, gut-friendly, and completely caffeine-free — the perfect cosy alternative to your morning brew.",
    specs: {
      Weight: "220g",
      Caffeine: "0%",
      Flavour: "Ceylon cinnamon",
      Ideal: "Morning & evening",
    },
  },

  // ─── Nexa Mart — Chocolate ─────────────────────────────────────────────────
  {
    id: "PRD-1003",
    slug: "dulacate-date-chocolate-bar",
    name: "Dulacate Date Chocolate Bar",
    brand: "Nexa Mart",
    category: "Chocolate",
    price: 150,
    originalPrice: 200,
    rating: 4.9,
    reviews: 527,
    stock: "In stock",
    badge: "Best seller",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#3d1c02", "#7b3f00", "#c68642"],
    sizes: ["100g"],
    description:
      "A guilt-free chocolate made with natural date sugar, high fibre, and a low glycemic index. No chemical additives — just rich, wholesome indulgence that supports healthy digestion.",
    specs: {
      Weight: "100g",
      Sugar: "Natural (dates)",
      Fibre: "High",
      GI: "Low glycemic index",
    },
  },
  {
    id: "PRD-1004",
    slug: "dulacate-dark-date-bar",
    name: "Dulacate Dark Date Bar",
    brand: "Nexa Mart",
    category: "Chocolate",
    price: 150,
    originalPrice: 190,
    rating: 4.8,
    reviews: 341,
    stock: "Low stock",
    badge: "High Fibre",
    image:
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#1a0a00", "#4a2800", "#8b6914"],
    sizes: ["100g"],
    description:
      "A dark, intense Dulacate bar sweetened purely with dates. Rich in antioxidants, free of refined sugar, and designed for health-conscious chocolate lovers who refuse to compromise on taste.",
    specs: {
      Weight: "100g",
      Type: "Dark chocolate",
      Additives: "None",
      Certifications: "Natural ingredients",
    },
  },
  {
    id: "PRD-1007",
    slug: "dulacate-wellness-multipack",
    name: "Dulacate Wellness Multipack",
    brand: "Nexa Mart",
    category: "Chocolate",
    price: 420,
    originalPrice: 500,
    rating: 4.6,
    reviews: 214,
    stock: "In stock",
    badge: "Low GI",
    image:
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#2d1b00", "#6b3a2a", "#c4956a"],
    sizes: ["3x 100g"],
    description:
      "Three 100g Dulacate bars — a convenient weekly supply of natural, low-GI chocolate. High in fibre, free from chemical additives, and made with the natural sweetness of dates.",
    specs: {
      Contents: "3x 100g bars",
      Sugar: "Natural date sugar only",
      Fibre: "High",
      "Free from": "Refined sugar, additives",
    },
  },
  {
    id: "PRD-1011",
    slug: "dulacate-almond-date-bar",
    name: "Dulacate Almond Date Bar",
    brand: "Nexa Mart",
    category: "Chocolate",
    price: 180,
    originalPrice: 220,
    rating: 4.8,
    reviews: 293,
    stock: "In stock",
    badge: "Nutty crunch",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#3d2b1a", "#8b6340", "#d4a96a"],
    sizes: ["100g"],
    description:
      "Dulacate's fan-favourite variant — whole roasted almonds folded into date-sweetened chocolate. High fibre, low GI, and packed with healthy fats for a satisfying, nutritious snack.",
    specs: {
      Weight: "100g",
      Nuts: "Whole roasted almonds",
      Sugar: "Natural date sugar",
      GI: "Low glycemic index",
    },
  },
  {
    id: "PRD-1012",
    slug: "dulacate-mini-bites-pouch",
    name: "Dulacate Mini Bites Pouch",
    brand: "Nexa Mart",
    category: "Chocolate",
    price: 120,
    originalPrice: 150,
    rating: 4.6,
    reviews: 407,
    stock: "In stock",
    badge: "Snack size",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#1a0a00", "#5c2e00", "#b87333"],
    sizes: ["80g"],
    description:
      "Bite-sized Dulacate pieces in a resealable pouch — perfect for on-the-go snacking, lunchboxes, or portion-controlled indulgence. Same natural date sugar, zero refined additives.",
    specs: {
      Weight: "80g",
      Format: "Bite-sized pieces",
      Packaging: "Resealable pouch",
      "Free from": "Refined sugar, additives",
    },
  },
  {
    id: "PRD-1017",
    slug: "dulacate-coconut-date-bar",
    name: "Dulacate Coconut Date Bar",
    brand: "Nexa Mart",
    category: "Chocolate",
    price: 170,
    originalPrice: 210,
    rating: 4.7,
    reviews: 188,
    stock: "In stock",
    badge: "Tropical",
    image:
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#4a3728", "#c8a97e", "#fff8f0"],
    sizes: ["100g"],
    description:
      "Shredded toasted coconut swirled through date-sweetened chocolate. A tropical twist on Dulacate — naturally sweet, high in fibre, and free from refined sugar or artificial flavour.",
    specs: {
      Weight: "100g",
      Inclusions: "Toasted coconut",
      Sugar: "Natural date sugar",
      "Free from": "Artificial flavour",
    },
  },
  {
    id: "PRD-1018",
    slug: "dulacate-pistachio-date-bar",
    name: "Dulacate Pistachio Date Bar",
    brand: "Nexa Mart",
    category: "Chocolate",
    price: 200,
    originalPrice: 250,
    rating: 4.9,
    reviews: 162,
    stock: "Low stock",
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#3b5323", "#8fb04a", "#f0f7e6"],
    sizes: ["100g"],
    description:
      "Generous whole pistachios embedded in rich date-sweetened chocolate. Dulacate's most premium bar — elegant enough for gifting, wholesome enough for every day.",
    specs: {
      Weight: "100g",
      Nuts: "Whole pistachios",
      Sugar: "Natural date sugar",
      GI: "Low glycemic index",
    },
  },

  // ─── Nexa Mart — Gift Sets ─────────────────────────────────────────────────
  {
    id: "PRD-1005",
    slug: "eclaffia-dulacate-gift-bundle",
    name: "Eclaffia & Dulacate Gift Bundle",
    brand: "Nexa Mart",
    category: "Gift Sets",
    price: 750,
    originalPrice: 900,
    rating: 4.9,
    reviews: 143,
    stock: "In stock",
    badge: "Gift ready",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#2c1810", "#8b5e3c", "#f0e6d3"],
    sizes: ["Standard"],
    description:
      "The perfect wellness gift — one 220g Eclaffia date seed coffee and two 100g Dulacate date chocolate bars, beautifully packaged in eco-friendly premium wrapping. Ideal for Eid, corporate gifting, or personal treats.",
    specs: {
      Contents: "1x Eclaffia 220g + 2x Dulacate 100g",
      Packaging: "Premium eco-friendly",
      Occasions: "Eid, corporate, personal",
      Origin: "Made in Bangladesh",
    },
  },
  {
    id: "PRD-1013",
    slug: "bliss-sihat-eid-special-box",
    name: "Nexa Mart Eid Special Box",
    brand: "Nexa Mart",
    category: "Gift Sets",
    price: 1200,
    originalPrice: 1500,
    rating: 5.0,
    reviews: 67,
    stock: "Low stock",
    badge: "Eid special",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#1a3a1a", "#c8a200", "#f5f0e8"],
    sizes: ["Standard"],
    description:
      "A festive Eid hamper featuring 2x Eclaffia 220g, 3x Dulacate 100g bars, and 1x Dulacate Almond Bar — presented in a handcrafted gift box with a personalised message card.",
    specs: {
      Contents: "2x Eclaffia + 3x Dulacate + 1x Almond Bar",
      Packaging: "Handcrafted gift box",
      Message: "Personalised card included",
      Occasion: "Eid, weddings, celebrations",
    },
  },
  {
    id: "PRD-1019",
    slug: "bliss-sihat-wellness-starter-box",
    name: "Nexa Mart Wellness Starter Box",
    brand: "Nexa Mart",
    category: "Gift Sets",
    price: 950,
    originalPrice: 1200,
    rating: 4.8,
    reviews: 91,
    stock: "In stock",
    badge: "Healthy living",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#2c4a3e", "#5a9e87", "#e8f5f0"],
    sizes: ["Standard"],
    description:
      "An introduction to the Nexa Mart lifestyle — includes 1x Eclaffia Starter Kit, 1x Dulacate Date Chocolate Bar, and 1x Dulacate Almond Bar, boxed in premium eco-friendly packaging with a wellness guide.",
    specs: {
      Contents: "1x Starter Kit + 1x Dulacate + 1x Almond Bar",
      Packaging: "Premium eco-friendly",
      Extras: "Wellness guide included",
      Ideal: "New customers, gifting",
    },
  },
  {
    id: "PRD-1020",
    slug: "bliss-sihat-ramadan-gift-set",
    name: "Nexa Mart Ramadan Gift Set",
    brand: "Nexa Mart",
    category: "Gift Sets",
    price: 1100,
    originalPrice: 1400,
    rating: 4.9,
    reviews: 54,
    stock: "In stock",
    badge: "Ramadan special",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#1a1a4a", "#c8a200", "#f5e8c8"],
    sizes: ["Standard"],
    description:
      "A thoughtfully curated Ramadan hamper — 1x Eclaffia Spiced Cardamom Blend, 2x Dulacate Dark Date Bars, and 1x Dulacate Pistachio Bar, presented in a crescent-embossed gift box.",
    specs: {
      Contents: "1x Cardamom Blend + 2x Dark Bar + 1x Pistachio Bar",
      Packaging: "Crescent-embossed gift box",
      Message: "Personalised card included",
      Occasion: "Ramadan, Eid ul-Fitr",
    },
  },

  // ─── Nexa Mart — Bundles ────────────────────────────────────────────────────
  {
    id: "PRD-1014",
    slug: "bliss-sihat-corporate-bundle",
    name: "Nexa Mart Corporate Bundle",
    brand: "Nexa Mart",
    category: "Bundles",
    price: 3500,
    originalPrice: 4500,
    rating: 4.9,
    reviews: 38,
    stock: "In stock",
    badge: "Corporate",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#1c2b3a", "#3d5a80", "#e8eef5"],
    sizes: ["10-unit pack"],
    description:
      "Ten individually gift-wrapped Nexa Mart sets — ideal for corporate gifting, employee wellness programmes, or bulk Eid distribution. Each unit contains 1x Eclaffia and 1x Dulacate with branded packaging.",
    specs: {
      Units: "10 individually wrapped sets",
      Contents: "1x Eclaffia + 1x Dulacate per set",
      Branding: "Custom logo available",
      "Min. order": "1 pack (10 units)",
    },
  },
  {
    id: "PRD-1021",
    slug: "bliss-sihat-monthly-subscription-box",
    name: "Nexa Mart Monthly Subscription Box",
    brand: "Nexa Mart",
    category: "Bundles",
    price: 1800,
    originalPrice: 2200,
    rating: 4.8,
    reviews: 72,
    stock: "In stock",
    badge: "Subscribe & save",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#2c1810", "#8b5e3c", "#f5f0e8"],
    sizes: ["Monthly"],
    description:
      "A curated monthly wellness box delivered to your door — 2x Eclaffia pouches and 3x Dulacate bars, rotating between seasonal blends and flavours. Cancel anytime.",
    specs: {
      Frequency: "Monthly delivery",
      Contents: "2x Eclaffia + 3x Dulacate (rotating)",
      Savings: "~18% vs individual purchase",
      Commitment: "Cancel anytime",
    },
  },
  {
    id: "PRD-1022",
    slug: "bliss-sihat-family-wellness-pack",
    name: "Nexa Mart Family Wellness Pack",
    brand: "Nexa Mart",
    category: "Bundles",
    price: 2200,
    originalPrice: 2800,
    rating: 4.7,
    reviews: 49,
    stock: "In stock",
    badge: "Family size",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#3b2d20", "#a07850", "#f5ead8"],
    sizes: ["Large"],
    description:
      "Stock up and share the wellness — 4x Eclaffia pouches across different blends, 5x Dulacate bars in assorted variants, and 1x Dulacate Mini Bites Pouch. Enough for the whole family, all month long.",
    specs: {
      Contents: "4x Eclaffia + 5x Dulacate + 1x Mini Bites",
      Blends: "Assorted",
      Savings: "~21% vs individual purchase",
      Ideal: "Families, households",
    },
  },

  // ─── Original Generic Store Products ─────────────────────────────────────────
  {
    id: "PRD-2001",
    slug: "aero-sound-pro-headphones",
    name: "AeroSound Pro Headphones",
    brand: "Auralux",
    category: "Audio",
    price: 189,
    originalPrice: 249,
    rating: 4.8,
    reviews: 1284,
    stock: "In stock",
    badge: "Flash deal",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#111827", "#d6d3d1", "#0f766e"],
    sizes: ["One size"],
    description:
      "Adaptive noise cancellation, studio-grade drivers, and a travel-ready folding frame built for deep work and long flights.",
    specs: {
      Battery: "42 hours",
      Connectivity: "Bluetooth 5.4, USB-C",
      Warranty: "2 years",
      Weight: "248g",
    },
  },
  {
    id: "PRD-2002",
    slug: "velocity-knit-runners",
    name: "Velocity Knit Runners",
    brand: "StrideLab",
    category: "Footwear",
    price: 126,
    originalPrice: 168,
    rating: 4.7,
    reviews: 843,
    stock: "Low stock",
    badge: "Best seller",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#ef4444", "#111827", "#f8fafc"],
    sizes: ["7", "8", "9", "10", "11"],
    description:
      "A featherweight trainer with breathable knit, responsive foam, and city-to-gym traction.",
    specs: {
      Upper: "Engineered knit",
      Sole: "Dual-density foam",
      Drop: "8mm",
      Care: "Spot clean",
    },
  },
  {
    id: "PRD-2003",
    slug: "orbit-smart-watch",
    name: "Orbit Smart Watch",
    brand: "Northstar",
    category: "Wearables",
    price: 219,
    originalPrice: 299,
    rating: 4.6,
    reviews: 674,
    stock: "In stock",
    badge: "New arrival",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#0f172a", "#94a3b8", "#f59e0b"],
    sizes: ["40mm", "44mm"],
    description:
      "A slim health and productivity watch with always-on display, precise sensors, and rapid charging.",
    specs: {
      Display: "AMOLED always-on",
      Sensors: "ECG, SpO2, GPS",
      Battery: "7 days",
      Water: "5 ATM",
    },
  },
  {
    id: "PRD-2004",
    slug: "workpod-ergonomic-chair",
    name: "WorkPod Ergonomic Chair",
    brand: "HavenDesk",
    category: "Home Office",
    price: 349,
    originalPrice: 449,
    rating: 4.9,
    reviews: 411,
    stock: "In stock",
    badge: "Editor pick",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#18181b", "#78716c", "#f5f5f4"],
    sizes: ["Standard", "Tall"],
    description:
      "A refined office chair with adaptive lumbar, breathable mesh, and all-day posture support.",
    specs: {
      Material: "Aluminum, mesh",
      Recline: "110 to 135 degrees",
      Capacity: "300 lb",
      Assembly: "15 minutes",
    },
  },
  {
    id: "PRD-2005",
    slug: "creator-mirrorless-camera",
    name: "Creator Mirrorless Camera",
    brand: "Lumio",
    category: "Cameras",
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 352,
    stock: "Pre-order",
    badge: "Creator kit",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#1f2937", "#525252"],
    sizes: ["Body only", "18-55mm kit"],
    description:
      "A compact 4K camera with fast autofocus, cinematic color profiles, and creator-friendly controls.",
    specs: {
      Sensor: "26MP APS-C",
      Video: "4K 60fps",
      Stabilization: "5-axis IBIS",
      Storage: "Dual SD slots",
    },
  },
  {
    id: "PRD-2006",
    slug: "nomad-commuter-backpack",
    name: "Nomad Commuter Backpack",
    brand: "Avenue",
    category: "Bags",
    price: 98,
    originalPrice: 138,
    rating: 4.5,
    reviews: 932,
    stock: "In stock",
    badge: "Travel ready",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#111827", "#14532d", "#a16207"],
    sizes: ["18L", "24L"],
    description:
      "A water-resistant daily bag with device protection, hidden pockets, and luggage passthrough.",
    specs: {
      Volume: "24L",
      Laptop: "Up to 16 inch",
      Material: "Recycled nylon",
      Pockets: "14 compartments",
    },
  },
  {
    id: "PRD-2007",
    slug: "glow-daily-skincare-set",
    name: "Glow Daily Skincare Set",
    brand: "Solace",
    category: "Beauty",
    price: 74,
    originalPrice: 98,
    rating: 4.7,
    reviews: 539,
    stock: "In stock",
    badge: "Clean beauty",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#fde68a", "#f9a8d4", "#bbf7d0"],
    sizes: ["Starter", "Full size"],
    description:
      "A gentle three-step skincare routine with cleanser, hydration serum, and mineral SPF.",
    specs: {
      Skin: "All skin types",
      Formula: "Fragrance-free",
      Contents: "3 products",
      Certifications: "Cruelty-free",
    },
  },
  {
    id: "PRD-2008",
    slug: "summit-weather-jacket",
    name: "Summit Weather Jacket",
    brand: "Alpine Row",
    category: "Apparel",
    price: 156,
    originalPrice: 220,
    rating: 4.6,
    reviews: 287,
    stock: "Low stock",
    badge: "Seasonal",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["#0f172a", "#065f46", "#f97316"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A lightweight shell with taped seams, packable hood, and breathable all-weather protection.",
    specs: {
      Rating: "15K waterproof",
      Fabric: "Recycled ripstop",
      Fit: "Regular",
      Weight: "390g",
    },
  },
];

export const categories = [
  {
    name: "Coffee",
    count: 8,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Chocolate",
    count: 8,
    image:
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Gift Sets",
    count: 4,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Bundles",
    count: 4,
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Audio",
    count: 128,
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Footwear",
    count: 94,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Wearables",
    count: 76,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Home Office",
    count: 52,
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=700&q=80",
  },
];

export const reviews = [
  {
    name: "Maya Rahman",
    role: "Operations lead",
    quote:
      "The checkout and tracking flow feel like a mature retail product. It is fast, calm, and easy to scan.",
    rating: 5,
  },
  {
    name: "Daniel Kim",
    role: "Vendor partner",
    quote:
      "Inventory alerts, revenue cards, and order queues are exactly what our sellers need day to day.",
    rating: 5,
  },
  {
    name: "Ariana Patel",
    role: "Repeat customer",
    quote:
      "Product details are rich without getting noisy, and the dashboard makes reordering simple.",
    rating: 5,
  },
];

export const cartItems = [
  { product: products[0], quantity: 1 },
  { product: products[1], quantity: 2 },
];

export const dashboardStats = [
  { label: "Total orders", value: "128", change: "+12.4%", icon: ShoppingBag },
  { label: "Pending orders", value: "9", change: "-3.1%", icon: Truck },
  { label: "Completed", value: "116", change: "+8.7%", icon: PackageCheck },
  { label: "Wishlist", value: "34", change: "+5 saved", icon: Heart },
  { label: "Rewards", value: "12,430", change: "Gold tier", icon: Gift },
];

export const vendorStats = [
  { label: "Revenue", value: "$84.2K", change: "+18.6%", icon: DollarSign },
  { label: "Orders", value: "1,284", change: "+9.2%", icon: ReceiptText },
  { label: "Products", value: "312", change: "24 low stock", icon: Boxes },
  { label: "Customers", value: "8.7K", change: "+642", icon: Users },
];

export const adminStats = [
  { label: "Revenue", value: "$1.42M", change: "+21.8%", icon: DollarSign },
  { label: "Orders", value: "42,809", change: "+11.2%", icon: ReceiptText },
  { label: "Customers", value: "284K", change: "+18.1%", icon: Users },
  { label: "Vendors", value: "1,284", change: "+64", icon: Store },
  { label: "Products", value: "98K", change: "+4.9K", icon: Boxes },
];

export const spendingData = [
  { name: "Jan", value: 420, orders: 4 },
  { name: "Feb", value: 580, orders: 5 },
  { name: "Mar", value: 360, orders: 3 },
  { name: "Apr", value: 760, orders: 7 },
  { name: "May", value: 640, orders: 6 },
  { name: "Jun", value: 920, orders: 9 },
];

export const salesData = [
  { name: "Jan", value: 12400, orders: 420 },
  { name: "Feb", value: 18200, orders: 618 },
  { name: "Mar", value: 15900, orders: 540 },
  { name: "Apr", value: 21400, orders: 739 },
  { name: "May", value: 26300, orders: 880 },
  { name: "Jun", value: 31800, orders: 1024 },
];

export const performanceData = [
  { name: "Coffee", value: 58 },
  { name: "Chocolate", value: 42 },
  { name: "Gift Sets", value: 27 },
  { name: "Bundles", value: 19 },
  { name: "Audio", value: 34 },
  { name: "Footwear", value: 28 },
  { name: "Wearables", value: 22 },
  { name: "Office", value: 18 },
];

export const orders = [
  {
    id: "ORD-91824",
    customer: "Maya Rahman",
    status: "Out for delivery",
    total: "$412",
    date: "Jun 10, 2026",
  },
  {
    id: "ORD-91809",
    customer: "Daniel Kim",
    status: "Packed",
    total: "$126",
    date: "Jun 9, 2026",
  },
  {
    id: "ORD-91778",
    customer: "Ariana Patel",
    status: "Delivered",
    total: "$918",
    date: "Jun 8, 2026",
  },
  {
    id: "ORD-91742",
    customer: "Nadia Hossain",
    status: "Refund review",
    total: "$74",
    date: "Jun 7, 2026",
  },
];

export const notifications = [
  "Flash sale campaign goes live tonight at 8:00 PM.",
  "Order ORD-91824 is out for delivery.",
  "A vendor payout batch is waiting for approval.",
  "24 products are below reorder threshold.",
];

export const addresses = [
  {
    name: "Home",
    line: "House 12, Road 8, Dhanmondi, Dhaka",
    tag: "Default shipping",
  },
  {
    name: "Office",
    line: "Level 9, Gulshan Avenue, Dhaka",
    tag: "Weekdays only",
  },
];

export const paymentMethods = [
  "Credit Card",
  "PayPal",
  "Stripe",
  "SSLCommerz",
  "bKash",
  "Nagad",
  "Rocket",
  "Cash On Delivery",
];

export const customerNav: NavItem[] = [
  { title: "Dashboard", href: "/dashboard/customer", icon: BarChart3 },
  { title: "My Profile", href: "/dashboard/customer/profile", icon: Users },
  { title: "Addresses", href: "/dashboard/customer/addresses", icon: Building2 },
  { title: "Orders", href: "/dashboard/customer/orders", icon: ReceiptText },
  { title: "Wishlist", href: "/dashboard/customer/wishlist", icon: Heart },
  { title: "Notifications", href: "/dashboard/customer/notifications", icon: Bell },
];

export const vendorNav: NavItem[] = [
  { title: "Dashboard", href: "/dashboard/vendor", icon: BarChart3 },
  { title: "Products", href: "/dashboard/vendor/products", icon: Boxes },
  { title: "Orders", href: "/dashboard/vendor/orders", icon: ReceiptText },
  { title: "Inventory", href: "/dashboard/vendor/inventory", icon: PackageCheck },
];

export const adminNav: NavItem[] = [
  { title: "Overview", href: "/dashboard/admin", icon: BarChart3 },
  { title: "Users", href: "/dashboard/admin/users", icon: Users },
  { title: "Products", href: "/dashboard/admin/products", icon: Boxes },
  { title: "Orders", href: "/dashboard/admin/orders", icon: ReceiptText },
  { title: "Vendors", href: "/dashboard/admin/vendors", icon: Store },
  { title: "Payments", href: "/dashboard/admin/payments", icon: CreditCard },
  { title: "Marketing", href: "/dashboard/admin/marketing", icon: Megaphone },
  { title: "Content", href: "/dashboard/admin/content", icon: Ticket },
  { title: "Support", href: "/dashboard/admin/support", icon: ShieldCheck },
  { title: "Reports", href: "/dashboard/admin/reports", icon: BadgeCheck },
  { title: "Settings", href: "/dashboard/admin/settings", icon: Settings },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);