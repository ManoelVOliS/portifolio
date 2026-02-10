import { ScrollProgress, ScrollProgressProvider } from "@/components/animate-ui/primitives/animate/scroll-progress"
import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { AboutSection } from "@/components/sections/about-section"

function App() {
  return (
    <ScrollProgressProvider global>

      <ScrollProgress className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />

      <div className="relative flex min-h-screen w-full flex-col bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">

        <Navbar />

        <main className="flex flex-col w-full">

          <HeroSection />
          <div className="flex flex-col gap-20 pb-20 w-full">
            <ProjectsSection />
            <AboutSection />
          </div>

        </main>

      </div>
    </ScrollProgressProvider>
  )
}

export default App