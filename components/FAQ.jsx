import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Faq() {
  const faqs = [
    "Do you take insurance?",
    "What are your rates?",
    "Do you have any openings?",
  ];

  return (
    <section className="w-full bg-[#faf5f0] min-h-screen flex items-center">
      <div className="grid grid-cols-2 w-full">

        {/* LEFT IMAGE */}
        <ScrollReveal>
          <div className="flex items-center justify-center py-[120px]">
            <div className="relative w-[420px] aspect-[3/4] overflow-hidden rounded-t-[240px]">
              <Image
                src="/faq.jpg"
                alt="Decorative plant"
                fill
                className="object-cover"
                sizes="420px"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT FAQ CONTENT */}
          <div className="flex flex-col justify-center pr-[clamp(40px,6vw,120px)]">

          {/* Heading */}
          <h2 className="text-[56px] font-medium text-[#2f3e1f] mb-10">
            FAQs
          </h2>

          {/* Top Divider */}
          <div className="border-t border-[#2f3e1f]/40" />

          {/* FAQ LIST */}
          <div className="mt-6 space-y-6 font-bold">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#2f3e1f]/40 pb-6">

                <div className="flex items-center gap-6">
                  {/* Plus icon */}
                  <span className="text-[28px] text-[#2f3e1f] leading-none">
                    +
                  </span>

                  {/* Question */}
                  <p className="text-[32px] leading-[1.3] text-[#2f3e1f]">
                    {faq}
                  </p>
                </div>

              </div>
            ))}
          </div>

          </div>
      </div>
    </section>
  );
}
