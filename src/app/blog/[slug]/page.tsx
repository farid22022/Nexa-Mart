import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ArrowRight, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { formatDate } from '@/lib/date-utils'
import { MotionReveal } from '@/components/motion-reveal'

export const metadata = {
  title: 'Blog Post',
  description: 'Read our latest blog article',
}

// Mock blog data - replace with actual data fetching
const blogPosts: Record<string, any> = {
  '1': {
    id: '1',
    title: '10 Tips for Smart Online Shopping in 2025',
    excerpt: 'Learn how to save money, avoid scams, and make the most of your online shopping experience.',
    author: 'Sarah Johnson',
    date: new Date('2025-12-01'),
    category: 'Shopping Tips',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=85',
    content: `
      <h2>1. Compare Prices Across Platforms</h2>
      <p>Before making any purchase, spend a few minutes comparing prices on different platforms. Use price comparison tools to ensure you're getting the best deal available.</p>

      <h2>2. Look for Discount Codes</h2>
      <p>Many retailers offer discount codes that can save you 10-30%. Check your email for subscriber discounts or search for current promotions before checkout.</p>

      <h2>3. Check Return Policies</h2>
      <p>Always review return policies before purchasing. A good return policy gives you peace of mind and protection if the product doesn't meet your expectations.</p>

      <h2>4. Verify Seller Credibility</h2>
      <p>Check seller ratings and reviews. Look for verified badges and read customer feedback to ensure you're buying from a trusted source.</p>

      <h2>5. Use Secure Payment Methods</h2>
      <p>Always pay using secure methods like credit cards or PayPal. These offer buyer protection if something goes wrong with your order.</p>

      <h2>6. Sign Up for Loyalty Programs</h2>
      <p>Join loyalty programs to earn points on every purchase. These points can be redeemed for discounts or exclusive perks.</p>

      <h2>7. Wait for Sale Events</h2>
      <p>Major sales happen throughout the year. If you can wait, timing your purchase during these events can save you significantly.</p>

      <h2>8. Read Product Reviews</h2>
      <p>Customer reviews provide valuable insights about product quality and functionality. Read both positive and negative reviews to make an informed decision.</p>

      <h2>9. Protect Your Personal Information</h2>
      <p>Only shop on secure websites (look for HTTPS). Never share sensitive information via email or message.</p>

      <h2>10. Keep Records of Purchases</h2>
      <p>Save order confirmations and receipts. These are crucial if you need to file a claim or process a return.</p>
    `,
  },
  '2': {
    id: '2',
    title: 'The Future of E-Commerce: What to Expect',
    excerpt: 'Explore emerging technologies and trends that will shape online retail over the next decade.',
    author: 'Mike Chen',
    date: new Date('2025-11-28'),
    category: 'Industry Insights',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
    content: `
      <h2>AI-Powered Personalization</h2>
      <p>Artificial intelligence is revolutionizing how retailers understand and serve customers. Expect increasingly personalized recommendations and shopping experiences.</p>

      <h2>Virtual and Augmented Reality</h2>
      <p>VR and AR technologies will allow customers to virtually try products before purchasing, reducing returns and improving satisfaction.</p>

      <h2>Voice Commerce</h2>
      <p>Smart speakers and voice assistants are becoming central to how people shop. Brands are optimizing for voice search and purchases.</p>

      <h2>Sustainability Focus</h2>
      <p>Consumers increasingly demand eco-friendly options. Expect more sustainable packaging, carbon-neutral shipping, and ethical sourcing.</p>

      <h2>Social Commerce Evolution</h2>
      <p>Shopping directly through social media platforms is becoming mainstream, blurring the lines between discovery and purchase.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  // Get related posts
  const relatedPosts = Object.values(blogPosts)
    .filter((p: any) => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </section>

      {/* Article */}
      <section className="container-page py-20">
        <div className="max-w-3xl">
          <MotionReveal>
            {/* Meta info */}
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">By {post.author}</span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {post.title}
            </h1>

            {/* Share buttons */}
            <div className="mb-8 flex gap-2 border-b pb-8">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Content */}
            <article
              className="prose prose-invert max-w-none space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </MotionReveal>

          {/* Author info */}
          <div className="mt-12 rounded-lg border bg-card p-6">
            <h3 className="font-semibold mb-2">About the Author</h3>
            <p className="text-muted-foreground">
              {post.author} is a passionate writer and industry expert with years of experience in e-commerce and digital retail.
            </p>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="container-page py-20 border-t">
          <h2 className="mb-8 text-3xl font-bold">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost: any) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:border-primary/50"
              >
                <div className="relative h-40 overflow-hidden bg-muted">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-primary">
                    {relatedPost.category}
                  </span>
                  <h3 className="mt-2 line-clamp-2 font-semibold group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Read more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
