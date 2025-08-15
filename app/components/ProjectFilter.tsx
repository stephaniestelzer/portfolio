'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  subtitle?: string;
  coverImage?: any;
  links?: object[];
  tags?: string[];
  body?: any[];
}

interface ProjectFilterProps {
  projects: Project[];
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from projects
  const getAllTags = (projects: Project[]) => {
    const tags = new Set<string>();
    projects.forEach(project => {
      if (project.tags) {
        project.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  };

  // Filter projects based on selected tags
  const filterProjects = (projects: Project[], tags: string[]) => {
    if (tags.length === 0) return projects;
    return projects.filter(project =>
      project.tags && tags.every(tag => project.tags!.includes(tag))
    );
  };

  const allTags = getAllTags(projects);
  const filteredProjects = filterProjects(projects, selectedTags);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Clear all selected tags
  const clearTags = () => setSelectedTags([]);

  return (
    <>
      {/* Tags Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-lg font-regular text-grey-900">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-2 py-1 rounded-lg text-sm font-light transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-tag-selected border border-grey-900'
                    : 'bg-tag-unselected text-gray-700 border border-grey-900 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {selectedTags.length === 0
              ? 'No projects found. Check back soon for updates!'
              : `No projects found with the selected tag${selectedTags.length > 1 ? 's' : ''}.`}
          </p>
        </div>
      )}
    </>
  );
} 