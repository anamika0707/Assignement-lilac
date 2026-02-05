
import ScrollReveal from "./ScrollReveal";

export default function Background() {
  const items = ["Education", "Licensure", "Certifications"];

  return (
    <section className="w-full bg-[#e1ddd6] py-12 sm:py-24 md:py-[120px] flex justify-center">
      <div className="w-full max-w-[760px] text-center px-4 sm:px-6">

        {/* Heading */}
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-[50px] leading-[1.15] tracking-[-0.01em] font-medium text-[#2F3E1F] mb-6 sm:mb-10">
            My Professional Background
          </h2>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal>
          <div className="w-full text-left">
            {items.map((item, index) => (
              <div
                key={index}
                className="border-t border-[#2F3E1F]/40 last:border-b"
              >
                <button className="w-full flex items-center justify-between py-4">
                  
                  {/* Text */}
                  <span className="text-lg sm:text-xl md:text-[26px] leading-[1.4] tracking-[-0.005em] text-[#2F3E1F]">
                    {item}
                  </span>

                  {/* Plus */}
                  <span className="text-lg sm:text-xl md:text-[26px] text-[#2F3E1F]">
                    +
                  </span>
                </button>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
