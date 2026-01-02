import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-8 px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link
          href="/"
          className="no-underline"
        >
          <img 
            src="/logos/elorae-logo-white.svg" 
            alt="Elorae" 
            className="h-8 w-auto"
          />
        </Link>

        <div className="flex gap-8">
          <Link
            href="/terms"
            className="text-[0.7rem] tracking-wide uppercase text-warm-gray no-underline transition-colors duration-300 hover:text-cream"
          >
            Terms
          </Link>
          <Link
            href="/faq"
            className="text-[0.7rem] tracking-wide uppercase text-warm-gray no-underline transition-colors duration-300 hover:text-cream"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="text-[0.7rem] tracking-wide uppercase text-warm-gray no-underline transition-colors duration-300 hover:text-cream"
          >
            Blog
          </Link>
        </div>

        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Elorae Nails | Developed by <a href="https://vizantir.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vizantir</a>
        </p>
      </div>
    </footer>
  );
}
