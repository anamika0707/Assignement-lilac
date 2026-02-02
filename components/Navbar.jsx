export default function Navbar() {
  return (
    <>
      {/* Top brown strip */}
      <div className="h-[6px] bg-[#6b4b2a]" />

      <nav className="mx-auto max-w-[1400px] px-6 py-4 flex items-center justify-between">
        <h1 className="text-[22px] font-extrabold text-[#2f3e1f]">
          Lilac Template
        </h1>

        <div className="flex gap-14 text-[15px] text-[#2f3e1f]">
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </>
  );
}
