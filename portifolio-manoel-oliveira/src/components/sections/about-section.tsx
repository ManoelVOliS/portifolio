import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Briefcase, Cpu, GraduationCap, Languages } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("bio")

  return (
    <section id="about-section" className="min-h-[80vh] w-full bg-zinc-900 flex flex-col items-center border-t border-zinc-800 py-20 px-4">
         
         <div className="text-center mb-10 px-4">
           <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Conheça o Desenvolvedor</h2>
           <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
             Graduando em Sistemas para Internet e apaixonado por resolver problemas complexos com código.
           </p>
         </div>

         <ToggleGroup 
            type="single" 
            value={activeTab} 
            onValueChange={(value) => { if (value) setActiveTab(value) }}
            className="flex flex-wrap justify-center bg-zinc-950 p-1 rounded-2xl md:rounded-full border border-zinc-800 mb-12 gap-1"
         >
            <ToggleGroupItem value="bio" className="rounded-full px-4 md:px-6 data-[state=on]:bg-zinc-800 data-[state=on]:text-white text-zinc-400 transition-all hover:text-white">
              <User className="mr-2 h-4 w-4" /> Bio
            </ToggleGroupItem>
            <ToggleGroupItem value="exp" className="rounded-full px-4 md:px-6 data-[state=on]:bg-zinc-800 data-[state=on]:text-white text-zinc-400 transition-all hover:text-white">
              <Briefcase className="mr-2 h-4 w-4" /> Experiência
            </ToggleGroupItem>
            <ToggleGroupItem value="skills" className="rounded-full px-4 md:px-6 data-[state=on]:bg-zinc-800 data-[state=on]:text-white text-zinc-400 transition-all hover:text-white">
              <Cpu className="mr-2 h-4 w-4" /> Habilidades
            </ToggleGroupItem>
         </ToggleGroup>

         <div className="w-[90vw] md:max-w-3xl min-h-[300px]">
            <AnimatePresence mode="wait">

              {activeTab === "bio" && (
                <motion.div 
                  key="bio"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                  className="space-y-6 text-zinc-300 leading-relaxed text-left md:text-left"
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
                      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center gap-3 shadow-lg hover:border-blue-500/50 transition-colors">
                         <GraduationCap className="h-8 w-8 text-blue-500 shrink-0" />
                         <div className="text-left overflow-hidden">
                            <h4 className="text-white font-medium truncate">IFPE</h4>
                            <p className="text-xs text-zinc-500 truncate">Sistemas para Internet</p>
                         </div>
                      </div>
                      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center gap-3 shadow-lg hover:border-green-500/50 transition-colors">
                         <Languages className="h-8 w-8 text-green-500 shrink-0" />
                         <div className="text-left overflow-hidden">
                            <h4 className="text-white font-medium truncate">Idiomas</h4>
                            <p className="text-xs text-zinc-500 truncate">Inglês Interm./Avançado</p>
                         </div>
                      </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "exp" && (
                <motion.div 
                  key="exp"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                  className="space-y-8 md:space-y-4"
                >

                  <div className="group relative border-l-2 border-zinc-800 pl-6 pb-2 hover:border-purple-500 transition-colors text-left">
                    <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-zinc-800 border-2 border-zinc-950 group-hover:bg-purple-500 transition-colors" />
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">Pesquisador Bolsista (Dev & IA)</h3>
                    
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm text-zinc-500 mb-2 mt-1">
                        <span className="font-semibold">CNPq</span>
                        <span className="text-[10px] md:text-xs border border-zinc-800 px-2 py-0.5 rounded-full w-fit mt-1 sm:mt-0">2023 - Atual</span>
                    </div>
                    
                    <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
                      Desenvolvimento de algoritmos em Python para análise de similaridade de código usando Recuperação de Informação.
                      Tratamento de bases de dados com mais de 6.000 registros para modelos de IA.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">Python</span>
                        <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">NLP</span>
                        <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">SQL</span>
                    </div>
                  </div>

                  <div className="group relative border-l-2 border-zinc-800 pl-6 pb-2 hover:border-blue-500 transition-colors text-left">
                    <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-zinc-800 border-2 border-zinc-950 group-hover:bg-blue-500 transition-colors" />
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">Desenvolvedor Júnior</h3>
                    
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm text-zinc-500 mb-2 mt-1">
                        <span className="font-semibold">W.I CONSTRUÇÕES</span>
                        <span className="text-[10px] md:text-xs border border-zinc-800 px-2 py-0.5 rounded-full w-fit mt-1 sm:mt-0">2022 - Atual</span>
                    </div>
                    
                    <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
                        Automação de processos XML/JSON com Python e C# (otimizando fluxos em 40%).
                        Desenvolvimento web Full Stack com React.js, Vue.js, Node.js e .NET Core 8.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">.NET Core</span>
                        <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">React</span>
                        <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">Automação</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div 
                  key="skills"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                  className="text-left"
                >
                  <h3 className="text-white font-medium mb-4 text-sm md:text-base border-b border-zinc-800 pb-2">Frontend & Backend</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                      {[".NET Core 8", "C#", "React.js", "Vue.js", "TypeScript", "Node.js", "Python", "Java"].map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-300 text-xs md:text-sm hover:border-blue-500 hover:text-white transition-all cursor-default shadow-sm">
                          {tech}
                        </span>
                      ))}
                  </div>

                  <h3 className="text-white font-medium mb-4 text-sm md:text-base border-b border-zinc-800 pb-2">Banco de Dados & Ferramentas</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                      {["SQL Server", "PostgreSQL", "MySQL", "Git/GitHub", "Scrum", "Power BI", "Swagger"].map(tool => ( 
                        <span key={tool} className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-300 text-xs md:text-sm hover:border-green-500 hover:text-white transition-all cursor-default shadow-sm">
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