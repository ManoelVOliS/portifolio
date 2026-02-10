"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  id: string
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

interface RadialNavProps {
  items: NavItem[]
  className?: string
}

export const RadialNav = ({ items, className }: RadialNavProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const radius = 100 
  const startAngle = 180 
  const endAngle = 360 

  return (
    <div className={cn("relative flex items-center justify-center z-50", className)}>
      
      <button
        onClick={toggleOpen}
        className="relative z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-200 transition-colors focus:outline-none"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="absolute flex items-center justify-center">
            {items.map((item, index) => {

              const totalItems = items.length

              const angleStep = (endAngle - startAngle) / (totalItems - 1)
              const angle = startAngle + index * angleStep
              const radian = (angle * Math.PI) / 180
              
              const x = Math.cos(radian) * radius
              const y = Math.sin(radian) * radius

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    x: x, 
                    y: y, 
                    scale: 1 
                  }}
                  exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.05, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                  className="absolute"
                >
                  <button
                    onClick={() => {
                      item.onClick?.()
                      setIsOpen(false) 
                    }}
                    className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-white shadow-xl hover:bg-blue-600 hover:scale-110 transition-all"
                    title={item.label}
                  >
                    {item.icon}
                    
                    <span className="absolute -bottom-8 scale-0 rounded bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                </motion.div>
              )
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}