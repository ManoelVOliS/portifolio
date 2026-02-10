import { FileText, Presentation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResearchPaperSlide() {
  const pdfSlide1 = "/conicAno1.pdf" 
  const pdfSlide2 = "/conicAno2.pdf"

  return (
    <div className="w-full h-full flex items-center justify-center p-2">

      <div className="w-[85vw] md:max-w-2xl bg-zinc-950 border border-zinc-800 rounded-xl p-4 md:p-6 shadow-2xl flex flex-col items-center text-center gap-4 md:gap-6">

        <div className="bg-blue-500/10 p-3 md:p-4 rounded-full shrink-0">
          <FileText className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
        </div>

        <div>

          <h3 className="text-lg md:text-xl font-bold text-white mb-2">
            Publicação Acadêmica (CNPq)
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            "Recuperação de Informação Aplicada à Detecção Automática de Suspeitas de Cópias entre Programas de Computadores"
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-3 w-full justify-center">

          <Button 
            className="gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto"
            onClick={() => window.open(pdfSlide1, "_blank")}
          >
            <Presentation className="h-4 w-4" />
            Ver Slides Apresentação Ano 1
          </Button>

          <Button 
            className="gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto"
            onClick={() => window.open(pdfSlide2, "_blank")}
          >
            <Presentation className="h-4 w-4" />
            Ver Slides Apresentação Ano 2
          </Button>
        </div>

        <p className="text-[10px] md:text-xs text-zinc-600 mt-1">
        </p>
      </div>
    </div>
  )
}