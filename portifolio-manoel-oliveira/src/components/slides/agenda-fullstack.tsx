import { Server, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AgendaFullstack() {
  const repoUrl = "https://github.com/ManoelVOliS/AgendaProjeto" 

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-2xl flex flex-col items-center text-center gap-6">

        <div className="bg-blue-500/10 p-4 rounded-full">
          <Server className="h-10 w-10 text-blue-400" />
        </div>

        <div>

          <a 
            href={repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              Agenda API .NET 8
            </h3>
            <Github className="h-5 w-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
          </a>

          <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed mt-2">
            API RESTful robusta desenvolvida com Clean Architecture. Foco em escalabilidade, testes automatizados e boas práticas de engenharia de software.
          </p>
        </div>

        <div className="flex gap-3 w-full justify-center">

          <Button 
            className="gap-2 bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
            onClick={() => window.open(repoUrl, "_blank")}
          >
            <Github className="h-4 w-4" />
            Acessar Código Fonte
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-xs text-zinc-600 mt-2">
           <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800 text-blue-400">.NET 8</span>
           <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">C#</span>
           <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Postgresql</span>
           <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Docker</span>
           <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Entity Framework</span>
        </div>
      </div>
    </div>
  )
}