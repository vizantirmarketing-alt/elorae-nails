export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-8 pt-40 lg:pt-0 pb-16 relative overflow-hidden bg-cream">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-[0.15] z-0">
        <div className="w-full h-full bg-gradient-to-br from-blush to-[#D4C4BC]" />
        <div className="w-full h-full bg-gradient-to-br from-mauve to-rose" />
        <div className="w-full h-full bg-gradient-to-br from-[#D4C4BC] to-mauve" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <p className="text-[0.75rem] tracking-[0.4em] uppercase text-[#6B6361] mb-8">
          Private Nail Studio · Las Vegas
        </p>
        <h1 className="font-serif font-light text-[#2C2826] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-4">
          Private Beauty Studio in Las Vegas
        </h1>
        <p className="font-serif text-xl sm:text-2xl italic text-[#6B6361] mb-12">
          Clean standards, clear policies, and an appointment-only experience for better clients.
        </p>
        <a 
          href="https://go.booker.com/location/PinkSaltSalonandSpa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Book Online
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
