import Image from "next/image";
import Link from "next/link";

export default function FulfillingLife() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 min-h-[720px]">

        {/* LEFT SIDE */}
        <div className="bg-[#e9e4dc] flex flex-col justify-between px-[90px] pt-[120px]">

          {/* TOP TEXT */}
          <div className="max-w-[520px]">
            <h2 className="text-[56px] leading-[1.15] font-medium text-[#2f3e1f]">
              Live a fulfilling life.
            </h2>

            <p className="mt-8 text-[18px] leading-[1.7] text-[#2f3e1f]">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>

            <p className="mt-6 text-[18px] leading-[1.7] text-[#2f3e1f]">
              It's easy to feel like you're alone in facing these challenges,
              but I want you to know that I'm here to help.
            </p>
          </div>

          <div className="-mx-[90px] border-t border-[#2f3e1f]/40 px-[90px] py-6 text-center  transition-colors duration-300
                  hover:bg-[#2f6a2f]
                  hover:text-[#fbfbfa]
                  hover:border-[#2f6a2f]   text-[#1f2a12]
                  hover:text-white
                  transition-colors">
              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3
                  text-[14px]
                  tracking-wide
                  uppercase
                 
                "
              >
                Get in touch →
              </Link>
            
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full min-h-[720px]">
          <Image
            src="/fulfilling.jpg"
            alt="Lifestyle"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>

      </div>
    </section>
  );
}
