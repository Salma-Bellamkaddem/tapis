"use client";

import Link from "next/link";
import Image from "next/image";

const EMAIL = "youness.ait.uness@gmail.com";
const PHONE_DISPLAY = "+212 767149114";
const PHONE_TEL = "+212767149114";
const WHATSAPP_URL = "https://wa.me/212767149114";
const MAPS_URL = "https://maps.app.goo.gl/wkpWghENN4U88JjR9?g_st=awb";

const INSTAGRAM_URL = "https://www.instagram.com/traditional_berber_carpets/";
const FACEBOOK_URL = "https://www.facebook.com/traditional_berber_carpets/";

// Collections available on the website
const COLLECTIONS = [
  { label: "Ouaouzguite", category: "ouaouzguite" },
  { label: "Glaoui", category: "glaoui" },
  { label: "Mouzaïk", category: "mouzaïk" },
  { label: "Akhenif", category: "akhenif" },
  { label: "Picasso Berber", category: "picasso-berber" },
  { label: "Zanifi", category: "zanifi" },
  { label: "Tableau", category: "Tapis Tableau" },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rugs", label: "Our Rugs" },
  { href: "/collections", label: "Collections" },
  { href: "/story", label: "Our Story" },
  { href: "/artisanat", label: "Craftsmanship" },
  { href: "/contact", label: "Contact" },
];

const HELP_LINKS = [
  { href: "/livraison", label: "Shipping & Returns" },
  { href: "/faq", label: "FAQ" },
  { href: "/entretien", label: "Care Guide" },
  { href: "/suivi", label: "Order Tracking" },
];

const WHATSAPP_ICON_PATH =
  "M12.031 21c-1.618 0-3.197-.417-4.588-1.209l-.328-.186-3.411.894.912-3.326-.205-.325A8.922 8.922 0 013.119 12c0-4.963 4.044-9 9.031-9 4.981 0 9.032 4.037 9.032 9s-4.051 9-9.151 9zM12.031 4.717a7.288 7.288 0 00-7.29 7.283c0 1.458.379 2.879 1.1 4.135l.138.238-.54 1.97 2.015-.528.23.136a7.258 7.258 0 003.957 1.156c4.015 0 7.284-3.264 7.284-7.28-4.017-3.27-7.283-7.284-7.283zm3.998 9.948c-.219-.11-1.296-.64-1.498-.713-.201-.074-.349-.11-.497.111-.148.22-.567.712-.695.859-.128.147-.256.165-.475.055-.219-.11-.925-.342-1.761-1.091-.65-.583-1.089-1.303-1.218-1.523-.128-.22-.014-.339.095-.448.1-.1.219-.256.328-.384.11-.128.146-.22.219-.366.074-.146.037-.274-.018-.384-.055-.11-.497-1.199-.681-1.642-.18-.43-.362-.372-.497-.378-.128-.007-.274-.007-.421-.007z";

const linkClass =
  "hover:text-[#A44E36] transition-colors";

const iconLinkClass =
  "text-gray-500 hover:text-[#A44E36] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A44E36] rounded";

const headingClass =
  "font-bold tracking-wider text-gray-900 mb-6 uppercase text-xs";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#FAF9F6] pt-16 pb-8 px-4 md:px-8 border-t border-gray-200 text-sm"
    >
      <div className="max-w-7xl mx-auto">

        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-16">

          {/* Logo & About */}
          <div className="lg:col-span-2 flex flex-col items-start">

            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/placeholders/logo3.webp"
                  alt="Cooperative Berber Rugs"
                  fill
                  sizes="40px"
                  className="object-contain mix-blend-multiply"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#1A1F2C] uppercase">
                  Cooperative
                </span>

                <span className="text-[15px] font-bold tracking-[0.15em] text-[#A44E36] uppercase">
                  Berber Rugs
                </span>
              </div>
            </Link>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
              Handmade Moroccan Berber rugs, woven by rural Amazigh women in
              Taznakht, at the heart of the Siroua Mountains.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">

              {INSTAGRAM_URL && (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (opens in a new tab)"
                  className={iconLinkClass}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                    />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line
                      x1="17.5"
                      y1="6.5"
                      x2="17.51"
                      y2="6.5"
                    />
                  </svg>
                </a>
              )}

              {FACEBOOK_URL && (
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook (opens in a new tab)"
                  className={iconLinkClass}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              )}

