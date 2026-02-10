import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Briefcase, Cpu, GraduationCap, Languages } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("bio")

  return (
    <section id="about-section" className="min-h-[80vh] bg-zinc-900 flex flex-col items-center border-t border-zinc-800 py-20 px-4">
         <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-white mb-4">Conheça o Desenvolvedor</h2>
           <p className="text-zinc-400 max-w-xl mx-auto">
             Graduando em Sistemas para Internet e apaixonado por resolver problemas complexos com código.
           </p>
         </div>

         <ToggleGroup 
            type="single" 
            value={activeTab} 
            onValueChange={(value) => { if (value) setActiveTab(value) }}
            className="bg-zinc-950 p-1 rounded-full border border-zinc-800 mb-12"
         >
            <ToggleGroupItem value="bio" className="rounded-full px-6 data-[state=on]:bg-zinc-800 data-[state=on]:text-white text-zinc-400 transition-all hover:text-white">
              <User className="mr-2 h-4 w-4" /> Bio
            </ToggleGroupItem>
            <ToggleGroupItem value="exp" className="rounded-full px-6 data-[state=on]:bg-zinc-800 data-[state=on]:text-white text-zinc-400 transition-all hover:text-white">
              <Briefcase className="mr-2 h-4 w-4" /> Experiência
            </ToggleGroupItem>
            <ToggleGroupItem value="skills" className="rounded-full px-6 data-[state=on]:bg-zinc-800 data-[state=on]:text-white text-zinc-400 transition-all hover:text-white">
              <Cpu className="mr-2 h-4 w-4" /> Habilidades
            </ToggleGroupItem>
         </ToggleGroup>

         <div className="w-full max-w-3xl min-h-[300px]">
            <AnimatePresence mode="wait">
              {/* ABA: BIO */}
              {activeTab === "bio" && (
                <motion.div 
                  key="bio"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                  className="space-y-6 text-zinc-300 leading-relaxed text-center md:text-left"
                >
                  <p>
                    Olá! Sou <strong className="text-white">Manoel Oliveira</strong>, residente em Igarassu, Pernambuco. 
                    Atualmente curso <strong className="text-white">Sistemas para Internet no IFPE</strong>, onde aprimoro minha base técnica.
                  </p>
                  <p>
                    Minha atuação profissional combina o desenvolvimento Full Stack na <strong className="text-blue-400">W.I Construções</strong> com a pesquisa acadêmica em Recuperação de Informação no <strong className="text-blue-400">CNPq</strong>.
                    Possuo inglês Intermediário/Avançado e foco em entregar código limpo e escalável.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                     <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center gap-3 shadow-lg">
                        <GraduationCap className="h-8 w-8 text-blue-500" />
                        <div className="text-left"><h4 className="text-white font-medium">IFPE</h4><p className="text-xs text-zinc-500">Sistemas para Internet</p></div>
                     </div>
                     <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center gap-3 shadow-lg">
                        <Languages className="h-8 w-8 text-green-500" />
                        <div className="text-left"><h4 className="text-white font-medium">Idiomas</h4><p className="text-xs text-zinc-500">Inglês Interm./Avançado</p></div>
                     </div>
                  </div>
                </motion.div>
              )}

              {/* ABA: EXPERIÊNCIA */}
              {activeTab === "exp" && (
                <motion.div 
                  key="exp"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Experiência 1: CNPq */}
                  <div className="group relative border-l-2 border-zinc-800 pl-6 pb-6 hover:border-purple-500 transition-colors text-left">
                    <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-zinc-800 border-2 border-zinc-950 group-hover:bg-purple-500 transition-colors" />
                    <h3 className="text-xl font-bold text-white">Pesquisador Bolsista (Dev & IA)</h3>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm text-zinc-500 mb-2">
                       <span>CNPq</span>
                       <span className="text-xs border border-zinc-800 px-2 py-0.5 rounded-full mt-1 sm:mt-0 w-fit">2023 - Atual</span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-2">
                      Desenvolvimento de algoritmos em Python para análise de similaridade de código usando Recuperação de Informação.
                      Tratamento de bases de dados com mais de 6.000 registros para modelos de IA.
                    </p>
                    <div className="flex gap-2"><span className="text-[10px] bg-zinc-800 px-1 rounded text-zinc-400">Python</span><span className="text-[10px] bg-zinc-800 px-1 rounded text-zinc-400">NLP</span><span className="text-[10px] bg-zinc-800 px-1 rounded text-zinc-400">SQL</span></div>
                  </div>

                  {/* Experiência 2: W.I Construções */}
                  <div className="group relative border-l-2 border-zinc-800 pl-6 pb-6 hover:border-blue-500 transition-colors text-left">
                    <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-zinc-800 border-2 border-zinc-950 group-hover:bg-blue-500 transition-colors" />
                    <h3 className="text-xl font-bold text-white">Desenvolvedor Júnior</h3>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm text-zinc-500 mb-2">
                       <span>W.I CONSTRUÇÕES</span>
                       <span className="text-xs border border-zinc-800 px-2 py-0.5 rounded-full mt-1 sm:mt-0 w-fit">2022 - Atual</span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-2">
                       Automação de processos XML/JSON com Python e C# (otimizando fluxos em 40%).
                       Desenvolvimento web Full Stack com React.js, Vue.js, Node.js e .NET Core 8.
                    </p>
                    <div className="flex gap-2"><span className="text-[10px] bg-zinc-800 px-1 rounded text-zinc-400">.NET Core</span><span className="text-[10px] bg-zinc-800 px-1 rounded text-zinc-400">React</span><span className="text-[10px] bg-zinc-800 px-1 rounded text-zinc-400">Automação</span></div>
                  </div>
                </motion.div>
              )}

              {/* ABA: HABILIDADES */}
              {activeTab === "skills" && (
                <motion.div 
                  key="skills"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                  className="text-left"
                >
                  <h3 className="text-white font-medium mb-4">Frontend & Backend</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                     {[".NET Core 8", "C#", "React.js", "Vue.js", "TypeScript", "Node.js", "Python", "Java"].map(tech => (
                       <span key={tech} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-300 text-sm hover:border-blue-500 hover:text-white transition-colors cursor-default">
                         {tech}
                       </span>
                     ))}
                  </div>

                  <h3 className="text-white font-medium mb-4">Banco de Dados & Ferramentas</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                     {["SQL Server", "PostgreSQL", "MySQL", "Git/GitHub", "Scrum", "Power BI", "Swagger"].map(tool => ( 
                       <span key={tool} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-300 text-sm hover:border-green-500 hover:text-white transition-colors cursor-default">
                         {tool}
                       </span>
                     ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
         </div>
    </section>
  )
}