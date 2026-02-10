import { FileText, HeartPulse, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AgendaSaudeSlide() {
  const pdfUrl = "/Agenda Saúde.pdf"
  const repoUrl = "https://github.com/AnthonyRichardD/tamus-dashboard-front" 

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-2xl flex flex-col items-center text-center gap-6">
        
        <div className="bg-red-500/10 p-4 rounded-full">
          <HeartPulse className="h-10 w-10 text-red-400" />
        </div>

        <div>
          <a 
            href={repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              Projeto Agenda Saúde
            </h3>
            <Github className="h-5 w-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
          </a>

          <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed mt-2">
            Sistema FullStack para gestão de saúde. Aprsentação completa do projeto, incluindo arquitetura e funcionalidades.
          </p>
        </div>

        <div className="flex gap-3 w-full justify-center">
          <Button 
            className="gap-2 bg-red-600 hover:bg-red-700 text-white"
            onClick={() => window.open(pdfUrl, "_blank")}
          >
            <FileText className="h-4 w-4" />
            Visualizar Apresentação (PDF)
          </Button>
        </div>

        <div className="flex gap-2 text-xs text-zinc-600 mt-2">
           <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">React</span>
           <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Typescript</span>
           <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Postgresql</span>
        </div>
      </div>
    </div>
  )
}