<a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp (opens in a new tab)"
  className={`${iconLinkClass} inline-flex items-center justify-center`}
>
  <svg
    className="w-[21px] h-[21px]"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.76.46 3.48 1.33 5.01L2 22l5.14-1.35A9.96 9.96 0 0 0 12.04 22C17.55 22 22 17.51 22 12S17.55 2 12.04 2Zm0 18.2c-1.57 0-3.1-.42-4.44-1.22l-.32-.19-3.05.8.82-2.97-.21-.32A8.2 8.2 0 0 1 3.82 12c0-4.54 3.69-8.23 8.22-8.23 4.54 0 8.22 3.69 8.22 8.23 0 4.53-3.69 8.2-8.22 8.2Zm4.51-6.15c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.12-.12.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.55-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z"
    />
  </svg>
</a>

            </div>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-col"
          >
            <h3 className={headingClass}>
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-600">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Collections */}
          <nav
            aria-label="Collections"
            className="flex flex-col"
          >
            <h3 className={headingClass}>
              Collections
            </h3>

            <ul className="space-y-3 text-gray-600">
              {COLLECTIONS.map(({ label, category }) => (
                <li key={category}>
                  <Link
                    href={`/rugs?category=${encodeURIComponent(category)}`}
                    className={linkClass}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/collections"
                  className={linkClass}
                >
                  All Collections
                </Link>
              </li>
            </ul>
          </nav>

          {/* Help */}
          <nav
            aria-label="Help"
            className="flex flex-col"
          >
            <h3 className={headingClass}>
              Help
            </h3>

            <ul className="space-y-3 text-gray-600">
              {HELP_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-1 flex flex-col">

            <h3 className={headingClass}>
              Contact
            </h3>

            <ul className="space-y-4 text-gray-600 mb-6">

              {/* Phone */}
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-gray-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <a
                  href={`tel:${PHONE_TEL}`}
                  className={linkClass}
                >
                  {PHONE_DISPLAY}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-gray-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <a
                  href={`mailto:${EMAIL}`}
                  className={`${linkClass} break-all`}
                >
                  {EMAIL}
                </a>
              </li>

              {/* Location / Google Maps */}
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-gray-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Taznakht, Morocco
                </a>
              </li>

            </ul>

            {/* WhatsApp CTA */}
            <a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with Cooperative Berber Rugs on WhatsApp"
  className="inline-flex items-center justify-center gap-2 border border-[#A44E36] text-[#A44E36] px-4 py-2.5 text-xs font-bold hover:bg-[#A44E36] hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A44E36]"
>
  <svg
    className="w-[17px] h-[17px] shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.76.46 3.48 1.33 5.01L2 22l5.14-1.35A9.96 9.96 0 0 0 12.04 22C17.55 22 22 17.51 22 12S17.55 2 12.04 2Zm0 18.2c-1.57 0-3.1-.42-4.44-1.22l-.32-.19-3.05.8.82-2.97-.21-.32A8.2 8.2 0 0 1 3.82 12c0-4.54 3.69-8.23 8.22-8.23 4.54 0 8.22 3.69 8.22 8.23 0 4.53-3.69 8.2-8.22 8.2Zm4.51-6.15c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.12-.12.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.55-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z"
    />
  </svg>

  <span>Chat on WhatsApp</span>

  <span className="sr-only">
    (opens in a new tab)
  </span>
</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">

          <p>
            © {year} Cooperative Berber Rugs. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="hover:text-gray-900 transition-colors"
            >
              Legal Notice
            </Link>

            <span aria-hidden="true">|</span>

            <Link
              href="/confidentialite"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}