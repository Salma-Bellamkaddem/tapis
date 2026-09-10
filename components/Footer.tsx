// src/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] pt-16 pb-8 px-4 md:px-8 border-t border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* Grille principale du Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-16">
          
          {/* Colonne 1 : Logo & À propos (prend 2 colonnes sur grand écran) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image 
                  src="/placeholders/logo3.webp" 
                  alt="Logo Cooperative Berber Rugs" 
                  fill 
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#1A1F2C] uppercase">Cooperative</span>
                <span className="text-[15px] font-bold tracking-[0.15em] text-[#A44E36] uppercase">Berber Rugs</span>
              </div>
            </Link>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-sm">
              Authentic Berber rugs, handmade by Moroccan women artisans, with love and expertise.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-[#A44E36] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-[#A44E36] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-[#A44E36] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21c-1.618 0-3.197-.417-4.588-1.209l-.328-.186-3.411.894.912-3.326-.205-.325A8.922 8.922 0 013.119 12c0-4.963 4.044-9 9.031-9 4.981 0 9.032 4.037 9.032 9s-4.051 9-9.151 9zM12.031 4.717a7.288 7.288 0 00-7.29 7.283c0 1.458.379 2.879 1.1 4.135l.138.238-.54 1.97 2.015-.528.23.136a7.258 7.258 0 003.957 1.156c4.015 0 7.284-3.264 7.284-7.28 0-4.017-3.27-7.283-7.284-7.283zm3.998 9.948c-.219-.11-1.296-.64-1.498-.713-.201-.074-.349-.11-.497.111-.148.22-.567.712-.695.859-.128.147-.256.165-.475.055-.219-.11-.925-.342-1.761-1.091-.65-.583-1.089-1.303-1.218-1.523-.128-.22-.014-.339.095-.448.1-.1.219-.256.328-.384.11-.128.146-.22.219-.366.074-.146.037-.274-.018-.384-.055-.11-.497-1.199-.681-1.642-.18-.43-.362-.372-.497-.378-.128-.007-.274-.007-.421-.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="flex flex-col">
            <h4 className="font-bold tracking-wider text-gray-900 mb-6 uppercase text-xs">Navigation</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link href="/" className="hover:text-[#A44E36] transition-colors">Home</Link></li>
              <li><Link href="/collections" className="hover:text-[#A44E36] transition-colors">Collections</Link></li>
              <li><Link href="/story" className="hover:text-[#A44E36] transition-colors">Our Story</Link></li>
              <li><Link href="/artisanat" className="hover:text-[#A44E36] transition-colors">Craftsmanship</Link></li>
              <li><Link href="/contact" className="hover:text-[#A44E36] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Collections */}
          <div className="flex flex-col">
            <h4 className="font-bold tracking-wider text-gray-900 mb-6 uppercase text-xs">Collections</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link href="/collections/beni-ourain" className="hover:text-[#A44E36] transition-colors">Beni Ourain</Link></li>
              <li><Link href="/collections/azilal" className="hover:text-[#A44E36] transition-colors">Azilal</Link></li>
              <li><Link href="/collections/kilim" className="hover:text-[#A44E36] transition-colors">Kilim</Link></li>
              <li><Link href="/collections/contemporain" className="hover:text-[#A44E36] transition-colors">Contemporary Rugs</Link></li>
              <li><Link href="/collections" className="hover:text-[#A44E36] transition-colors">All Collections</Link></li>
            </ul>
          </div>

          {/* Colonne 4 : Aide */}
          <div className="flex flex-col">
            <h4 className="font-bold tracking-wider text-gray-900 mb-6 uppercase text-xs">Help</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link href="/livraison" className="hover:text-[#A44E36] transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="hover:text-[#A44E36] transition-colors">FAQ</Link></li>
              <li><Link href="/entretien" className="hover:text-[#A44E36] transition-colors">Care Guide</Link></li>
              <li><Link href="/suivi" className="hover:text-[#A44E36] transition-colors">Order Tracking</Link></li>
            </ul>
          </div>

          {/* Colonne 5 : Contact */}
          <div className="lg:col-span-1 flex flex-col">
            <h4 className="font-bold tracking-wider text-gray-900 mb-6 uppercase text-xs">Contact</h4>
            <ul className="space-y-4 text-gray-500 mb-6">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                <span>+212 767149114</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                <span>contact@berberrugs.ma</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                <span>Morocco</span>
              </li>
            </ul>
            
            <a 
              href="https://wa.me/212767149114"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#A44E36] text-[#A44E36] px-4 py.5 text-xs font-bold hover:bg-[#A44E36] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21c-1.618 0-3.197-.417-4.588-1.209l-.328-.186-3.411.894.912-3.326-.205-.325A8.922 8.922 0 013.119 12c0-4.963 4.044-9 9.031-9 4.981 0 9.032 4.037 9.032 9s-4.051 9-9.151 9zM12.031 4.717a7.288 7.288 0 00-7.29 7.283c0 1.458.379 2.879 1.1 4.135l.138.238-.54 1.97 2.015-.528.23.136a7.258 7.258 0 003.957 1.156c4.015 0 7.284-3.264 7.284-7.28 0-4.017-3.27-7.283-7.284-7.283zm3.998 9.948c-.219-.11-1.296-.64-1.498-.713-.201-.074-.349-.11-.497.111-.148.22-.567.712-.695.859-.128.147-.256.165-.475.055-.219-.11-.925-.342-1.761-1.091-.65-.583-1.089-1.303-1.218-1.523-.128-.22-.014-.339.095-.448.1-.1.219-.256.328-.384.11-.128.146-.22.219-.366.074-.146.037-.274-.018-.384-.055-.11-.497-1.199-.681-1.642-.18-.43-.362-.372-.497-.378-.128-.007-.274-.007-.421-.007z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* Barre inférieure */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2024 Cooperative Berber Rugs - All rights reserved</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-600 transition-colors">Legal Notice</Link>
            <span>|</span>
            <Link href="/confidentialite" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}