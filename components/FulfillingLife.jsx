import Image from "next/image";

export default function FulfillingLife() {
  return (
    <section className="bg-[#faf7f2]">
      <div className="grid md:grid-cols-2 min-h-150">

        <div className="flex flex-col justify-between px-6 md:px-16 py-20">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Live a fulfilling life.
            </h2>

            <p className="mb-6 text-sm">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>

            <p className="text-sm">
              It's easy to feel like you're alone in facing these challenges,
              but I want you to know that I'm here to help.
            </p>
          </div>

          <div className="mt-12 border-t border-[#2f3e1f] pt-6">
            <button className="text-xs tracking-wide hover:underline">
              GET IN TOUCH →
            </button>
          </div>
        </div>

        <div className="relative min-h-100 md:min-h-full">
          <Image src="/fulfilling.jpg" alt="" fill className="object-cover" />
        </div>

      </div>
    </section>
  );
}
