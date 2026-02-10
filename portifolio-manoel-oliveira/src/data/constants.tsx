import { FolderGit2, User, FileDown } from "lucide-react"

import { ResearchCodeSlide } from "@/components/slides/research-code"
import { RepoStructureSlide } from "@/components/slides/repo-structure"
import { ResearchPaperSlide } from "@/components/slides/research-paper"
import { AgendaSaudeSlide } from "@/components/slides/agenda-saude"
import { AgendaFullstack } from "@/components/slides/agenda-fullstack" 

export const PROJECTS_SLIDES = [
  <ResearchCodeSlide key="research-code" />,
  <ResearchPaperSlide key="research-paper" />,
  <AgendaSaudeSlide key="agenda-saude" />,
  <AgendaFullstack key="agenda-fullstack" />,
  <RepoStructureSlide key="repo-tree" />,
]

export const CAROUSEL_OPTIONS = {
  loop: true,
  dragFree: true,
}

export const NAV_ITEMS = [
  {
    id: "projects",
    icon: <FolderGit2 className="h-5 w-5" />,
    label: "Projetos",
    onClick: () => document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "about",
    icon: <User className="h-5 w-5" />,
    label: "Sobre Mim",
    onClick: () => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "resume",
    icon: <FileDown className="h-5 w-5" />,
    label: "Currículo",
    onClick: () => {
      window.open('./public/Manoel Victor Oliveira.pdf', '_blank');
    }, 
  },
]