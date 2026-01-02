import { PhoneIcon, MessageIcon, MailIcon, InstagramIcon, TikTokIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-8 lg:px-16 bg-charcoal text-cream">
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-label text-rose">Contact</p>
        <h2 className="font-serif text-4xl sm:text-5xl font-light mb-4">
          Let&apos;s <em className="italic text-rose">connect</em>
        </h2>
        <p className="text-mauve mb-12">
          Questions? Want to discuss a custom design? Reach out anytime.
        </p>

        {/* Contact Methods */}
        <div className="flex justify-center gap-6 flex-wrap mb-16">
          <a
            href="tel:7022092758"
            className="flex items-center gap-3 px-6 py-4 border border-warm-gray text-cream text-sm tracking-wide transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            <PhoneIcon className="w-5 h-5 stroke-gold" />
            Call (702) 209-2758
          </a>
          <a
            href="sms:7026132115"
            className="flex items-center gap-3 px-6 py-4 border border-warm-gray text-cream text-sm tracking-wide transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            <MessageIcon className="w-5 h-5 stroke-gold" />
            Text (702) 613-2115
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
          <h4 className="text-[0.7rem] tracking-[0.2em] uppercase text-mauve mb-4 font-normal">
            Studio Location
          </h4>
          <p className="text-cream text-lg leading-loose">
            6035 S. Durango Dr
            <br />
            Las Vegas, NV 89113
          </p>
          <p className="text-mauve text-sm mt-2">By appointment only</p>
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
