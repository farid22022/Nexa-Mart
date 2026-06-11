interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

export function PageHero({
  badge,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="container mx-auto px-6 py-24">
      <span className="text-red-600 font-semibold">
        {badge}
      </span>

      <h1 className="text-5xl font-bold mt-4 mb-6">
        {title}
      </h1>

      <p className="max-w-3xl text-muted-foreground">
        {description}
      </p>
    </section>
  );
}