import { ScrollProgress, ScrollProgressProvider } from "@/components/animate-ui/primitives/animate/scroll-progress"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { AboutSection } from "@/components/sections/about-section"

function App() {
  return (
    <ScrollProgressProvider global>
      <ScrollProgress className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="relative flex min-h-screen w-full flex-col bg-zinc-950 text-white font-sans selection:bg-white/20">
        
        <HeroSection />
        <ProjectsSection />
        <AboutSection />

      </div>
    </ScrollProgressProvider>
  )
}

export default App