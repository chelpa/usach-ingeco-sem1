"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { FileText, Image as ImageIcon, Download, Bookmark, Eye, Calendar } from "lucide-react"

export interface Resource {
  id: string
  title: string
  description: string
  type: "summary" | "image" | "notes"
  course: string
  courseName: string
  author: string
  authorInitials: string
  date: string
  downloads: number
  views: number
  thumbnail?: string
  tags: string[]
}

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const TypeIcon = resource.type === "image" ? ImageIcon : FileText

  return (
    <Card className="group overflow-hidden bg-card transition-all hover:shadow-lg">
      {resource.thumbnail && (
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={resource.thumbnail}
            alt={resource.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <Badge
            variant="secondary"
            className="absolute right-2 top-2 bg-card/90 text-card-foreground"
          >
            <TypeIcon className="mr-1 h-3 w-3" />
            {resource.type === "image" ? "Image" : "Summary"}
          </Badge>
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="line-clamp-2 text-base font-semibold leading-tight text-card-foreground group-hover:text-primary">
              {resource.title}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {resource.courseName}
            </p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
            <Bookmark className="h-4 w-4" />
            <span className="sr-only">Save resource</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {resource.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {resource.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t border-border pt-3">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarFallback className="bg-primary/10 text-xs text-primary">
              {resource.authorInitials}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{resource.author}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {resource.views}
          </span>
          <span className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            {resource.downloads}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {resource.date}
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}
