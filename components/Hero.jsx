import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="bg-[#fbf8f2]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-6 sm:pt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0">
        
        {/* Image */}
        <ScrollReveal>
          <div className="relative w-full max-w-[600px] h-[400px] sm:h-[600px] md:h-[840px] mx-auto md:mx-0 md:-ml-6">
            <div className="relative w-full h-full overflow-hidden rounded-t-[100px] sm:rounded-t-[200px] md:rounded-t-[300px]">
              <Image
                src="/lilac.jpg"
                alt="Lilac flowers"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Text */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-[68px] leading-[1.15] font-extrabold text-[#2f3e1f]">
            Live your life <br /> in full bloom
          </h1>

          <p className="mt-4 sm:mt-8 text-sm sm:text-[15px] text-[#2f3e1f]">
            Therapy for Adults in Minneapolis, MN.
          </p>

          <button className="mt-8 sm:mt-14 border border-[#2f3e1f] px-6 sm:px-10 py-2 sm:py-3 text-xs sm:text-[13px] tracking-wide uppercase text-[#2f3e1f] hover:bg-[#2f3e1f] hover:text-[#fbf8f2] transition">
            Connect with me →
          </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
