import Image from "next/image";
import Link from "next/link";


export default function NoAlone() {
  return (
    <section className="w-full min-h-[110vh]">
      <div className="grid grid-cols-2 min-h-[110vh]">

        {/* LEFT IMAGE */}
        
        <div className="relative w-full h-full">
          <Image
            src="/not-alone.jpg"
            alt="Woman sitting thoughtfully"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>
        
       

        {/* RIGHT CONTENT PANEL */}
    
        <div className="bg-[#d9d6de] flex flex-col justify-between px-[90px] pt-[110px]">

          {/* TEXT CONTENT */}
          <div className="max-w-[560px]">
            <h2 className="text-[60px] leading-[1] font-medium text-[#2f3e1f]">
              You don’t have to do this
              <br /> all alone.
            </h2>

            <p className="mt-8 text-[18px] leading-[1.7] text-[#2f3e1f]">
              If you are facing any of these, there’s hope:
            </p>

            {/* BULLET LIST */}
            <ul className="mt-6 space-y-4 text-[18px] leading-[1.7] text-[#2f3e1f] list-disc pl-6">
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul>

            <p className="mt-8 text-[18px] leading-[1.7] text-[#2f3e1f]">
              With empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>
          </div>

          {/* BOTTOM CTA STRIP */}
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
                work with me
              </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
}
