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
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-0">

        {/* LEFT IMAGE */}
        <ScrollReveal>
          <div className="flex items-center justify-center py-8 sm:py-[120px]">
            <div className="relative w-full max-w-[300px] sm:max-w-[420px] aspect-[3/4] overflow-hidden rounded-t-[100px] sm:rounded-t-[240px]">
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
          <div className="flex flex-col justify-center px-4 sm:px-6 md:pr-[clamp(40px,6vw,120px)] py-8 md:py-0">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[56px] font-medium text-[#2f3e1f] mb-6 sm:mb-10">
            FAQs
          </h2>

          {/* Top Divider */}
          <div className="border-t border-[#2f3e1f]/40" />

          {/* FAQ LIST */}
          <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6 font-bold">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#2f3e1f]/40 pb-4 sm:pb-6">

                <div className="flex items-center gap-3 sm:gap-6">
                  {/* Plus icon */}
                  <span className="text-xl sm:text-[28px] text-[#2f3e1f] leading-none flex-shrink-0">
                    +
                  </span>

                  {/* Question */}
                  <p className="text-lg sm:text-2xl md:text-[32px] leading-[1.3] text-[#2f3e1f]">
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
