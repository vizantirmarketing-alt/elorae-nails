import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-8 lg:px-16 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Legal</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-light mb-12">
            Terms & Conditions
          </h1>

          <div className="space-y-8 text-warm-gray">
            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Appointments</h2>
              <p className="mb-4">
                All appointments require a $25 non-refundable deposit to secure your booking. 
                This deposit will be applied to your service total.
              </p>
              <p>
                Please arrive on time for your appointment. Late arrivals may result in 
                shortened service time or rescheduling.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Cancellation Policy</h2>
              <p className="mb-4">
                Cancellations must be made at least 24 hours in advance to avoid forfeiting 
                your deposit. No-shows will result in loss of deposit and may require a 
                higher deposit for future bookings.
              </p>
              <p>
                To reschedule, please contact me via text or Instagram DM as soon as possible.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Health & Safety</h2>
              <p className="mb-4">
                Please inform me of any allergies, sensitivities, or medical conditions 
                that may affect your service. If you have any signs of infection on your 
                hands or nails, please reschedule your appointment.
              </p>
              <p>
                All tools are sanitized and sterilized between each client. Single-use 
                items are disposed of after each service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Payment</h2>
              <p>
                Cash, credit/debit cards, Venmo, and Zelle are accepted. Payment is due 
                at the time of service. Tips are appreciated but never expected.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Nail Care</h2>
              <p>
                Proper aftercare is essential for long-lasting nails. I am not responsible 
                for damage caused by improper care, self-removal, or external factors. 
                Repairs within 7 days of service may be offered at a reduced rate.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
