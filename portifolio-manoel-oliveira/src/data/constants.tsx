import { FolderGit2, User, FileDown } from "lucide-react"

import cvFile from "@/assets/Manoel Victor Oliveira.pdf" 

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
      window.open(cvFile, "_blank");

    }, 
  },
]