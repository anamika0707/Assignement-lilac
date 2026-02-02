export default function Footer() {
  return (
    <footer className="bg-[#faf7f2]">

      <div className="px-6 md:px-16 py-20 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl mb-6">Lilac Template</h3>
          <p>123 Example Road<br />Minneapolis, MN</p>
          <p className="underline mt-4">email@example.com</p>
          <p className="underline">(555) 555-5555</p>
        </div>

        <div>
          <h4 className="mb-6">Hours</h4>
          <p>Monday – Friday<br />10am – 6pm</p>
        </div>

        <div>
          <h4 className="mb-6">Find</h4>
          <ul className="underline space-y-2">
            <li>Home</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#e9e5df] py-12 text-center text-sm space-y-4">
        <p className="underline">Privacy & Cookies Policy · Good Faith Estimate · Website Terms & Conditions · Disclaimer</p>
        <p className="underline">Website Template Credits: Go Bloom Creative</p>
        <p>All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
      </div>

    </footer>
  );
}
