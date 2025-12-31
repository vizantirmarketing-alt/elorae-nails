import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online through my booking link, or DM me on Instagram @eloraenails. For the fastest response, Instagram is usually best!",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Please give at least 24 hours notice if you need to cancel or reschedule. Cancellations with less notice will forfeit the $25 deposit.",
  },
  {
    question: "How long do gel nails last?",
    answer:
      "With proper care, gel manicures typically last 2-3 weeks. Gel extensions usually last 3-4 weeks before needing a fill.",
  },
  {
    question: "Do I need to remove my old nails before my appointment?",
    answer:
      "Nope! I'll take care of removal during your appointment. If you're getting a new full set, removal is included in the price.",
  },
  {
    question: "Can I bring inspiration photos?",
    answer:
      "Absolutely! I love seeing inspo pics. Send them ahead of time on Instagram or bring them to your appointment. It helps me understand exactly what you're looking for.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "I accept cash, all major credit/debit cards, Venmo, and Zelle. Payment is due at the end of your service.",
  },
  {
    question: "What if a nail breaks or lifts?",
    answer:
      "If you experience lifting or breakage within 7 days of your appointment, reach out and I'll fix it at a reduced rate. After 7 days, normal repair pricing applies.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes! There's free parking right in front of Sola Salon Studios. Easy in and out.",
  },
  {
    question: "Can I bring a friend?",
    answer:
      "My studio is pretty cozy, so it's really best suited for one client at a time. But if you'd like to book back-to-back appointments with a friend, I'm happy to arrange that!",
  },
  {
    question: "Do you do pedicures?",
    answer:
      "Currently I specialize in manicures and nail art only. I may add pedicures in the future!",
  },
];

export default function FAQ() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-8 lg:px-16 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Help</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-light mb-12">
            Frequently Asked Questions
          </h1>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-blush pb-8">
                <h2 className="font-serif text-xl text-charcoal mb-3">
                  {faq.question}
                </h2>
                <p className="text-warm-gray">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-blush/50 text-center">
            <p className="text-charcoal mb-4">Still have questions?</p>
            <a
              href="https://instagram.com/eloraenails"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              DM me on Instagram
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
