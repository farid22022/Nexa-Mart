import { Search, SearchX } from "lucide-react";

import { EmptyState } from "@/components/empty-state";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { categories, products } from "@/lib/data";

const suggestions = ["wireless headphones", "running shoes", "smart watch"];
const recent = ["office chair", "commuter backpack", "skincare"];
const trending = ["bKash offers", "flash sale", "creator camera"];

export default function SearchPage() {
  return (
    <div className="container-page py-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Search</h1>
        <p className="mt-2 text-muted-foreground">
          Suggestions, recent searches, trending terms, product results, and
          category matches.
        </p>
        <div className="mt-6 flex items-center gap-2 rounded-lg border bg-card px-3 py-2">
          <Search className="size-5 text-muted-foreground" />
          <Input
            className="border-0 bg-transparent shadow-none focus-visible:ring-0"
            placeholder="Search products"
          />
        </div>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {[
          ["Suggestions", suggestions],
          ["Recent searches", recent],
          ["Trending searches", trending],
        ].map(([title, items]) => (
          <Card key={title as string}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {(items as string[]).map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      <section className="mt-10">
        <h2 className="mb-5 text-2xl font-semibold">Product results</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="mb-5 text-2xl font-semibold">Category results</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.name}>
              <CardContent className="p-5">
                <p className="font-medium">{category.name}</p>
                <p className="text-sm text-muted-foreground">
                  {category.count} matching products
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <EmptyState
          icon={SearchX}
          title="Empty result state"
          description="When an API returns no products, this component gives the page a polished fallback instead of a blank area."
          action="Clear filters"
        />
      </section>
    </div>
  );
}
