'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Do you accept walk-ins?',
    answer:
      'No — Eloraé Nails is appointment-only. This keeps the experience focused and ensures every client gets dedicated time and attention.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'You can book directly through the booking link on this site. New clients are welcome.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We require 24 hours notice for cancellations. Late cancellations and no-shows may forfeit the deposit.',
  },
  {
    question: 'Do you require a deposit?',
    answer:
      'Yes, a deposit is required to secure your appointment. This is applied toward your service total.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We offer manicures, pedicures, nail enhancements, and Hemp spa treatments — all in a private, appointment-only setting.',
  },
  {
    question: 'Where are you located?',
    answer: 'We are located at 6035 S. Durango Dr, Las Vegas, NV 89113.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 px-8 lg:px-16 bg-cream">
      <div className="max-w-3xl mx-auto">
        <p className="text-[0.7rem] tracking-[0.3em] uppercase text-mauve mb-4">FAQ</p>
        <h2 className="font-serif font-light text-4xl md:text-5xl text-charcoal mb-12">
          Questions & Answers
        </h2>
        <div className="divide-y divide-charcoal/10">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="w-full text-left flex justify-between items-start gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-serif text-lg text-charcoal">{faq.question}</span>
                <span className="text-mauve mt-1 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-warm-gray text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
