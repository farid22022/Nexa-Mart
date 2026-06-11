import { MotionReveal } from '@/components/motion-reveal'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { formatDate } from '@/lib/date-utils'
import { FeatureGrid } from '@/components/feature-grid'
import { FileText, Eye, Share2 } from 'lucide-react'

export const metadata = {
  title: 'Blog',
  description: 'Latest articles on e-commerce trends, tips, and insights.',
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: '1',
      title: '10 Tips for Smart Online Shopping in 2025',
      excerpt: 'Learn how to save money, avoid scams, and make the most of your online shopping experience.',
      author: 'Sarah Johnson',
      date: new Date('2025-12-01'),
      category: 'Shopping Tips',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=500&q=60',
      readTime: '5 min read',
    },
    {
      id: '2',
      title: 'The Future of E-Commerce: What to Expect',
      excerpt: 'Explore emerging technologies and trends that will shape online retail over the next decade.',
      author: 'Mike Chen',
      date: new Date('2025-11-28'),
      category: 'Industry Insights',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=60',
      readTime: '8 min read',
    },
    {
      id: '3',
      title: 'Sustainable Shopping: Making a Difference',
      excerpt: 'Discover eco-friendly products and how your purchases can contribute to environmental sustainability.',
      author: 'Emma Green',
      date: new Date('2025-11-25'),
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=500&q=60',
      readTime: '6 min read',
    },
    {
      id: '4',
      title: 'How to Spot and Avoid Online Shopping Scams',
      excerpt: 'Protect yourself with these essential security tips and best practices for safe online shopping.',
      author: 'David Miller',
      date: new Date('2025-11-22'),
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f9?auto=format&fit=crop&w=500&q=60',
      readTime: '7 min read',
    },
    {
      id: '5',
      title: 'Maximizing Your Rewards: Nexa Mart Loyalty Program',
      excerpt: 'Get more points, unlock exclusive perks, and make every purchase count with our rewards system.',
      author: 'Lisa Anderson',
      date: new Date('2025-11-20'),
      category: 'Rewards',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=500&q=60',
      readTime: '4 min read',
    },
    {
      id: '6',
      title: 'Small Business Success Stories on Nexa Mart',
      excerpt: 'Meet the entrepreneurs who grew their businesses to six figures using our platform.',
      author: 'James White',
      date: new Date('2025-11-18'),
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=60',
      readTime: '9 min read',
    },
  ]

  const testimonials = [
    {
      id: '1',
      name: 'Rachel Thompson',
      role: 'Regular Shopper',
      quote: "Nexa Mart's blog has completely changed how I shop online. The tips are practical and the articles are always informative.",
      rating: 5,
    },
    {
      id: '2',
      name: 'Marcus Johnson',
      role: 'Seller',
      quote: 'The seller guides and business insights have been invaluable for growing my store on the platform.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Jennifer Lee',
      role: 'Sustainability Advocate',
      quote: "Love the focus on eco-friendly shopping. This is the kind of content that makes a real difference.",
      rating: 5,
    },
  ]

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="container-page py-20">
        <MotionReveal className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-4">
            Nexa Mart Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Expert insights, shopping tips, and success stories from our community.
          </p>
        </MotionReveal>
      </section>

      {/* Featured Post */}
      <section className="container-page mb-20">
        <div className="relative overflow-hidden rounded-xl border bg-card">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="h-96 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="inline-block bg-primary/80 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {blogPosts[0].category}
            </span>
            <h2 className="text-3xl font-bold mb-3">{blogPosts[0].title}</h2>
            <p className="text-white/90 mb-4">{blogPosts[0].excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/75">
                {blogPosts[0].author} • {formatDate(blogPosts[0].date)}
              </div>
              <Button asChild variant="secondary">
                <Link href={`/blog/${blogPosts[0].id}`}>Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="container-page py-20">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={post.id}
              className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:border-primary/50 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
                  {post.category}
                </span>

                <h3 className="line-clamp-2 font-semibold group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.readTime}</span>
                  <span>{formatDate(post.date)}</span>
                </div>

                <Button asChild variant="ghost" className="mt-4 w-full justify-center">
                  <Link href={`/blog/${post.id}`}>Read Article</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20">
        <MotionReveal className="mb-12">
          <h2 className="text-3xl font-bold">What Readers Say</h2>
          <p className="text-muted-foreground mt-2">
            Join thousands of readers who trust our content
          </p>
        </MotionReveal>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* Newsletter */}
      <section className="container-page py-20">
        <div className="rounded-lg border bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Subscribe to get new articles delivered to your inbox every week.
          </p>
          <Button size="lg">Subscribe to Newsletter</Button>
        </div>
      </section>
    </div>
  )
}
