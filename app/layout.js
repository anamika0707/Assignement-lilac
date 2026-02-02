import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#faf7f2] text-[#2f3e1f]">
        {children}
      </body>
    </html>
  );
}
