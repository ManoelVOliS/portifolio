import { User, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeSlide() {

  const cvUrl = "./public/Manoel Victor Oliveira.pdf" 

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-2xl flex flex-col items-center text-center gap-6">

        <div className="bg-emerald-500/10 p-4 rounded-full">
          <User className="h-10 w-10 text-emerald-400" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">Currículo Profissional</h3>
          <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
            Experiência completa em desenvolvimento FullStack, histórico acadêmico e competências técnicas detalhadas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Button 
            className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={() => window.open(cvUrl, "_blank")}
          >
            <Eye className="h-4 w-4" />
            Visualizar Online
          </Button>

          <Button 
            variant="outline"
            className="gap-2 border-zinc-700 hover:bg-zinc-800 text-zinc-300"
            onClick={() => {
              const link = document.createElement('a');
              link.href = cvUrl;
              link.download = 'Manoel_Oliveira_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="h-4 w-4" />
            Baixar PDF
          </Button>
        </div>

        <div className="flex gap-2 text-xs text-zinc-600 mt-2">
           <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Português</span>
           <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Atualizado 2026</span>
        </div>
      </div>
    </div>
  )
}