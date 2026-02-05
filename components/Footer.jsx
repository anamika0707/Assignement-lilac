export default function Footer() {
  return (
    <footer className="w-full text-[#2F3E1F]">

      {/* Top area */}
      <div className="bg-[#fef9f0]">
        <div className="w-full px-10 md:px-20 pt-[80px] pb-[110px] flex flex-col md:flex-row md:items-start gap-16">

          {/* Left */}
          <div>
            <h2 className="text-[40px] font-bold tracking-[-0.01em] mb-6">
              Lilac Template
            </h2>

            <p className="text-[17px] leading-[1.7] mb-6">
              123 Example Road <br />
              Minneapolis, MN
            </p>

            <div className="space-y-2 text-[17px]">
              <a href="mailto:email@example.com" className="underline">
                email@example.com
              </a>
              <br />
              <a href="tel:5555555555" className="underline">
                (555) 555-5555
              </a>
            </div>
          </div>

          <div className="md:ml-auto flex flex-col md:flex-row gap-16 md:gap-50">
            {/* Hours */}
            <div>
              <h3 className="text-[40px] font-bold tracking-[-0.01em] mb-6">
                Hours
              </h3>

              <p className="text-[17px] leading-[1.7]">
                Monday – Friday <br />
                10am – 6pm
              </p>
            </div>

            {/* Find */}
            <div>
              <h3 className="text-[40px] font-bold tracking-[-0.01em] mb-6">
                Find
              </h3>

              <ul className="space-y-2 text-[17px]">
                <li><a href="/" className="underline">Home</a></li>
                <li><a href="/contact" className="underline">Contact</a></li>
                <li><a href="/blog" className="underline">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom legal strip */}
      <div className="bg-[#e0dcd9] text-[black] border-t border-[#2F3E1F]/15 text-center px-6 py-[70px]">
        <div className="flex flex-wrap justify-center gap-5 text-[15px] underline mb-4">
          <a href="#">Privacy & Cookies Policy</a>
          <a href="#">Good Faith Estimate</a>
          <a href="#">Website Terms & Conditions</a>
          <a href="#">Disclaimer</a>
        </div>

        <p className="text-[13px] mb-3">
          Website Template Credits:{" "}
          <a href="#" className="underline">Go Bloom Creative</a>
        </p>

        <p className="text-[13px]">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
      </div>
    </footer>
  );
}
