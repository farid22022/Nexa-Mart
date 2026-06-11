"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Star } from "lucide-react";

import { AddToCartButton } from "@/components/add-to-cart-button";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { formatCurrency, type Product } from "@/lib/data";

export function ProductQuickView({ product }: { product: Product }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Eye />
          Quick view
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 360px, 90vw"
            />
          </div>
          <div>
            <DialogHeader>
              <DialogTitle className="text-2xl">{product.name}</DialogTitle>
            </DialogHeader>
            <p className="mt-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-semibold">
                {formatCurrency(product.price)}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                {formatCurrency(product.originalPrice)}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-muted-foreground">
                {product.reviews.toLocaleString()} reviews
              </span>
            </div>
            <Separator className="my-5" />
            <div className="grid grid-cols-2 gap-3 text-sm">
              {Object.entries(product.specs)
                .slice(0, 4)
                .map(([key, value]) => (
                  <div key={key}>
                    <p className="text-muted-foreground">{key}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
            </div>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <AddToCartButton name={product.name} />
              <Button asChild variant="outline">
                <Link href={`/products/${product.slug}`}>View details</Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
