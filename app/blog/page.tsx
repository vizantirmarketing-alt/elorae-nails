import Link from 'next/link';

const blogPosts = [
  {
    date: "December 1, 2024",
    title: "What Is Gel-X? The Complete Guide to Soft Gel Extensions",
    excerpt: "Gel-X extensions are lightweight, durable, and damage-free. Learn how they work, how long they last, and why they're the #1 choice for natural-looking length.",
    slug: "what-is-gel-x-soft-gel-extensions",
  },
  {
    date: "November 28, 2024",
    title: "Acrylic Nails: Full Set vs Overlay — What's the Difference?",
    excerpt: "Not sure whether you need a full set or overlay? We break down acrylic nail options, pricing, and which is right for your nails.",
    slug: "acrylic-nails-full-set-vs-overlay",
  },
  {
    date: "November 20, 2024",
    title: "Hard Gel Nails vs Acrylic: Which Lasts Longer?",
    excerpt: "Hard gel and acrylic both offer strength and length — but they're not the same. Here's how to choose between them.",
    slug: "hard-gel-nails-vs-acrylic",
  },
  {
    date: "November 15, 2024",
    title: "Dip Powder Nails: Pros, Cons, and What to Expect",
    excerpt: "Dip powder offers long-lasting color without UV light. Learn if SNS dip nails are right for you.",
    slug: "dip-powder-nails-pros-and-cons",
  },
  {
    date: "November 10, 2024",
    title: "Gel Manicure vs Regular Polish: Which Should You Choose?",
    excerpt: "Gel polish lasts 2-3 weeks without chipping. Regular polish is quick and easy. Here's how to decide.",
    slug: "gel-manicure-vs-regular-polish",
  },
  {
    date: "November 5, 2024",
    title: "Spa Pedicure vs Basic Pedicure: What's Included?",
    excerpt: "From basic nail care to hot stone massage and paraffin treatments — understand what you get at each pedicure level.",
    slug: "spa-pedicure-vs-basic-pedicure",
  },
  {
    date: "October 28, 2024",
    title: "5 Benefits of a Hot Stone Pedicure for Tired Feet",
    excerpt: "Hot stone pedicures relieve tension, improve circulation, and melt away stress. Here's why you need one.",
    slug: "benefits-of-hot-stone-pedicure",
  },
  {
    date: "October 20, 2024",
    title: "What Is a Paraffin Wax Treatment? Benefits for Hands and Feet",
    excerpt: "Paraffin wax deeply moisturizes dry skin and soothes joint pain. Learn why it's the perfect add-on to any mani-pedi.",
    slug: "what-is-paraffin-wax-treatment",
  },
  {
    date: "October 15, 2024",
    title: "CBD Pedicure: How It Helps with Pain Relief and Relaxation",
    excerpt: "CBD-infused pedicures reduce inflammation, ease muscle tension, and leave your feet feeling renewed.",
    slug: "cbd-pedicure-pain-relief-benefits",
  },
  {
    date: "October 10, 2024",
    title: "Nail Shapes Explained: Almond, Coffin, Stiletto, and More",
    excerpt: "From classic oval to trendy coffin — find the perfect nail shape for your style and finger shape.",
    slug: "nail-shapes-guide-almond-coffin-stiletto",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-cream min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-rose mb-4">Our Blog</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal mb-6">
            Nail Care Tips & Guides
          </h1>
          <p className="text-warm-gray max-w-xl mx-auto">
            Expert insights on nail care, techniques, and the latest trends from Elorae Nails.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="block border-b border-blush pb-8 group transition-all duration-300 hover:pl-4"
            >
              <p className="text-[0.75rem] tracking-[0.1em] text-rose mb-2">{post.date}</p>
              <h2 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-rose transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-warm-gray text-sm mb-4">{post.excerpt}</p>
              <span className="text-[0.75rem] tracking-[0.1em] uppercase text-charcoal group-hover:text-rose transition-colors duration-300">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
