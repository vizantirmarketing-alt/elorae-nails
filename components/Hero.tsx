export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-cream">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          className="hero-video absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/media/hero.webm" type="video/webm" />
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/75 to-cream/10 lg:from-cream lg:via-cream/45 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/70 via-transparent to-cream/50 lg:from-cream/40 lg:via-transparent lg:to-cream/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-8 pb-32 pt-40 sm:pb-36 lg:px-16 lg:pb-40 xl:px-24">
        <div className="max-w-[44rem] text-left">
          <p className="text-[0.65rem] tracking-[0.45em] uppercase text-[#4A4340] mb-6">
            Appointment Only · Las Vegas
          </p>
          <h1 className="font-serif font-light text-[#1C1917] text-6xl sm:text-7xl lg:text-8xl xl:text-[7.5rem] leading-[0.96] tracking-[-0.025em] mb-8">
            A Private
            <br />
            Nail Studio
          </h1>
          <p className="font-serif text-base sm:text-lg italic text-[#4A4340] leading-relaxed mb-10 max-w-[38ch]">
            Clean work, clear policies, and an appointment-only studio for clients who want a calm, private experience.
          </p>
          <a
            href="https://app.squareup.com/appointments/book/76x67b4ir98faf/S8DT74QG3VD0F/start"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[#2C2826] px-12 py-[1.05rem] text-[0.65rem] tracking-[0.26em] uppercase text-[#2C2826] transition-colors duration-300 hover:bg-[#2C2826] hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C2826] focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
          >
            Book Online
          </a>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-[#B89B6A] to-transparent" />
    </section>
  );
}
