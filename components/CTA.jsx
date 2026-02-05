import ScrollReveal from "./ScrollReveal";

export default function GetStarted() {
  return (
    <section className="w-full bg-[#7C7A4A] py-[120px] flex justify-center items-center">
      <ScrollReveal>
        <div className="max-w-[760px] text-center px-6">

        {/* Heading */}
        <h2 className="text-[52px] leading-[1.15] tracking-[-0.01em] font-medium text-[#ffffff] mb-6">
          Get started today.
        </h2>

        {/* Description */}
        <p className="text-[20px] leading-[1.7] text-[white]/90 mb-20">
          Ready to take the first step towards a happier, healthier you?
          <br/>Contact me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>

        {/* Button */}
        <a
          href="/contact"
          className="inline-flex items-center gap-2 border border-[#F4F1EA] text-[#F4F1EA]
                     px-4 py-3 text-[14px] tracking-[0.08em] uppercase
                     hover:bg-[#F4F1EA] hover:text-[#7C7A4A] transition-colors duration-300"
        >
          Get in touch →
        </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
