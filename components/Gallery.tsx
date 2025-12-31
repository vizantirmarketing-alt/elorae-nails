export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-charcoal">
      {/* Header */}
      <div className="text-center px-8 lg:px-16 mb-16">
        <p className="text-[0.7rem] tracking-[0.3em] uppercase text-rose mb-4">My Work</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-cream">
          Recent Creations
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]">
        <div className="aspect-square overflow-hidden cursor-pointer group">
          <div className="w-full h-full bg-gradient-to-br from-blush to-[#D4C4BC] transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="aspect-square overflow-hidden cursor-pointer group">
          <div className="w-full h-full bg-gradient-to-br from-mauve to-rose transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="aspect-square overflow-hidden cursor-pointer group">
          <div className="w-full h-full bg-gradient-to-br from-[#D4C4BC] to-mauve transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="aspect-square overflow-hidden cursor-pointer group">
          <div className="w-full h-full bg-gradient-to-br from-rose to-[#A68B84] transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="aspect-square overflow-hidden cursor-pointer group">
          <div className="w-full h-full bg-gradient-to-br from-blush to-mauve transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="aspect-square overflow-hidden cursor-pointer group">
          <div className="w-full h-full bg-gradient-to-br from-gold to-rose transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="aspect-square overflow-hidden cursor-pointer group">
          <div className="w-full h-full bg-gradient-to-br from-[#D4C4BC] to-blush transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="aspect-square overflow-hidden cursor-pointer group">
          <div className="w-full h-full bg-gradient-to-br from-rose to-mauve transition-transform duration-500 group-hover:scale-110" />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-16 px-8">
        <p className="text-mauve mb-6 text-sm">See more of my work on Instagram</p>
        <a
          href="https://instagram.com/eloraenails"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-[0.7rem] tracking-[0.2em] uppercase border border-cream text-cream transition-all duration-300 hover:bg-cream hover:text-charcoal"
        >
          @eloraenails
        </a>
      </div>
    </section>
  );
}
