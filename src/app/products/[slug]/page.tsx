import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Share2, ShieldCheck, Star, Truck } from "lucide-react";
import { notFound } from "next/navigation";

import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductCard } from "@/components/product-card";
import { ProductGallery } from "@/components/product-gallery";
import { QuantitySelector } from "@/components/quantity-selector";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency, getProductBySlug, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  return {
    title: product?.name ?? "Product details",
    description: product?.description,
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .concat(products.filter((item) => item.id !== product.id))
    .slice(0, 4);

  return (
    <div className="container-page py-8">
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/products" className="hover:text-foreground">
          Products
        </Link>{" "}
        / {product.name}
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <ProductGallery images={product.gallery} name={product.name} />
        <div>
          <Badge>{product.badge}</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-muted-foreground">{product.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-3xl font-semibold">
              {formatCurrency(product.price)}
            </span>
            <span className="text-lg text-muted-foreground line-through">
              {formatCurrency(product.originalPrice)}
            </span>
            <Badge variant="secondary">{product.stock}</Badge>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground">
              {product.reviews.toLocaleString()} reviews
            </span>
          </div>
          <Separator className="my-6" />
          <div className="space-y-5">
            <div>
              <p className="mb-2 text-sm font-medium">Available colors</p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className="size-8 rounded-full border"
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Variants</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Quantity</p>
              <QuantitySelector />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <AddToCartButton name={product.name} />
              <Button>Buy now</Button>
              <Button variant="outline">
                <Heart /> Wishlist
              </Button>
              <Button variant="outline">
                <Share2 /> Share
              </Button>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
              <Truck className="size-5 text-primary" />
              <div>
                <p className="font-medium">Fast delivery</p>
                <p className="text-sm text-muted-foreground">2 to 4 business days</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
              <ShieldCheck className="size-5 text-primary" />
              <div>
                <p className="font-medium">Protected checkout</p>
                <p className="text-sm text-muted-foreground">Secure payment UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Product specifications</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="rounded-lg border bg-background p-4">
                <p className="text-sm text-muted-foreground">{key}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reviews summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {["Quality exceeded expectations", "Delivery was right on time", "Packaging felt premium"].map((review) => (
              <div key={review} className="rounded-lg border bg-background p-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-2 text-sm">{review}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
      <section className="mt-12">
        <div className="mb-6">
          <p className="text-sm font-medium text-primary">Related products</p>
          <h2 className="text-2xl font-semibold">Recently viewed and similar picks</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
