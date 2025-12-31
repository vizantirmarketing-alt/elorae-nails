export default function About() {
  return (
    <section id="about" className="py-28 px-8 lg:px-16 bg-gradient-to-br from-blush to-cream">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <div className="placeholder-img w-full h-full" />
          </div>
          <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-mauve -z-10 hidden md:block" />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <p className="section-label">Hey, I&apos;m James</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-8">
            Nails are my <em className="italic text-rose">craft</em>, not just my job
          </h2>
          <p className="text-charcoal text-lg mb-5">
            I&apos;ve been doing nails for almost 30 years — what started as a way to help out at my family&apos;s salon became a lifelong passion. Now I get to do it every day in my own private studio.
          </p>
          <p className="text-warm-gray mb-5">
            My space is just me — no rush, no noise, no chaos. Just good music, good conversation (or peaceful quiet if you prefer), and my full attention on creating something beautiful for you.
          </p>
          <p className="text-warm-gray mb-8">
            Whether you want clean and classic or full-on nail art, I&apos;m here to make it happen. After three decades, I still genuinely love what I do, and I think that shows in the work.
          </p>
          <p className="font-serif italic text-3xl text-rose">— James</p>
        </div>
      </div>
    </section>
  );
}
