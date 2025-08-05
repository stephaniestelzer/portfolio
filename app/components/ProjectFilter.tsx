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
  const [selectedTag, setSelectedTag] = useState<string>('tools');

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

  // Filter projects based on selected tag
  const filterProjects = (projects: Project[], tag: string) => {
    if (tag === 'all') return projects;
    return projects.filter(project => 
      project.tags && project.tags.includes(tag)
    );
  };

  const allTags = getAllTags(projects);
  const filteredProjects = filterProjects(projects, selectedTag);

  return (
    <>
      {/* Tags Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-lg font-light text-gray-900">Tags</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-4 py-2 rounded-full text-sm font-light transition-colors ${
                selectedTag === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-light transition-colors ${
                  selectedTag === tag
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {selectedTag === 'all' 
              ? 'No projects found. Check back soon for updates!'
              : `No projects found in the "${selectedTag}" category.`
            }
          </p>
        </div>
      )}
    </>
  );
} 