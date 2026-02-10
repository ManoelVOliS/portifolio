import { FileText, Presentation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResearchPaperSlide() {
  const pdfSlide2 = "/conicAno1.pdf"
  const pdfSlide1 = "/conicAno2.pdf"

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-2xl flex flex-col items-center text-center gap-6">
        
        <div className="bg-blue-500/10 p-4 rounded-full">
          <FileText className="h-10 w-10 text-blue-400" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">Publicação Acadêmica (CNPq)</h3>
          <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
            "Recuperação de Informação Aplicada à Detecção Automática de Suspeitas de Cópias entre Programas de Computadores"
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          {/* Botão para o Artigo Completo */}
          <Button  
            className="gap-2 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open(pdfSlide2, "_blank")}
          >
            <Presentation className="h-4 w-4" />
            Ver Slides da Apresentação Ano 1
          </Button>
          {/* Botão para os Slides/Apresentação */}
          <Button 
            className="gap-2 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open(pdfSlide1, "_blank")}
          >
            <Presentation className="h-4 w-4" />
            Ver Slides da Apresentação Ano 2
          </Button>
        </div>

        <p className="text-xs text-zinc-600 mt-2">
          
        </p>
      </div>
    </div>
  )
}