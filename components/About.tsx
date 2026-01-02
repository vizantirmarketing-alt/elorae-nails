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
            An Appointment-Only Studio Built on Standards
          </h2>
          <p className="text-charcoal text-lg mb-5">
            Elorae Nails is a private beauty studio built around structure, consistency, and elevated service standards.
          </p>
          <p className="text-warm-gray mb-5">
            Every appointment follows a clear process, from prep to finish, so results stay clean, professional, and long-lasting.
          </p>
          <p className="text-warm-gray mb-8">
            The studio operates by appointment only, with a small licensed team and clear policies that respect both client and technician time.
          </p>
        </div>
      </div>
    </section>
  );
}
