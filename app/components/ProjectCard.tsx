import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface ProjectCardProps {
  project: {
    _id: string;
    title: string;
    slug: { current: string };
    tagline?: string;
    coverImage?: any;
    role?: string;
    techStack?: string[];
    date?: string;
    categories?: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/${project.slug.current}`} className="group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
        {/* Cover Image */}
        {project.coverImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={urlFor(project.coverImage).width(400).height(200).url()}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Title and Tagline */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 font-heading">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="text-gray-600 text-sm leading-relaxed font-body">
                {project.tagline}
              </p>
            )}
          </div>

          {/* Role and Date */}
          <div className="flex items-center justify-between mb-4">
            {project.role && (
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {project.role}
              </span>
            )}
            {project.date && (
              <span className="text-sm text-gray-500">
                {new Date(project.date).getFullYear()}
              </span>
            )}
          </div>

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {project.techStack.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{project.techStack.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Categories */}
          {project.categories && project.categories.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {project.categories.slice(0, 2).map((category, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
} 