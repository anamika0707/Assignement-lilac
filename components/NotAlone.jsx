import Image from "next/image";

export default function NotAlone() {
  return (
    <section className="bg-[#d6d3dc]">
      <div className="grid md:grid-cols-2 min-h-162.5">

        <div className="relative min-h-100 md:min-h-full">
          <Image src="/not-alone.jpg" alt="" fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-between px-6 md:px-16 py-20">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              You don’t have to do this all alone.
            </h2>

            <ul className="space-y-4 text-sm list-disc list-inside">
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul>

            <p className="mt-8 text-sm">
              With empathy and guidance, we’ll work together to navigate life’s challenges.
            </p>
          </div>

          <div className="mt-12 border-t border-[#2f3e1f] pt-6">
            <button className="text-xs tracking-wide hover:underline">
              WORK WITH ME →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
