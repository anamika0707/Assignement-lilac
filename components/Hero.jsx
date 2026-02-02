import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#fbf8f2]">
      <div className="mx-auto max-w-[1400px] px-6 pt-12 grid grid-cols-2 items-center">
        
        {/* Image */}
        <div className="relative w-[600px] h-[840px] -ml-6">
          <div className="relative w-full h-full overflow-hidden rounded-t-[300px]">
            <Image
              src="/lilac.jpg"
              alt="Lilac flowers"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[68px] leading-[1.15] font-extrabold text-[#2f3e1f]">
            Live your life <br /> in full bloom
          </h1>

          <p className="mt-8 text-[15px] text-[#2f3e1f]">
            Therapy for Adults in Minneapolis, MN.
          </p>

          <button className="mt-14 border border-[#2f3e1f] px-10 py-3 text-[13px] tracking-wide uppercase text-[#2f3e1f] hover:bg-[#2f3e1f] hover:text-[#fbf8f2] transition">
            Connect with me →
          </button>
        </div>

      </div>
    </section>
  );
}
