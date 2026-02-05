import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="w-full bg-[#e9e4dc] min-h-[120vh] flex items-center">
      <div className="grid grid-cols-2 w-full min-h-[120vh]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-[100px] py-[120px]">

          <h2 className="text-[60px] leading-[1.1] font-medium text-[#2f3e1f]">
            Hi, I’m Lilac.
          </h2>

          <p className="mt-8 max-w-[520px] text-[18px] leading-[1.7] text-[#2f3e1f]">
            I'm committed to providing a safe and supportive environment where
            we can explore your thoughts, feelings, and behaviors. With empathy
            and guidance, we'll work together to navigate the challenges life
            throws your way.
          </p>

          {/* CENTERED SMALL BUTTON */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="
                inline-block
                border border-[#2f3e1f]
                px-6 py-2
                text-[12px]
                uppercase tracking-wide
                text-[#2f3e1f]
                transition-colors duration-300
                hover:bg-[#2f3e1f] hover:text-[#e9e4dc]
              "
            >
              Let’s chat →
            </Link>
          </div>
        </div>

       {/* RIGHT IMAGES */}
<div className="relative flex items-center justify-center pr-[80px]">

  {/* MAIN ARCHED IMAGE */}
  <div className="relative w-[450px] h-[650px] overflow-hidden rounded-t-[240px] bg-[#e9e4dc]">
    <Image
      src="/intro-main.jpg"
      alt="Lilac portrait"
      fill
      className="object-cover"
      sizes="400px"
    />
  </div>

  {/* SMALL OVERLAPPING CIRCLE */}
  <div className="
      absolute
         bottom-[50px]
         right-[90px]
      w-[300px]
      h-[300px]
      rounded-full
      overflow-hidden
    ">
    <Image
      src="/intro-small.jpg"
      alt="White flowers"
      fill
      className="object-cover"
      sizes="220px"
    />
  </div>

</div>

      </div>
    </section>
  );
}
