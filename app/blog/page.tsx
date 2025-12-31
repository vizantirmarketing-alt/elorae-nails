import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    title: "How to Make Your Gel Manicure Last Longer",
    excerpt:
      "Simple tips to keep your nails looking fresh for weeks. From cuticle oil to avoiding hot water, here's what actually works.",
    date: "Coming Soon",
  },
  {
    title: "2024 Nail Trends I'm Obsessed With",
    excerpt:
      "Chrome finishes, aura nails, and the return of French tips — here are the trends I'm seeing in my studio.",
    date: "Coming Soon",
  },
  {
    title: "What to Expect at Your First Appointment",
    excerpt:
      "New to getting your nails done? Here's a complete walkthrough of what happens during a gel extension appointment.",
    date: "Coming Soon",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-8 lg:px-16 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Journal</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-light mb-12">Blog</h1>

          <div className="space-y-12">
            {posts.map((post, index) => (
              <article
                key={index}
                className="border-b border-blush pb-12 last:border-0"
              >
                <p className="text-rose text-sm mb-2">{post.date}</p>
                <h2 className="font-serif text-2xl text-charcoal mb-3">
                  {post.title}
                </h2>
                <p className="text-warm-gray mb-4">{post.excerpt}</p>
                <span className="text-sm text-mauve italic">Article coming soon</span>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-warm-gray mb-4">
              Follow along on Instagram for daily nail content
            </p>
            <a
              href="https://instagram.com/eloraenails"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              @eloraenails
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
