import { MapPin, Briefcase, Code2, Linkedin, Github } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars"
import { RadialNav } from "@/components/animate-ui/components/community/radial-nav"
import fotoPerfil from "@/assets/images/me.png"
import { NAV_ITEMS } from "@/data/constants"

export function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden border-b border-zinc-900">
      <div className="absolute inset-0 z-0">
        <GravityStarsBackground starsCount={90} movementSpeed={0.2} glowIntensity={40} className="opacity-60" />
      </div>

      <div className="z-10 flex flex-col items-center text-center space-y-8 px-4">
        <HoverCard openDelay={200} closeDelay={100}>
          <HoverCardTrigger asChild>
            <div className="cursor-pointer group">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 group-hover:to-white transition-all duration-300">
                Manoel Oliveira
              </h1>
              <div className="h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full mx-auto mt-2 rounded-full opacity-80" />
            </div>
          </HoverCardTrigger>
          
          <HoverCardContent className="w-96 bg-zinc-900/90 border-zinc-800 backdrop-blur-xl shadow-2xl p-5">
            <div className="flex justify-between space-x-4">
              <Avatar className="h-16 w-16 border-2 border-white/10 shadow-lg">
                <AvatarImage src={fotoPerfil} alt="Manoel Oliveira" />
                <AvatarFallback className="bg-zinc-800 text-white">MO</AvatarFallback>
              </Avatar>
              <div className="space-y-2 text-left flex-1">
                <div>
                  <h4 className="text-sm font-semibold text-white">@manoeloliveira</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-snug">
                    Desenvolvedor Full-Stack | C# | .NET | Vue.js | Node.js | React | Docker
                  </p>
                </div>
                <div className="flex gap-2 text-[10px] text-zinc-300 font-mono pt-1">
                  <span className="bg-zinc-800 px-1.5 py-0.5 rounded">.NET 8</span>
                  <span className="bg-zinc-800 px-1.5 py-0.5 rounded">React</span>
                  <span className="bg-zinc-800 px-1.5 py-0.5 rounded">Python</span>
                </div>
                <div className="flex items-center pt-2 gap-4 text-xs text-zinc-500">
                  <div className="flex items-center gap-1"><MapPin className="h-3 w-3" /> PE, Brasil</div>
                  <div className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> Open to Work</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
               <div className="flex items-center text-xs text-zinc-400">
                  <Code2 className="mr-2 h-3 w-3" /><span>Dev Júnior & Pesquisador</span>
               </div>
               <div className="flex gap-3">
                  <a href="http://github.com/ManoelVOliS/" target="_blank" className="text-xs font-medium text-zinc-300 hover:text-white flex items-center transition-colors">
                     <Github className="mr-1 h-3 w-3" /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/manoelvoliveira/" target="_blank" className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center transition-colors">
                     <Linkedin className="mr-1 h-3 w-3" /> Conectar
                  </a>
               </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-[600px] font-light">
          Unindo a lógica <span className="text-white font-medium">do Back-end</span> com a criatividade <span className="text-white font-medium">do Front-end.</span>.
        </p>

        <div className="pt-8 scale-110">
          <RadialNav items={NAV_ITEMS} />
        </div>
      </div>
    </section>
  )
}