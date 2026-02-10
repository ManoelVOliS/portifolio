import { MapPin, Briefcase, Code2, Linkedin, Github } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars"
import { RadialNav } from "@/components/animate-ui/components/community/radial-nav"
import fotoPerfil from "@/assets/images/me.png"
import { NAV_ITEMS } from "@/data/constants"

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b border-zinc-900">
      
      {/* Background Animado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GravityStarsBackground starsCount={90} movementSpeed={0.2} glowIntensity={40} className="opacity-60" />
      </div>

      <div className="z-10 flex flex-col items-center text-center space-y-6 md:space-y-8 px-4 w-full max-w-4xl">
        
        {/* Card Interativo com Perfil */}
        <HoverCard openDelay={200} closeDelay={100}>
          <HoverCardTrigger asChild>
            <div className="cursor-pointer group select-none">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 group-hover:to-white transition-all duration-300 active:scale-95">
                Manoel Oliveira
              </h1>
              <div className="h-1 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full mx-auto mt-2 rounded-full opacity-80 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </div>
          </HoverCardTrigger>
          
          <HoverCardContent className="w-[90vw] max-w-sm sm:w-96 bg-zinc-950/90 border-zinc-800 backdrop-blur-xl shadow-2xl p-5 z-50">
            <div className="flex justify-between space-x-4">
              <Avatar className="h-14 w-14 sm:h-16 sm:w-16 border-2 border-emerald-500/20 shadow-lg shrink-0">
                <AvatarImage src={fotoPerfil} alt="Manoel Oliveira" className="object-cover" />
                <AvatarFallback className="bg-zinc-800 text-white">MO</AvatarFallback>
              </Avatar>
              <div className="space-y-2 text-left flex-1 min-w-0">
                <div>
                  <h4 className="text-sm font-semibold text-white truncate">@manoeloliveira</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-snug line-clamp-2">
                    Desenvolvedor Full-Stack | C# | .NET | React | Arquitetura de Software
                  </p>
                </div>
                
                {/* Badges Tecnológicas */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono px-1.5 py-0.5 rounded">.NET 8</span>
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono px-1.5 py-0.5 rounded">React</span>
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono px-1.5 py-0.5 rounded">Docker</span>
                </div>

                <div className="flex items-center pt-2 gap-3 text-xs text-zinc-500">
                  <div className="flex items-center gap-1"><MapPin className="h-3 w-3" /> PE</div>
                  <div className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> Open to Work</div>
                </div>
              </div>
            </div>
            
            {/* Footer do Card */}
            <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
               <div className="flex items-center text-xs text-zinc-500">
                  <Code2 className="mr-2 h-3 w-3" /><span>Dev & Pesquisador</span>
               </div>
               <div className="flex gap-3">
                  <a href="https://github.com/ManoelVOliS/" target="_blank" rel="noreferrer" className="text-xs font-medium text-zinc-400 hover:text-white flex items-center transition-colors">
                     <Github className="mr-1 h-3 w-3" /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/manoelvoliveira/" target="_blank" rel="noreferrer" className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center transition-colors">
                     <Linkedin className="mr-1 h-3 w-3" /> LinkedIn
                  </a>
               </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-[90%] md:max-w-[600px] font-light leading-relaxed">
          Unindo a lógica <span className="text-emerald-400 font-medium">do Back-end</span> com a criatividade <span className="text-purple-400 font-medium">do Front-end</span>.
        </p>

        {/* Menu Radial - Ajustado para não vazar no mobile */}
        <div className="pt-4 md:pt-8 scale-75 sm:scale-100 md:scale-110 transform transition-transform">
          <RadialNav items={NAV_ITEMS} />
        </div>
      </div>
    </section>
  )
}