import { Filter, SlidersHorizontal } from "lucide-react";

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
                className="size-7 rounded-full border"
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

export default function ProductsPage() {
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
        <div className="flex gap-2">
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
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
