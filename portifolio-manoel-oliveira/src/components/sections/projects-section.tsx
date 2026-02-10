import { MotionCarousel } from "@/components/animate-ui/components/community/motion-carousel"
import { PROJECTS_SLIDES, CAROUSEL_OPTIONS } from "@/data/constants"

export function ProjectsSection() {
  return (
    <section id="projects-section" className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center py-20 relative overflow-hidden">
        <div className="text-center mb-12 z-10">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              Projetos Selecionados
            </h2>
            <p className="text-zinc-400 mt-4 max-w-lg mx-auto">
               Trabalhos recentes envolvendo Python, APIs REST com .NET Core e interfaces modernas.
            </p>
        </div>

        <div className="w-full max-w-6xl px-4 z-10">
           <div className="h-[400px] md:h-[500px] w-full">
              <MotionCarousel 
                slides={PROJECTS_SLIDES} 
                options={CAROUSEL_OPTIONS} 
              />
           </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
    </section>
  )
}