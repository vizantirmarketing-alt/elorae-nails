const blogPosts = [
  {
    date: "December 30, 2025",
    title: "What Is Gel-X? The Complete Guide to Soft Gel Extensions",
    excerpt: "Looking for nail extensions in Las Vegas that won't damage your natural nails? Gel-X soft gel extensions are lightweight, flexible, and last 3-4 weeks. We explain the full process, cost, and why so many of our clients are making the switch from acrylics.",
  },
  {
    date: "December 28, 2025",
    title: "Acrylic Nails: Full Set vs Overlay — What's the Difference?",
    excerpt: "First time getting acrylics? The difference between a full set and overlay confuses a lot of people. Full sets add length, overlays add strength. Here's how to know which one you need, what each costs, and what to expect at your appointment.",
  },
  {
    date: "December 25, 2025",
    title: "Hard Gel Nails vs Acrylic: Which Lasts Longer?",
    excerpt: "Hard gel and acrylic can both last a month, but they're not the same. One soaks off, one has to be filed. One flexes, one doesn't. We break down the real differences so you can pick what works for your hands and your life.",
  },
  {
    date: "December 22, 2025",
    title: "Dip Powder Nails: Pros, Cons, and What to Expect",
    excerpt: "Dip powder gives you 3-4 weeks of chip-free color without a UV lamp. But is it better than gel? We cover the real pros and cons, how it compares to other options, and who it's actually best for.",
  },
  {
    date: "December 19, 2025",
    title: "Gel Manicure vs Regular Polish: Which Should You Choose?",
    excerpt: "Gel lasts 2-3 weeks. Regular polish chips in days. But gel costs more and needs professional removal. Here's how to decide which is worth it based on your schedule, budget, and how hard you are on your hands.",
  },
  {
    date: "December 16, 2025",
    title: "Spa Pedicure vs Basic Pedicure: What's Included?",
    excerpt: "Is the spa pedicure upgrade actually worth it? We break down exactly what's included at each level — from a quick maintenance pedi to the full hot stone and paraffin treatment — so you know what you're paying for.",
  },
  {
    date: "December 13, 2025",
    title: "5 Benefits of a Hot Stone Pedicure for Tired Feet",
    excerpt: "If your feet hurt after long days, a hot stone pedicure isn't just nice — it's therapeutic. The heated stones release muscle tension and improve circulation. Here's what to expect and who benefits most.",
  },
  {
    date: "December 10, 2025",
    title: "What Is a Paraffin Wax Treatment? Benefits for Hands and Feet",
    excerpt: "Dry, cracked hands or feet? Paraffin wax is one of the most effective (and affordable) add-ons we offer. The warm wax deeply moisturizes and can ease joint stiffness. Here's how it works and why clients love it.",
  },
  {
    date: "December 7, 2025",
    title: "Hemp Pedicure: How It Helps with Pain Relief and Relaxation",
    excerpt: "Hemp pedicures aren't just trendy — they actually help with inflammation and pain. We explain what Hemp does (and doesn't do), who it's best for, and what makes our Hemp pedicure different.",
  },
  {
    date: "December 4, 2025",
    title: "Nail Shapes Explained: Almond, Coffin, Stiletto, and More",
    excerpt: "Almond, coffin, stiletto, squoval — nail shape matters more than you think. The right shape flatters your fingers and fits your lifestyle. Here's a breakdown of every popular shape and how to choose.",
  },
  {
    slug: "bridal-nails-las-vegas",
    date: "April 10, 2026",
    title: "Bridal Nails Las Vegas: How to Choose the Perfect Look for Your Wedding Day",
    excerpt: "Your wedding nails should be as carefully chosen as your dress. Here is everything you need to know about booking bridal nails in Las Vegas.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-cream min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-rose mb-4">Our Blog</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal mb-6">
            Nail Care Tips & Guides
          </h1>
          <p className="text-warm-gray max-w-xl mx-auto">
            Expert insights on nail care, techniques, and the latest trends.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="border-b border-blush pb-12">
              <p className="text-[0.75rem] tracking-[0.15em] uppercase text-rose mb-3">{post.date}</p>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-4">
                {post.title}
              </h2>
              <p className="text-warm-gray leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
