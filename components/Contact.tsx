import { PhoneIcon, MessageIcon, MailIcon, InstagramIcon, TikTokIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="pt-28 pb-8 px-8 lg:px-16 bg-charcoal text-cream">
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-label text-rose">Contact</p>
        <h2 className="font-serif text-4xl sm:text-5xl font-light mb-4">
          Contact
        </h2>
        <p className="text-mauve mb-12">
          Text is the fastest way to reach us. If you need to change a booking, include your name and appointment time.
        </p>

        {/* Contact Methods */}
        <div className="flex justify-center gap-6 flex-wrap mb-16">
          <a
            href="tel:+17022092758"
            className="flex items-center gap-3 px-6 py-4 border border-warm-gray text-cream text-sm tracking-wide transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            <PhoneIcon className="w-5 h-5 stroke-gold" />
            Call
          </a>
          <a
            href="sms:+17026132115"
            className="flex items-center gap-3 px-6 py-4 border border-warm-gray text-cream text-sm tracking-wide transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            <MessageIcon className="w-5 h-5 stroke-gold" />
            Text Us
          </a>
          <a
            href="mailto:eloraenails@gmail.com"
            className="flex items-center gap-3 px-6 py-4 border border-warm-gray text-cream text-sm tracking-wide transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            <MailIcon className="w-5 h-5 stroke-gold" />
            eloraenails@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="pt-12 border-t border-white/10">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-mauve mb-4 font-normal">
            Studio Location
          </p>
          <p className="text-cream text-lg leading-loose">
            6035 S. Durango Dr
            <br />
            Las Vegas, NV 89113
          </p>
          <a 
            href="tel:+17026132115" 
            className="text-cream/70 text-sm hover:text-cream transition-colors duration-200"
          >
            (702) 613-2115
          </a>
          <p className="text-mauve text-sm mt-2">By appointment only</p>
        </div>

        {/* Map */}
        <div className="w-full max-w-2xl mx-auto mt-8 mb-8">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=6035+S+Durango+Dr+Las+Vegas+NV+89113"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Eloraé Nails on Google Maps"
            className="block overflow-hidden"
          >
            <iframe
              title="Eloraé Nails location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.578116420238!2d-115.28291892384622!3d36.079393007998725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c77f7a3a997d%3A0x6762a0aa48cfbb66!2s6035%20S%20Durango%20Dr%2C%20Las%20Vegas%2C%20NV%2089113!5e0!3m2!1sen!2sus!4v1767330583324!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </a>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-4 mt-12">
          <a
            href="https://instagram.com/eloraenails"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-12 h-12 flex items-center justify-center border border-warm-gray text-cream transition-all duration-300 hover:border-gold hover:bg-gold hover:text-charcoal"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="https://tiktok.com/@eloraenails"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-12 h-12 flex items-center justify-center border border-warm-gray text-cream transition-all duration-300 hover:border-gold hover:bg-gold hover:text-charcoal"
          >
            <TikTokIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
