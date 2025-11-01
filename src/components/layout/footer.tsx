import { APP_TEXT } from "@/lib/config"

export default function FooterSection() {
  return (
    <div className="w-full bg-[#F97930] border-t-4 border-black flex flex-col justify-center items-center">
      {/* Main Footer Content */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 flex justify-center items-center">
        <div className="w-full max-w-[1000px] flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          {/* Left Column - Brand */}
          <div className="flex flex-col justify-start items-start gap-4 sm:gap-6">
            {/* Brand Section */}
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="text-black text-xl sm:text-2xl font-black leading-tight font-darker-grotesque">
                {APP_TEXT.brand}
              </div>
              <div className="text-black text-sm sm:text-base font-bold leading-6 font-sans">
                {APP_TEXT.tagline}
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start items-center gap-4">
              {/* Twitter/X Icon */}
              <a
                href="#"
                className="w-8 h-8 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="black"
                  />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="#"
                className="w-8 h-8 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                    fill="black"
                  />
                </svg>
              </a>

              {/* GitHub Icon */}
              <a
                href="#"
                className="w-8 h-8 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.374-12-12-12z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8 flex-1">
            {/* Volunteer Column */}
            <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[140px]">
              <div className="text-black text-sm font-black leading-5 font-sans uppercase tracking-wide">
                Para Voluntarios
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Explorar oportunidades
                </a>
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Mi perfil
                </a>
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Mis aplicaciones
                </a>
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Favoritos
                </a>
              </div>
            </div>

            {/* Organization Column */}
            <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[140px]">
              <div className="text-black text-sm font-black leading-5 font-sans uppercase tracking-wide">
                Para Organizaciones
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Publicar oportunidad
                </a>
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Mi organización
                </a>
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Postulaciones
                </a>
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Reportes
                </a>
              </div>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[140px]">
              <div className="text-black text-sm font-black leading-5 font-sans uppercase tracking-wide">
                Recursos
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Términos de uso
                </a>
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Privacidad
                </a>
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Documentación
                </a>
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Comunidad
                </a>
                <a href="#" className="text-black text-sm font-bold leading-5 font-sans cursor-pointer hover:underline transition-all">
                  Soporte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 border-t-4 border-black flex justify-center items-center">
        <div className="w-full max-w-[1000px] text-center text-black text-sm font-bold leading-5 font-sans">
          © {new Date().getFullYear()} Nexora. Todos los derechos reservados.
        </div>
      </div>
    </div>
  )
}

