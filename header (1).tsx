dirimport { useState } from "react";

const TEAM_NAME = "MLBB";

const NAV_LINKS = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Projects", href: "#projects" },
  { label: "Settings", href: "#settings" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="relative mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 py-3 sm:px-6">
        {/* Left spacer (keeps brand centered on desktop) */}
        <div className="hidden sm:block" />

        {/* Team name / brand, centered */}
        <div className="col-start-2 flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-sm font-bold text-white">
            {TEAM_NAME.charAt(0)}
          </div>
          <span className="text-base font-semibold tracking-tight text-slate-900">
            {TEAM_NAME}
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="col-start-3 hidden items-center justify-end gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="absolute right-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 bg-slate-900" />
            <span className="h-0.5 w-5 bg-slate-900" />
            <span className="h-0.5 w-5 bg-slate-900" />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="flex flex-col border-t border-slate-200 px-4 py-2 sm:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-sm font-medium text-slate-600 hover:text-slate-900"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}