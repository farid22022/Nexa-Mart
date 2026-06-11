"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="grid gap-3">
      <div className="group relative aspect-square overflow-hidden rounded-lg bg-muted">
        <Image
          src={active}
          alt={name}
          fill
          priority
          className="object-cover transition duration-500 group-hover:scale-110"
          sizes="(min-width: 1024px) 560px, 100vw"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => (
          <Button
            key={image}
            type="button"
            variant={active === image ? "secondary" : "outline"}
            className="relative h-auto aspect-square overflow-hidden p-0"
            onClick={() => setActive(image)}
            aria-label={`View ${name} image`}
          >
            <Image src={image} alt={name} fill className="object-cover" sizes="120px" />
          </Button>
        ))}
      </div>
    </div>
  );
}
