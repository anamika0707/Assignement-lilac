import ScrollReveal from "./ScrollReveal";

export default function GetStarted() {
  return (
    <section className="w-full bg-[#7C7A4A] py-12 sm:py-24 md:py-[120px] flex justify-center items-center">
      <ScrollReveal>
        <div className="max-w-[760px] text-center px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[52px] leading-[1.15] tracking-[-0.01em] font-medium text-[#ffffff] mb-4 sm:mb-6">
          Get started today.
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-[20px] leading-[1.7] text-[white]/90 mb-8 sm:mb-16 md:mb-20">
          Ready to take the first step towards a happier, healthier you?
          <br/>Contact me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>

        {/* Button */}
        <a
          href="/contact"
          className="inline-flex items-center gap-2 border border-[#F4F1EA] text-[#F4F1EA]
                     px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-[14px] tracking-[0.08em] uppercase whitespace-nowrap
                     hover:bg-[#F4F1EA] hover:text-[#7C7A4A] transition-colors duration-300"
        >
          Get in touch →
        </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
