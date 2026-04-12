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
            Eloraé Nails is a private nail studio in Las Vegas. I keep things clean, consistent, and calm from start to finish.
          </p>
          <p className="text-warm-gray mb-5">
            Every appointment follows the same process, from prep to finish, so your nails look clean and hold up well. We sanitize tools between every client, keep the space clean, and keep things calm in the studio.
          </p>
          <p className="text-warm-gray mb-5">
            This studio is for clients who want the same good experience every time they book. It's appointment only, so you're not sitting around waiting or feeling rushed. Just a clean, private space where you can relax and get taken care of properly.
          </p>
          <p className="text-warm-gray mb-8">
            We're appointment only, with a small licensed team and clear policies so things run smoothly for everyone.
          </p>
          <p className="text-warm-gray mb-8">
            We do everyday nails, bridal sets, birthday nails, and event nails too.
          </p>
        </div>
      </div>
    </section>
  );
}
