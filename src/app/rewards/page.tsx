import { MotionReveal } from '@/components/motion-reveal'
import { FeatureGrid } from '@/components/feature-grid'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Star, Zap, ShoppingBag } from 'lucide-react'

export const metadata = {
  title: 'Rewards Program',
  description: 'Earn points, unlock exclusive rewards, and enjoy premium benefits.',
}

export default function RewardsPage() {
  const features = [
    {
      id: '1',
      icon: <Star className="h-6 w-6" />,
      title: 'Earn Points',
      description: 'Get 1 point for every dollar spent. Points never expire.',
    },
    {
      id: '2',
      icon: <Zap className="h-6 w-6" />,
      title: 'Exclusive Deals',
      description: 'Members-only sales, early access to drops, and special discounts.',
    },
    {
      id: '3',
      icon: <ShoppingBag className="h-6 w-6" />,
      title: 'Free Shipping',
      description: 'Unlimited free standard shipping on all purchases.',
    },
    {
      id: '4',
      icon: <Badge className="h-6 w-6" />,
      title: 'Tier Benefits',
      description: 'Unlock higher tiers for increased earning rates and exclusive perks.',
    },
  ]

  const tiers = [
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-500',
      minPoints: 0,
      perks: ['1x points on all purchases', 'Standard shipping', 'Birthday gift'],
    },
    {
      name: 'Gold',
      color: 'from-yellow-400 to-yellow-500',
      minPoints: 500,
      perks: ['1.5x points on all purchases', 'Free express shipping', 'VIP customer service', '5% bonus discount'],
    },
    {
      name: 'Platinum',
      color: 'from-blue-400 to-blue-600',
      minPoints: 2000,
      perks: ['2x points on all purchases', 'Free overnight shipping', 'Exclusive deals', '10% VIP discount', 'Concierge service'],
    },
    {
      name: 'Diamond',
      color: 'from-purple-400 to-purple-600',
      minPoints: 5000,
      perks: ['3x points on all purchases', 'Priority shipping', 'Exclusive events', '15% VIP discount', 'Personal shopper', 'Priority support'],
    },
  ]

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="container-page py-20">
        <MotionReveal className="mb-12">
          <Badge className="mb-4">🎁 Loyalty Rewards</Badge>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-4">
            Earn & Redeem with Nexa Mart
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Get rewarded for every purchase. More points, better perks, exclusive benefits.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/register">Join Now</Link>
          </Button>
        </MotionReveal>
      </section>

      {/* Features */}
      <section className="container-page py-20">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <FeatureGrid features={features} />
      </section>

      {/* Tier comparison */}
      <section className="container-page py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Member Tiers</h2>
          <p className="text-muted-foreground">Progress through tiers to unlock greater rewards</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative overflow-hidden rounded-lg border bg-card p-6 transition-all duration-500 hover:shadow-lg hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${tier.color} opacity-10 blur-2xl`} />

              {/* Tier name */}
              <div className="relative mb-4">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.name}
                </h3>
                {tier.minPoints > 0 && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {tier.minPoints.toLocaleString()}+ points
                  </p>
                )}
              </div>

              {/* Perks */}
              <ul className="relative space-y-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Redemption options */}
      <section className="container-page py-20 border-t">
        <MotionReveal className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Redeem Your Points</h2>
          <p className="text-muted-foreground">
            Choose how you want to spend your hard-earned rewards
          </p>
        </MotionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'Discounts', desc: '100 points = $5 off', icon: '💰' },
            { title: 'Exclusive Items', desc: 'Limited edition products', icon: '🎁' },
            { title: 'Free Shipping', desc: 'Any order, any time', icon: '🚚' },
          ].map((option, index) => (
            <div
              key={option.title}
              className="rounded-lg border bg-card p-6 text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{option.icon}</div>
              <h3 className="font-semibold mb-2">{option.title}</h3>
              <p className="text-sm text-muted-foreground">{option.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="rounded-lg border bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Sign up today and get 100 welcome points to redeem immediately.
          </p>
          <Button asChild size="lg">
            <Link href="/register">Create Account</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
