export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-6">
      <h1 className="text-xl font-medium">Lilac Template</h1>

      <div className="flex gap-8 text-sm">
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
