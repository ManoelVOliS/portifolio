import { 
  Files, 
  FolderItem, 
  FolderTrigger, 
  FolderContent, 
  FileItem, 
  SubFiles 
} from "@/components/animate-ui/components/radix/files"; 
import { GitBranch } from "lucide-react"

type FileNode = {
  name: string
  type: "file" | "folder"
  children?: FileNode[]
}

const PORTFOLIO_STRUCTURE: FileNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { 
             name: "sections", 
             type: "folder", 
             children: [
               { name: "hero-section.tsx", type: "file" }, 
               { name: "projects-section.tsx", type: "file" },
               { name: "about-section.tsx", type: "file" }
             ] 
          },
          { 
             name: "slides", 
             type: "folder", 
             children: [
               { name: "agenda-backend.tsx", type: "file" },
               { name: "agenda-saude.tsx", type: "file" },
               { name: "repo-structure.tsx", type: "file" },
               { name: "research-code.tsx", type: "file" },
               { name: "research-paper.tsx", type: "file" },
             ] 
          },
          { 
             name: "ui", 
             type: "folder", 
             children: [{ name: "button.tsx", type: "file" }] 
          },
          { name: "animate-ui", type: "folder", children: [{ name: "motion-carousel.tsx", type: "file" }] },
        ]
      },
      {
        name: "data",
        type: "folder",
        children: [
          { name: "constants.tsx", type: "file" }
        ]
      },
      {
        name: "assets",
        type: "folder",
        children: [
          { name: "images", type: "folder", children: [{ name: "me.png", type: "file" }, { name: "Agenda.jpg", type: "file" }] }
        ]
      },
      { name: "App.tsx", type: "file" },
      { name: "main.tsx", type: "file" },
      { name: "index.css", type: "file" },
    ]
  },
  { 
    name: "public", 
    type: "folder", 
    children: [
      { name: "Manoel_CV.pdf", type: "file" },
      { name: "Agenda Saúde.pdf", type: "file" }
    ] 
  },
  { name: "package.json", type: "file" },
  { name: "vite.config.ts", type: "file" },
  { name: "tailwind.config.js", type: "file" },
]

function RenderTree({ nodes, path = "" }: { nodes: FileNode[], path?: string }) {
  return (
    <>
      {nodes.map((node) => {
        const currentPath = `${path}/${node.name}`
        
        if (node.type === "folder") {
          return (
            <FolderItem value={currentPath} key={currentPath}>
              <FolderTrigger>{node.name}</FolderTrigger>
              <FolderContent>
                <SubFiles>
                  {node.children && <RenderTree nodes={node.children} path={currentPath} />}
                </SubFiles>
              </FolderContent>
            </FolderItem>
          )
        }

        return <FileItem key={currentPath}>{node.name}</FileItem>
      })}
    </>
  )
}

export function RepoStructureSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center p-0 md:p-2">
      <div className="w-full max-w-sm h-full max-h-[28rem] flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden">

        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-400">
          <GitBranch className="h-4 w-4 text-purple-400" />
          <span className="font-mono text-zinc-500">main</span>
          <span className="text-zinc-600">/</span>
          <span className="font-semibold text-white">portfolio-manoel</span>
        </div>

        <div 
          className="flex-1 overflow-y-auto p-4 bg-zinc-950/80 scrollbar-thin scrollbar-thumb-zinc-800"
          onPointerDown={(e) => e.stopPropagation()} 
        >
          <Files>
             <RenderTree nodes={PORTFOLIO_STRUCTURE} />
          </Files>
        </div>

      </div>
    </div>
  )
}