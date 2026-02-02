export default function Background() {
  const items = ["Education", "Licensure", "Certifications"];

  return (
    <section className="bg-[#e9e5df] px-6 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        My Professional Background
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between border-t border-[#2f3e1f] pt-6">
            <span>{item}</span>
            <span>+</span>
          </div>
        ))}
        <div className="border-t border-[#2f3e1f]" />
      </div>
    </section>
  );
}
