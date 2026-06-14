"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Filter, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { categories, products } from "@/lib/data";
import { cn } from "@/lib/utils";

const PRODUCTS_PER_PAGE = 9;

const brands = ["Auralux", "StrideLab", "Northstar", "HavenDesk", "Lumio"];
const colors = ["#111827", "#0f766e", "#ef4444", "#f59e0b", "#f8fafc"];

function FiltersPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <SlidersHorizontal className="size-4" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium">Category</p>
          {categories.map((category) => (
            <Label key={category.name} className="flex items-center gap-2 text-sm">
              <Checkbox />
              {category.name}
            </Label>
          ))}
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">Brand</p>
          {brands.map((brand) => (
            <Label key={brand} className="flex items-center gap-2 text-sm">
              <Checkbox />
              {brand}
            </Label>
          ))}
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">Price range</p>
          <Slider defaultValue={[120, 720]} max={1000} step={20} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$120</span>
            <span>$720</span>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">Ratings</p>
          {["4 stars & up", "3 stars & up", "Top reviewed"].map((rating) => (
            <Label key={rating} className="flex items-center gap-2 text-sm">
              <Checkbox />
              {rating}
            </Label>
          ))}
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">Availability</p>
          {["In stock", "Low stock", "Pre-order"].map((item) => (
            <Label key={item} className="flex items-center gap-2 text-sm">
              <Checkbox />
              {item}
            </Label>
          ))}
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">Color</p>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                aria-label={`Filter color ${color}`}
                className="size-7 rounded-full border transition-transform duration-150 hover:scale-110 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">Size</p>
          <div className="flex flex-wrap gap-2">
            {["S", "M", "L", "XL", "40mm", "24L"].map((size) => (
              <Badge key={size} variant="secondary" className="rounded-md">
                {size}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Animated product grid ────────────────────────────────────────────────────

interface AnimatedProductGridProps {
  page: number;
  pageProducts: typeof products;
}

function AnimatedProductGrid({ page, pageProducts }: AnimatedProductGridProps) {
  const [visibleKey, setVisibleKey] = useState(page);
  const [animating, setAnimating] = useState(false);
  const [displayProducts, setDisplayProducts] = useState(pageProducts);

  useEffect(() => {
    if (page === visibleKey) return;

    setAnimating(true);
    const timeout = setTimeout(() => {
      setDisplayProducts(pageProducts);
      setVisibleKey(page);
      setAnimating(false);
    }, 180); // fade-out duration

    return () => clearTimeout(timeout);
  }, [page]);

  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 xl:grid-cols-3 transition-all duration-200",
        animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      )}
      style={{ willChange: "opacity, transform" }}
    >
      {displayProducts.map((product, i) => (
        <div
          key={`${visibleKey}-${product.id}`}
          className="product-card-enter"
          style={{ "--delay": `${i * 40}ms` } as React.CSSProperties}
        >
          <ProductCard product={product} />
        </div>
      ))}

      {/* Inline keyframe injection — only the card enter animation */}
      <style>{`
        .product-card-enter {
          animation: cardEnter 0.32s ease both;
          animation-delay: var(--delay, 0ms);
        }
        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .product-card-enter { animation: none; }
        }
      `}</style>
    </div>
  );
}

// ─── Pagination bar ───────────────────────────────────────────────────────────

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  /** Build the page number array with ellipsis sentinels (-1). */
  const pages = buildPageRange(currentPage, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-center gap-1"
    >
      {/* Prev */}
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        variant="arrow"
      >
        <ChevronLeft className="size-4" />
      </PaginationButton>

      {/* Pages */}
      {pages.map((p, idx) =>
        p === -1 ? (
          <span
            key={`ellipsis-${idx}`}
            className="flex size-9 select-none items-center justify-center text-sm text-muted-foreground"
          >
            …
          </span>
        ) : (
          <PaginationButton
            key={p}
            onClick={() => onPageChange(p)}
            active={p === currentPage}
            aria-label={`Page ${p}`}
            aria-current={p === currentPage ? "page" : undefined}
          >
            {p}
          </PaginationButton>
        )
      )}

      {/* Next */}
      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        variant="arrow"
      >
        <ChevronRight className="size-4" />
      </PaginationButton>
    </nav>
  );
}

interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  variant?: "number" | "arrow";
}

function PaginationButton({
  active = false,
  variant = "number",
  children,
  className,
  disabled,
  ...props
}: PaginationButtonProps) {
  return (
    <button
      disabled={disabled}
      {...props}
      className={cn(
        // base
        "relative flex size-9 items-center justify-center rounded-md text-sm font-medium",
        "outline-none ring-offset-background",
        "transition-all duration-150 ease-out",
        "select-none",
        // focus
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        // active page
        active && "bg-primary text-primary-foreground shadow-sm",
        // idle number/arrow
        !active && !disabled && [
          "text-foreground hover:bg-accent hover:text-accent-foreground",
          "active:scale-95",
        ],
        // disabled arrow
        disabled && "cursor-not-allowed opacity-30",
        className
      )}
    >
      {children}

      {/* Underline indicator for active page */}
      {active && (
        <span
          className="absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary-foreground/60"
          aria-hidden
        />
      )}
    </button>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns page numbers with -1 as ellipsis sentinel. */
function buildPageRange(current: number, total: number): number[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const delta = 1; // siblings around current
  const range: number[] = [];

  // Always include first, last, and window around current
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1);
  if (left > 2) range.push(-1);
  for (let p = left; p <= right; p++) range.push(p);
  if (right < total - 1) range.push(-1);
  range.push(total);

  return range;
}

// ─── Results summary ──────────────────────────────────────────────────────────

function ResultsSummary({
  currentPage,
  totalPages,
  totalProducts,
  perPage,
}: {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  perPage: number;
}) {
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalProducts);

  return (
    <p className="text-sm text-muted-foreground">
      Showing{" "}
      <span className="font-medium text-foreground">
        {start}–{end}
      </span>{" "}
      of{" "}
      <span className="font-medium text-foreground">{totalProducts}</span>{" "}
      products
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const pageProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages || page === currentPage) return;
      setCurrentPage(page);

      // Scroll the grid into view smoothly on page change
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [currentPage, totalPages]
  );

  return (
    <div className="container-page py-8">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-primary">Catalog</p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Product listing
          </h1>
          <p className="mt-2 text-muted-foreground">
            Filter by category, brand, price, rating, availability, color, and
            size.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <Filter />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="overflow-y-auto">
              <SheetTitle>Filters</SheetTitle>
              <div className="mt-5">
                <FiltersPanel />
              </div>
            </SheetContent>
          </Sheet>
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="best-selling">Best Selling</SelectItem>
              <SelectItem value="low-high">Price Low to High</SelectItem>
              <SelectItem value="high-low">Price High to Low</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <FiltersPanel />
        </aside>

        <div ref={gridRef} className="scroll-mt-4">
          {/* Results count + page info */}
          <div className="mb-4 flex items-center justify-between">
            <ResultsSummary
              currentPage={currentPage}
              totalPages={totalPages}
              totalProducts={products.length}
              perPage={PRODUCTS_PER_PAGE}
            />
            <span className="text-xs text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
          </div>

          {/* Animated product grid */}
          <AnimatedProductGrid page={currentPage} pageProducts={pageProducts} />

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}