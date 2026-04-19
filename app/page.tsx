"use client"

import { useState } from "react"
import { TopBar } from "@/components/top-bar"
import { CourseSidebar, courses } from "@/components/course-sidebar"
import { ResourceGrid } from "@/components/resource-grid"
import { UploadDialog } from "@/components/upload-dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Plus, SlidersHorizontal, Grid3X3, List } from "lucide-react"
import type { Resource } from "@/components/resource-card"

// Sample data
const sampleResources: Resource[] = [
  {
    id: "1",
    title: "Linear Algebra Complete Summary - Matrices and Determinants",
    description: "Comprehensive notes covering matrix operations, determinants, eigenvalues, and eigenvectors with solved examples.",
    type: "summary",
    course: "mathematics",
    courseName: "Mathematics",
    author: "Sarah Chen",
    authorInitials: "SC",
    date: "Apr 15",
    downloads: 234,
    views: 1520,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60",
    tags: ["linear algebra", "matrices", "midterm"],
  },
  {
    id: "2",
    title: "Quantum Mechanics Visual Study Guide",
    description: "Illustrated guide to quantum mechanics principles including wave functions and probability theory.",
    type: "image",
    course: "physics",
    courseName: "Physics",
    author: "Michael Park",
    authorInitials: "MP",
    date: "Apr 12",
    downloads: 189,
    views: 890,
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop&q=60",
    tags: ["quantum", "diagrams", "final exam"],
  },
  {
    id: "3",
    title: "Data Structures & Algorithms Cheat Sheet",
    description: "Quick reference for Big O notation, sorting algorithms, trees, graphs, and dynamic programming.",
    type: "summary",
    course: "computer-science",
    courseName: "Computer Science",
    author: "Alex Rivera",
    authorInitials: "AR",
    date: "Apr 10",
    downloads: 567,
    views: 2340,
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60",
    tags: ["DSA", "algorithms", "interview prep"],
  },
  {
    id: "4",
    title: "Shakespeare&apos;s Major Works Analysis",
    description: "In-depth analysis of Hamlet, Macbeth, and Othello with themes, motifs, and character studies.",
    type: "notes",
    course: "literature",
    courseName: "Literature",
    author: "Emma Watson",
    authorInitials: "EW",
    date: "Apr 8",
    downloads: 145,
    views: 670,
    thumbnail: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=60",
    tags: ["shakespeare", "drama", "essay"],
  },
  {
    id: "5",
    title: "World War II Timeline and Key Events",
    description: "Detailed chronological overview of WWII including major battles, political developments, and aftermath.",
    type: "summary",
    course: "history",
    courseName: "History",
    author: "James Miller",
    authorInitials: "JM",
    date: "Apr 5",
    downloads: 312,
    views: 1100,
    thumbnail: "https://images.unsplash.com/photo-1461360370896-922624d12a74?w=800&auto=format&fit=crop&q=60",
    tags: ["WWII", "20th century", "exam review"],
  },
  {
    id: "6",
    title: "Anatomy of the Human Heart - Diagrams",
    description: "Detailed anatomical diagrams of the cardiovascular system with labeled structures and blood flow.",
    type: "image",
    course: "medicine",
    courseName: "Medicine",
    author: "Dr. Lisa Chang",
    authorInitials: "LC",
    date: "Apr 3",
    downloads: 423,
    views: 1890,
    thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop&q=60",
    tags: ["anatomy", "cardiovascular", "MCAT"],
  },
  {
    id: "7",
    title: "Constitutional Law Fundamentals",
    description: "Summary of key constitutional principles, landmark cases, and judicial review concepts.",
    type: "summary",
    course: "law",
    courseName: "Law",
    author: "David Kim",
    authorInitials: "DK",
    date: "Apr 1",
    downloads: 267,
    views: 980,
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=60",
    tags: ["constitutional", "cases", "bar prep"],
  },
  {
    id: "8",
    title: "Color Theory and Composition Basics",
    description: "Essential guide to color wheels, complementary colors, and composition rules for visual design.",
    type: "notes",
    course: "art",
    courseName: "Art & Design",
    author: "Nina Patel",
    authorInitials: "NP",
    date: "Mar 28",
    downloads: 198,
    views: 750,
    thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60",
    tags: ["color theory", "design", "portfolio"],
  },
  {
    id: "9",
    title: "Calculus II Integration Techniques",
    description: "Step-by-step guide to integration by parts, partial fractions, and trigonometric substitution.",
    type: "summary",
    course: "mathematics",
    courseName: "Mathematics",
    author: "Tom Anderson",
    authorInitials: "TA",
    date: "Mar 25",
    downloads: 445,
    views: 2100,
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=60",
    tags: ["calculus", "integration", "finals"],
  },
]

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [view, setView] = useState<"grid" | "list">("grid")

  const selectedCourseName = selectedCourse
    ? courses.find((c) => c.id === selectedCourse)?.name
    : "All Resources"

  return (
    <div className="min-h-screen bg-background">
      <TopBar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <CourseSidebar
        isOpen={sidebarOpen}
        selectedCourse={selectedCourse}
        onSelectCourse={(course) => {
          setSelectedCourse(course)
          setSidebarOpen(false)
        }}
      />

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="min-h-[calc(100vh-4rem)] md:ml-64">
        <div className="p-4 md:p-6 lg:p-8">
          {/* Header Section */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                {selectedCourseName}
              </h1>
              <p className="mt-1 text-muted-foreground">
                {selectedCourse
                  ? `Browse summaries and resources for ${selectedCourseName}`
                  : "Discover and share course materials with your classmates"}
              </p>
            </div>
            <UploadDialog>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Upload Resource
              </Button>
            </UploadDialog>
          </div>

          {/* Filters Bar */}
          <div className="mb-6 flex flex-col gap-4 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="summaries">Summaries</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
              <div className="flex rounded-md border border-border">
                <Button
                  variant={view === "grid" ? "secondary" : "ghost"}
                  size="sm"
                  className="rounded-r-none"
                  onClick={() => setView("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={view === "list" ? "secondary" : "ghost"}
                  size="sm"
                  className="rounded-l-none"
                  onClick={() => setView("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          {!selectedCourse && (
            <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-2xl font-bold text-foreground">1,234</p>
                <p className="text-sm text-muted-foreground">Total Resources</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-sm text-muted-foreground">Courses</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-2xl font-bold text-foreground">456</p>
                <p className="text-sm text-muted-foreground">Contributors</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-2xl font-bold text-foreground">12.5k</p>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
            </div>
          )}

          {/* Popular Tags */}
          {!selectedCourse && (
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-foreground">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "midterm",
                  "final exam",
                  "cheat sheet",
                  "formulas",
                  "diagrams",
                  "study guide",
                  "practice problems",
                  "lecture notes",
                ].map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Resource Grid */}
          <ResourceGrid resources={sampleResources} selectedCourse={selectedCourse} />
        </div>
      </main>
    </div>
  )
}
