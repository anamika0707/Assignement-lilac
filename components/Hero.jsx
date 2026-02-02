import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 md:px-16 pb-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center md:justify-start">
          <div className="relative w-70 md:w-105 h-105 md:h-105 rounded-[200px] overflow-hidden">
            <Image src="/hero.jpg" alt="Hero" fill className="object-cover" />
          </div>
        </div>

        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Live your life<br />in full bloom
          </h2>

          <p className="mt-6 text-sm">
            Therapy for Adults in Minneapolis, MN.
          </p>

          <button className="mt-10 px-6 py-3 border border-[#2f3e1f] text-xs tracking-wide transition hover:bg-[#2f3e1f] hover:text-[#faf7f2]">
            CONNECT WITH ME →
          </button>
        </div>

      </div>
    </section>
  );
}
