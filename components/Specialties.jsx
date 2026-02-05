import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const specialties = [
  {
    title: "Self-Esteem",
    desc: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    img: "/specialty-1.jpg",
  },
  {
    title: "Relationships",
    desc: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    img: "/specialty-2.jpg",
  },
  {
    title: "Burnout",
    desc: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    img: "/specialty-3.jpg",
  },
];

export default function Specialties() {
  return (
    <section className="bg-[#faf7f2] px-6 md:px-16 py-24">
      {/* Section Heading */}
      <ScrollReveal>
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          My Specialties
        </h2>
      </ScrollReveal>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {specialties.map((item, index) => (
          <ScrollReveal key={index}>
            <div
              className="border border-[#2f3e1f] bg-[#e9e5df] p-8 flex flex-col justify-between"
            >
            <div>
              <h3 className="text-lg font-medium mb-4">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Image */}
            <div className="mt-10 flex justify-center">
              <div className="relative w-55 h-55 rounded-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
