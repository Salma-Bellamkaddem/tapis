// src/app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-[70vh] py-20 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white p-8 md:p-16 shadow-sm border border-gray-100">
        
        <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6 uppercase text-center tracking-widest">
          Contact Us
        </h1>
        
        <p className="text-center text-gray-600 mb-12 leading-relaxed max-w-xl mx-auto">
          Do you have a question about a specific rug, sizing, or a custom order? 
          The fastest way to reach our cooperative is directly through WhatsApp. We are here to help you find the perfect piece of Moroccan heritage for your home.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://wa.me/212600000000" // Remplace par ton numéro
            target="_blank"
            rel="noreferrer"
            className="bg-[#A44E36] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 21c-1.618 0-3.197-.417-4.588-1.209l-.328-.186-3.411.894.912-3.326-.205-.325A8.922 8.922 0 013.119 12c0-4.963 4.044-9 9.031-9 4.981 0 9.032 4.037 9.032 9s-4.051 9-9.151 9zM12.031 4.717a7.288 7.288 0 00-7.29 7.283c0 1.458.379 2.879 1.1 4.135l.138.238-.54 1.97 2.015-.528.23.136a7.258 7.258 0 003.957 1.156c4.015 0 7.284-3.264 7.284-7.28 0-4.017-3.27-7.283-7.284-7.283zm3.998 9.948c-.219-.11-1.296-.64-1.498-.713-.201-.074-.349-.11-.497.111-.148.22-.567.712-.695.859-.128.147-.256.165-.475.055-.219-.11-.925-.342-1.761-1.091-.65-.583-1.089-1.303-1.218-1.523-.128-.22-.014-.339.095-.448.1-.1.219-.256.328-.384.11-.128.146-.22.219-.366.074-.146.037-.274-.018-.384-.055-.11-.497-1.199-.681-1.642-.18-.43-.362-.372-.497-.378-.128-.007-.274-.007-.421-.007z"/>
            </svg>
            Contact via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}