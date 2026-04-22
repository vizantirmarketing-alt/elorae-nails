import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import HomeFAQClient from "@/components/HomeFAQClient";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you accept walk-ins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — we're appointment only. That keeps things calm and gives each client enough time.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book through the link on this site, and yes, we do take new clients.",
      },
    },
    {
      "@type": "Question",
      name: "What is your cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We ask for 24 hours' notice for cancellations. Late cancellations and no-shows may lose the deposit.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require a deposit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we take a deposit to hold your appointment, and it goes toward your total.",
      },
    },
    {
      "@type": "Question",
      name: "What services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer manicures, pedicures, nail enhancements, and hemp spa treatments by appointment.",
      },
    },
    {
      "@type": "Question",
      name: "Where are you located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located at 6035 S. Durango Dr, Las Vegas, NV 89113.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <HomeFAQClient />
      <Booking />
      <Contact />
    </main>
  );
}
