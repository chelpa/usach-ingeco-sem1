"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Book,
  Calculator,
  Beaker,
  Globe,
  Palette,
  Code,
  Heart,
  Scale,
  ChevronRight,
  Home,
  Upload,
  Bookmark,
  TrendingUp,
} from "lucide-react"

interface CourseSidebarProps {
  isOpen: boolean
  selectedCourse: string | null
  onSelectCourse: (course: string | null) => void
}

const courses = [
  { id: "mathematics-i", name: "Matemáticas I", icon: Calculator, count: 24 },
  { id: "administration-i", name: "Intro. Administración", icon: Beaker, count: 18 },
  { id: "computer-science-i", name: "Computación I", icon: Code, count: 32 },
  { id: "literature-i", name: "Comunicación I", icon: Book, count: 15 },
  { id: "ethics-rse", name: "Ética y RSE", icon: Globe, count: 21 },
  { id: "economy-i", name: "Intro. Economía", icon: Palette, count: 12 },
  { id: "medicine", name: "Personal", icon: Heart, count: 28 },
  { id: "contability", name: "Contabilidad I", icon: Scale, count: 19 },
]

export function CourseSidebar({
  isOpen,
  selectedCourse,
  onSelectCourse,
}: CourseSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r border-sidebar-border bg-sidebar transition-transform duration-300 md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <ScrollArea className="h-full py-4">
        <div className="px-3 py-2">
          <nav className="flex flex-col gap-1">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                selectedCourse === null && "bg-sidebar-accent text-sidebar-accent-foreground"
              )}
              onClick={() => onSelectCourse(null)}
            >
              <Home className="h-4 w-4" />
              All Resources
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <TrendingUp className="h-4 w-4" />
              Trending
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <Bookmark className="h-4 w-4" />
              Saved
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <Upload className="h-4 w-4" />
              My Uploads
            </Button>
          </nav>
        </div>

        <div className="px-3 py-4">
          <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60">
            Courses
          </h3>
          <nav className="flex flex-col gap-1">
            {courses.map((course) => (
              <Button
                key={course.id}
                variant="ghost"
                className={cn(
                  "w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  selectedCourse === course.id &&
                    "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => onSelectCourse(course.id)}
              >
                <span className="flex items-center gap-3">
                  <course.icon className="h-4 w-4" />
                  {course.name}
                </span>
                <span className="flex items-center gap-1 text-xs text-sidebar-foreground/60">
                  {course.count}
                  <ChevronRight className="h-3 w-3" />
                </span>
              </Button>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  )
}

export { courses }
