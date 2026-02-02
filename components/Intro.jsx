import Image from "next/image";

export default function Intro() {
  return (
    <section className="px-6 md:px-16 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">
            Hi, I’m Lilac.
          </h2>

          <p className="text-sm mb-10">
            I'm committed to providing a safe and supportive environment where
            we can explore your thoughts, feelings, and behaviors.
          </p>

          <button className="px-6 py-3 border border-[#2f3e1f] text-xs transition hover:bg-[#2f3e1f] hover:text-[#faf7f2]">
            LET'S CHAT →
          </button>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-105 h-105 rounded-full overflow-hidden">
            <Image src="/intro-main.jpg" alt="" fill className="object-cover" />
          </div>

          <div className="absolute -bottom-10 -right-5 -w-40 -h-40 rounded-full overflow-hidden">
            <Image src="/intro-small.jpg" alt="" fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}
