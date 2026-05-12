import type { Metadata } from "next";
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { blogContent } from "@/lib/blog";

const truncateForMeta = (text: string, maxLength = 155) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogContent[params.slug];

  if (!post) {
    return {
      title: "Blog | Eloraé Nails",
      description:
        "Nail care tips, trends, and updates from Eloraé Nails, a private luxury nail studio in Las Vegas.",
      alternates: {
        canonical: `https://www.eloraenails.com/blog/${params.slug}`,
      },
      openGraph: {
        title: "Blog | Eloraé Nails",
        description:
          "Nail care tips, trends, and updates from Eloraé Nails, a private luxury nail studio in Las Vegas.",
        type: "article",
      },
    };
  }

  const description = truncateForMeta(post.excerpt);

  return {
    title: `${post.title} | Eloraé Nails`,
    description,
    alternates: {
      canonical: `https://www.eloraenails.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogContent[params.slug];

  if (!post) {
    notFound();
  }

  // Get related posts (exclude current post)
  const relatedPosts = Object.entries(blogContent)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 3)
    .map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="bg-cream min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-warm-gray hover:text-charcoal transition-colors duration-300 mb-8 text-sm"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <p className="text-[0.75rem] tracking-[0.15em] uppercase text-rose mb-4">{post.date}</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal mb-8">
            {post.title}
          </h1>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none font-sans text-warm-gray leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Posts */}
          <div className="mt-16 pt-12 border-t border-blush">
            <h2 className="font-serif text-2xl text-charcoal mb-8">Related Articles</h2>
            <div className="space-y-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block border-b border-blush pb-6 group transition-all duration-300 hover:pl-4"
                >
                  <p className="text-[0.75rem] tracking-[0.1em] uppercase text-rose mb-2">{relatedPost.date}</p>
                  <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-rose transition-colors duration-300">
                    {relatedPost.title}
                  </h3>
                  <p className="text-warm-gray text-sm">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-blush text-center">
            <h3 className="font-serif text-2xl text-charcoal mb-4">Ready to Book?</h3>
            <p className="text-warm-gray mb-8">Experience professional nail care at Elorae Nails.</p>
            <a href="/#booking" className="btn btn-primary">
              Book Your Appointment
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}

