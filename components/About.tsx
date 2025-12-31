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
          <p className="section-label">About</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-8">
            Three decades of craft. A team that stays.
          </h2>
          <p className="text-charcoal text-lg mb-5">
            I&apos;ve been doing nails for almost 30 years. The people who work alongside me have been here a long time — because this isn&apos;t a job to us.
          </p>
          <p className="text-warm-gray mb-5">
            We don&apos;t rush. We don&apos;t overbook. Every appointment gets our full attention.
          </p>
          <p className="text-warm-gray mb-8">
            Whether you want clean and classic or something more creative, we&apos;re here to make it happen.
          </p>
          <p className="font-serif italic text-3xl text-rose">— James & Team</p>
        </div>
      </div>
    </section>
  );
}
