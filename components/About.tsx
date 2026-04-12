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
            Eloraé Nails is a private nail studio in Las Vegas built around structure, consistency, and elevated service standards.
          </p>
          <p className="text-warm-gray mb-5">
            Every appointment follows a clear process from prep to finish, so results stay clean, professional, and long-lasting. Tools are sanitized between every client, surfaces are kept clean, and the environment stays calm and focused — because the details matter.
          </p>
          <p className="text-warm-gray mb-5">
            This studio is for clients who want a reliable experience. Not a walk-in shop where you wait an hour and get rushed through. Just a clean, private space where your appointment is respected and the work is done right.
          </p>
          <p className="text-warm-gray mb-8">
            The studio operates by appointment only with a small licensed team and clear policies that respect both client and technician time.
          </p>
          <p className="text-warm-gray mb-8">
            We work with clients for everyday nail care, special occasions, and everything in between — bridal appointments, birthday celebrations, and Las Vegas event nails included.
          </p>
        </div>
      </div>
    </section>
  );
}
