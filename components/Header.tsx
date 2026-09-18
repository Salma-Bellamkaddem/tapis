"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCurrency } from "./CurrencyContext";

const WHATSAPP_URL = `https://wa.me/212767149114?text=${encodeURIComponent(
  "Hello, I would like to know more about your Berber rugs."
)}`;

// Une seule liste pour le menu desktop ET mobile (plus de doublon de code)
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rugs", label: "Our Rugs" },
  { href: "/collections", label: "Collections" },

  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

const CURRENCIES = [
  { code: "USD", label: "$ USD" },
  { code: "EUR", label: "€ EUR" },
  { code: "MAD", label: "MAD" },
] as const;

function CurrencySelector({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      role="group"
      aria-label="Choose currency"
      className={`items-center gap-1 bg-[#FAF0E4] border border-[#A44E36]/30 px-2.5 py-1 rounded-full text-xs font-bold text-[#A44E36] ${className}`}
    >
      <span className="text-[10px] uppercase opacity-75 mr-1 hidden lg:inline" aria-hidden="true">
        Currency:
      </span>
      {CURRENCIES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setCurrency(code)}
          aria-pressed={currency === code}
          className={`px-2 py-0.5 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A44E36] ${
            currency === code
              ? "bg-[#A44E36] text-white shadow-sm"
              : "hover:bg-[#A44E36]/10 text-gray-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Ferme le menu mobile quand on change de page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Ferme le menu mobile avec la touche Échap
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">
      {/* Top banner */}
      <div className="bg-[#A44E36] text-white text-center py-2 text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase px-2">
        Handmade in Morocco · Order directly via WhatsApp
      </div>

      {/* Main navigation */}
      <nav
        aria-label="Main"
        className="bg-[#FAF9F6] border-b border-gray-200 px-4 md:px-8 py-4 flex justify-between items-center relative"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
            <Image
              src="/placeholders/logo3.webp"
              alt=""
              fill
              priority
              sizes="40px"
              className="object-contain mix-blend-multiply"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.15em] text-[#1A1F2C] uppercase">
              Cooperative
            </span>
            <span className="text-[15px] sm:text-[18px] font-bold tracking-[0.15em] text-[#1A1F2C] uppercase">
              Berber Rugs
            </span>
          </div>
        </Link>

        {/* Links (desktop) */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider text-gray-800">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`transition-colors hover:text-[#A44E36] ${
                  isActive(href) ? "text-[#A44E36]" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Devises : visibles dès md, sinon dans le menu mobile (évite le débordement sur petit écran) */}
          <CurrencySelector className="hidden md:flex" />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp (opens in a new tab)"
            className="flex items-center gap-2 bg-[#128C7E] hover:bg-[#0F766E] text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold tracking-widest transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#128C7E]"
          >
            <svg
              className="w-4 h-4 fill-current flex-shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-1.98-1.29-2.073-.018-.009-.039-.013-.06-.013-.391 0-.756.224-.925.592-.375.836-1.003 2.05-1.229 2.196-.226.147-.451.164-.841-.027-.39-.192-1.649-.607-3.146-1.942-1.16-1.034-1.943-2.311-2.171-2.702-.228-.391-.024-.603.171-.798.176-.175.391-.454.585-.681.194-.227.259-.39.389-.65.13-.26.065-.487-.033-.682-.098-.195-.921-2.222-1.263-3.041-.334-.803-.675-.694-.928-.707-.238-.012-.511-.012-.784-.012s-.716.102-1.091.511c-.375.409-1.436 1.403-1.436 3.421 0 2.018 1.472 3.966 1.677 4.242.205.275 2.894 4.418 7.005 6.192 3.978 1.716 4.793 1.373 5.655 1.284.862-.089 2.784-1.139 3.174-2.24 0.39-1.101.39-2.046.273-2.241z" />
            </svg>
            <span className="hidden sm:inline">WHATSAPP</span>
          </a>

          {/* Burger (mobile) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden p-2 text-gray-800 hover:text-[#A44E36] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A44E36] rounded"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#FAF9F6] border-b border-gray-200 px-6 py-6 shadow-lg"
        >
          <ul className="flex flex-col gap-1 text-sm font-bold tracking-wider text-gray-800 uppercase">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`block py-3 transition-colors hover:text-[#A44E36] ${
                    isActive(href) ? "text-[#A44E36]" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Devises dans le menu sur petit écran */}
          <CurrencySelector className="flex md:hidden mt-4 w-fit" />
        </div>
      )}
    </header>
  );
}