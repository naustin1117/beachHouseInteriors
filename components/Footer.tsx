import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-900 text-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4">
              Beach House Interiors
            </p>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Residential interior design in New York. Thoughtful spaces 
              designed around how you live.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">
              Pages
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} Beach House Interiors LLC
          </p>
          <a
            href="tel:+12016571664"
            className="text-white/30 hover:text-white/60 transition-colors text-xs"
          >
            (201) 657-1664
          </a>
        </div>
      </div>
    </footer>
  );
}
