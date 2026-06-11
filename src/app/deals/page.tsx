import { MotionReveal } from '@/components/motion-reveal'
import { AnimatedStats } from '@/components/animated-stats'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Clock, TrendingUp, Zap } from 'lucide-react'

export const metadata = {
  title: 'Daily Deals & Flash Sales',
  description: 'Limited-time offers and exclusive deals on premium products.',
}

export default function DealsPage() {
  const stats = [
    { label: 'Active Deals', value: 156, icon: <TrendingUp className="h-6 w-6" /> },
    { label: 'Avg. Discount', value: 45, suffix: '%', icon: <Zap className="h-6 w-6" /> },
    { label: 'Time Left', value: 12, suffix: 'h', icon: <Clock className="h-6 w-6" /> },
  ]

  const deals = [
    {
      id: '1',
      title: 'Eclaffia Morning Ritual',
      originalPrice: 520,
      salePrice: 420,
      discount: 19,
      timeLeft: '6h 23m',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '2',
      title: 'Eclaffia Bold Roast',
      originalPrice: 560,
      salePrice: 450,
      discount: 20,
      timeLeft: '3h 45m',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '3',
      title: 'Eclaffia Spiced Blend',
      originalPrice: 580,
      salePrice: 480,
      discount: 17,
      timeLeft: '8h 12m',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '4',
      title: 'Dulacate Signature Bar',
      originalPrice: 210,
      salePrice: 160,
      discount: 24,
      timeLeft: '5h 54m',
      image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '5',
      title: 'Dulacate 70% Dark',
      originalPrice: 220,
      salePrice: 170,
      discount: 23,
      timeLeft: '2h 30m',
      image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '6',
      title: 'Dulacate Date & Nut Crunch',
      originalPrice: 240,
      salePrice: 185,
      discount: 23,
      timeLeft: '7h 15m',
      image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '7',
      title: 'Nexa Mart Wellness Duo',
      originalPrice: 820,
      salePrice: 680,
      discount: 17,
      timeLeft: '4h 10m',
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '8',
      title: 'Nexa Mart Premium Hamper',
      originalPrice: 1550,
      salePrice: 1250,
      discount: 19,
      timeLeft: '9h 00m',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=60',
    },
  ]

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="container-page py-20">
        <MotionReveal className="mb-12 text-center">
          <Badge className="mb-4">⏰ Limited Time</Badge>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-4">
            Flash Sales & Daily Deals
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover unbeatable discounts on premium products. Deals refresh daily with limited inventory.
          </p>
        </MotionReveal>
      </section>

      {/* Stats */}
      <AnimatedStats stats={stats} />

      {/* Deals Grid */}
      <section className="container-page py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Today's Top Deals</h2>
          <p className="text-muted-foreground mt-2">Shop before these incredible offers expire</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                
                {/* Discount Badge */}
                <div className="absolute right-3 top-3 rounded-lg bg-red-500 px-3 py-1 text-sm font-bold text-white">
                  -{deal.discount}%
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {deal.title}
                </h3>

                {/* Price */}
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-2xl font-bold text-primary">
                    ৳{deal.salePrice}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ৳{deal.originalPrice}
                  </span>
                </div>

                {/* Timer */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-orange-500">
                  <Clock className="h-4 w-4" />
                  {deal.timeLeft} left
                </div>

                {/* CTA */}
                <Button asChild className="mt-4 w-full">
                  <Link href="/products">Buy Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container-page py-20">
        <div className="rounded-lg border bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Deal</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get instant notifications for flash sales and exclusive member-only deals delivered to your inbox.
          </p>
          <Button size="lg">Subscribe to Deal Alerts</Button>
        </div>
      </section>
    </div>
  )
}