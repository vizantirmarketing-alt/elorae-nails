export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-8 pt-32 pb-16 relative overflow-hidden bg-cream">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-[0.15] z-0">
        <div className="w-full h-full bg-gradient-to-br from-blush to-[#D4C4BC]" />
        <div className="w-full h-full bg-gradient-to-br from-mauve to-rose" />
        <div className="w-full h-full bg-gradient-to-br from-[#D4C4BC] to-mauve" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <p className="text-[0.75rem] tracking-[0.4em] uppercase text-rose mb-8">
          Private Nail Studio · Las Vegas
        </p>
        <h1 className="font-serif font-light text-charcoal text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-4">
          Elorae
          <em className="block italic text-rose">Nails</em>
        </h1>
        <p className="font-serif text-xl sm:text-2xl italic text-warm-gray mb-12">
          Nail artistry in an intimate setting
        </p>
        <a href="#booking" className="btn btn-primary">
          Book Your Appointment
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-gray">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-mauve to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
}
