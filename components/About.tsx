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
            Eloraé Nails is a private nail studio in Las Vegas focused on clean work, consistency, and a calm client experience.
          </p>
          <p className="text-warm-gray mb-5">
            Every appointment has the same careful process, from prep to finish, so your nails look clean and last well. We sanitize tools between every client, keep surfaces clean, and make sure the space stays calm and focused.
          </p>
          <p className="text-warm-gray mb-5">
            This studio is for clients who want a consistent, professional appointment every time. It's not a walk-in shop, so you're not waiting around or getting rushed. Just a clean, private space where your appointment gets the time and attention it deserves.
          </p>
          <p className="text-warm-gray mb-8">
            We're appointment only, with a small licensed team and clear policies so everyone's time is respected.
          </p>
          <p className="text-warm-gray mb-8">
            We do everyday nail care, bridal nails, birthday sets, and nails for Vegas events too.
          </p>
        </div>
      </div>
    </section>
  );
}
