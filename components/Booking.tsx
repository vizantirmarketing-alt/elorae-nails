export default function Booking() {
  return (
    <section id="booking" className="py-28 px-8 lg:px-16 bg-gradient-to-br from-cream to-blush text-center">
      <div className="max-w-2xl mx-auto">
        <p className="section-label">Book</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
          Ready for your <em className="italic text-rose">appointment?</em>
        </h2>
        <p className="text-warm-gray mb-10 text-lg">
          Text us for the fastest response, or book directly online.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-16">
          <a 
            href="https://go.booker.com/location/PinkSaltSalonandSpa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book Online
          </a>
          <a
            href="sms:+17026132115"
            className="btn"
          >
            Text Us
          </a>
        </div>

        {/* Info */}
        <div className="flex justify-center gap-12 lg:gap-16 pt-12 border-t border-mauve flex-wrap">
          <div className="text-center">
            <p className="text-[0.7rem] tracking-[0.15em] uppercase text-warm-gray mb-2 font-normal">
              Deposit
            </p>
            <p className="font-serif text-xl text-charcoal">$25 to book</p>
          </div>
          <div className="text-center">
            <p className="text-[0.7rem] tracking-[0.15em] uppercase text-warm-gray mb-2 font-normal">
              Cancellation
            </p>
            <p className="font-serif text-xl text-charcoal">24 hrs notice</p>
          </div>
          <div className="text-center">
            <h4 className="text-[0.7rem] tracking-[0.15em] uppercase text-warm-gray mb-2 font-normal">
              New Clients
            </h4>
            <p className="font-serif text-xl text-charcoal">Always welcome</p>
          </div>
        </div>
      </div>
    </section>
  );
}
