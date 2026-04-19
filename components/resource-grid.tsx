"use client"

import { ResourceCard, type Resource } from "./resource-card"
import { Empty } from "@/components/ui/empty"
import { FileText } from "lucide-react"

interface ResourceGridProps {
  resources: Resource[]
  selectedCourse: string | null
}

export function ResourceGrid({ resources, selectedCourse }: ResourceGridProps) {
  const filteredResources = selectedCourse
    ? resources.filter((r) => r.course === selectedCourse)
    : resources

  if (filteredResources.length === 0) {
    return (
      <Empty
        icon={FileText}
        title="No resources found"
        description="Be the first to upload resources for this course!"
      />
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredResources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  )
}
