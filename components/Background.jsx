
import ScrollReveal from "./ScrollReveal";

export default function Background() {
  const items = ["Education", "Licensure", "Certifications"];

  return (
    <section className="w-full bg-[#efe9df] py-[70px] flex justify-center">
      <div className="w-full max-w-[760px] text-center py-[50px]">

        {/* Heading */}
        <ScrollReveal>
          <h2 className="text-[50px] leading-[1.15] tracking-[-0.01em] font-medium text-[#2F3E1F] mb-10">
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
                  <span className="text-[26px] leading-[1.4] tracking-[-0.005em] text-[#2F3E1F]">
                    {item}
                  </span>

                  {/* Plus */}
                  <span className="text-[26px] text-[#2F3E1F]">
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
