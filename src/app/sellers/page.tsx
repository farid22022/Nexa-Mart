import { MotionReveal } from '@/components/motion-reveal'
import { FeatureGrid } from '@/components/feature-grid'
import { AnimatedStats } from '@/components/animated-stats'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Star, TrendingUp, Users } from 'lucide-react'

export const metadata = {
  title: 'Sellers & Marketplace',
  description: 'Discover top sellers and become a seller on Nexa Mart.',
}

export default function SellersPage() {
  const stats = [
    { label: 'Active Sellers', value: 15000, suffix: '+', icon: <Users className="h-6 w-6" /> },
    { label: 'Avg. Seller Rating', value: 48, suffix: '/5', icon: <Star className="h-6 w-6" /> },
    { label: 'Monthly GMV', value: 250, suffix: 'M', icon: <TrendingUp className="h-6 w-6" /> },
  ]

  const features = [
    {
      id: '1',
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Grow Your Business',
      description: 'Access millions of buyers and scale your sales with our tools.',
    },
    {
      id: '2',
      icon: <Users className="h-6 w-6" />,
      title: 'Seller Support',
      description: 'Dedicated support team to help you succeed on our platform.',
    },
    {
      id: '3',
      icon: <Star className="h-6 w-6" />,
      title: 'Build Your Brand',
      description: 'Custom storefronts and marketing tools to showcase your products.',
    },
  ]

  const topSellers = [
    {
      name: 'TechHub Pro',
      rating: 4.8,
      reviews: 3200,
      followers: 125000,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=60',
      category: 'Electronics',
    },
    {
      name: 'Fashion Forward',
      rating: 4.9,
      reviews: 4500,
      followers: 250000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=60',
      category: 'Fashion',
    },
    {
      name: 'Home Essentials',
      rating: 4.7,
      reviews: 2800,
      followers: 95000,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=60',
      category: 'Home & Garden',
    },
    {
      name: 'Sports Gear Hub',
      rating: 4.8,
      reviews: 3600,
      followers: 180000,
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=500&q=60',
      category: 'Sports',
    },
    {
      name: 'Beauty Bliss',
      rating: 4.9,
      reviews: 5200,
      followers: 320000,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=60',
      category: 'Beauty',
    },
    {
      name: 'Book Paradise',
      rating: 4.6,
      reviews: 1900,
      followers: 65000,
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?auto=format&fit=crop&w=500&q=60',
      category: 'Books',
    },
  ]

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="container-page py-20">
        <MotionReveal className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-4">
            Sellers & Marketplace
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover amazing products from thousands of trusted sellers, or start your own business on Nexa Mart.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/products">Browse Sellers</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/register">Become a Seller</Link>
            </Button>
          </div>
        </MotionReveal>
      </section>

      {/* Stats */}
      <AnimatedStats stats={stats} />

      {/* Benefits */}
      <section className="container-page py-20">
        <MotionReveal className="mb-12">
          <h2 className="text-3xl font-bold">Why Sell on Nexa Mart?</h2>
        </MotionReveal>
        <FeatureGrid features={features} />
      </section>

      {/* Top Sellers */}
      <section className="container-page py-20 border-t">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Sellers</h2>
          <p className="text-muted-foreground">
            Explore products from our highest-rated sellers
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topSellers.map((seller, index) => (
            <div
              key={seller.name}
              className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Header image */}
              <div className="relative h-40 overflow-hidden bg-muted">
                <img
                  src={seller.image}
                  alt={seller.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {seller.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {seller.category}
                </p>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(seller.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">{seller.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({seller.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Stats */}
                <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Followers</p>
                    <p className="font-semibold">
                      {(seller.followers / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Reviews</p>
                    <p className="font-semibold">
                      {seller.reviews.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/sellers/${seller.name}`}>
                    Visit Store
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become seller CTA */}
      <section className="container-page py-20">
        <div className="rounded-lg border bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12">
          <div className="grid gap-8 items-center lg:grid-cols-2">
            <MotionReveal>
              <h2 className="text-3xl font-bold mb-4">
                Ready to Become a Seller?
              </h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of successful sellers growing their business on Nexa Mart. Get instant access to millions of buyers, powerful selling tools, and dedicated support.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  0% commission for the first 3 months
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Free seller tools and analytics
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  24/7 seller support
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Marketing and promotional assistance
                </li>
              </ul>
              <Button asChild size="lg">
                <Link href="/register?role=seller">Start Selling Today</Link>
              </Button>
            </MotionReveal>

            <div className="relative h-96 rounded-lg overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=85"
                alt="Become a seller"
                fill
                className="object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
