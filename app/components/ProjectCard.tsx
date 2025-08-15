import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface ProjectCardProps {
  project: {
    _id: string;
    title: string;
    slug: { current: string };
    subtitle?: string;
    coverImage?: any;
    links?: object[];
    tags?: string[];
    body?: any[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/${project.slug.current}`} className="group">
      <div className="overflow-hidden">
        {/* Cover Image */}
        {project.coverImage && (
          <div className="image-container relative w-full aspect-[9/10] rounded-xl overflow-hidden">
            <Image
              src={urlFor(project.coverImage).url()}
              alt={project.title}
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
          </div>
        )}

        <div className="py-6 pl-1">
          <div className="mb-4">
            <h3 className="text-h5 text-grey-900 transition-colors mb-2 font-light">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-grey-300 text-p font-light">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
} 