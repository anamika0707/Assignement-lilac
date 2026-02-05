import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function FAQ() {
  const faqs = [
    "Do you take insurance?",
    "What are your rates?",
    "Do you have any openings?",
  ];

  return (
    <section className="px-6 md:px-16 py-24">
      <div className="grid md:grid-cols-2 gap-16">

        <ScrollReveal>
          <div className="relative w-105 h-150 rounded-[200px] overflow-hidden">
            <Image src="/faq.jpg" alt="" fill className="object-cover" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">FAQs</h2>

          {faqs.map((q, i) => (
            <div key={i} className="flex gap-6 border-t border-[#2f3e1f] py-6">
              <span className="text-xl">+</span>
              <p>{q}</p>
            </div>
          ))}

          <div className="border-t border-[#2f3e1f]" />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
