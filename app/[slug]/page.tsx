import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Header } from '../components';
import { Layout } from '../components';
import BlockContent from '../components/BlockContent';
import { type PortableTextBlock } from "next-sanity";
import { urlFor } from '@/sanity/lib/image';

type Props = {
  params: Promise<{ slug: string }>
};

// Define the project type based on your schema
interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  subtitle?: string;
  coverImage?: any;
  links?: Array<{
    _key: string;
    title: string;
    url: string;
  }>;
  tags?: string[];
  body?: PortableTextBlock[];
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]`,
    { slug }
  );

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.subtitle || project.description || `View ${project.title} - a project by Stephanie Stelzer`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project: Project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]`,
    { slug }
  );

  if (!project) return notFound();

  return (
    <>
      <Header />
      <Layout>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <div className="flex-1 lg:max-w-2xl mb-8">
              <div className="max-w-none lg:mb-8">
                <h1 className="text-h4 font-regular text-grey-700 leading-relaxed">
                  {project.title}
                </h1>
                <h6 className="text-h6 font-light text-grey-200">
                  {project.subtitle}
                </h6>
              </div>
            </div>
            
            {(project.links && project.links.length > 0) || (project.tags && project.tags.length > 0) ? (
              <div className="lg:w-64 lg:flex-shrink-0">
                {project.links && project.links.length > 0 && (
                  <div className={`mb-8 ${
                    project.tags && project.tags.length > 0 ? 'lg:border-b-[0.5px] border-grey-200' : ''
                  }`}>
                    <h2 className="text-h6 font-light text-grey-500 mb-3">Links</h2>
                    <div className="space-y-1 lg:mb-8">
                      {project.links.map((link: any, index: number) => (
                        <a
                          key={link._key || index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-grey-400 font-light text-p hover:text-gray-900 transition-colors flex items-center"
                        >
                          {link.title}
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9999 5.875C14.9999 5.65399 14.9122 5.44202 14.7559 5.28574C14.5996 5.12946 14.3876 5.04167 14.1666 5.04167L7.49995 5C7.27894 5 7.06697 5.0878 6.91069 5.24408C6.75441 5.40036 6.66662 5.61232 6.66662 5.83333C6.66662 6.05435 6.75441 6.26631 6.91069 6.42259C7.06697 6.57887 7.27894 6.66667 7.49995 6.66667H12.1333L5.24162 13.575C5.16351 13.6525 5.10151 13.7446 5.05921 13.8462C5.0169 13.9477 4.99512 14.0567 4.99512 14.1667C4.99512 14.2767 5.0169 14.3856 5.05921 14.4871C5.10151 14.5887 5.16351 14.6809 5.24162 14.7583C5.31908 14.8364 5.41125 14.8984 5.5128 14.9407C5.61435 14.9831 5.72327 15.0048 5.83328 15.0048C5.94329 15.0048 6.05221 14.9831 6.15376 14.9407C6.25531 14.8984 6.34748 14.8364 6.42495 14.7583L13.3333 7.85V12.5C13.3333 12.721 13.4211 12.933 13.5774 13.0893C13.7336 13.2455 13.9456 13.3333 14.1666 13.3333C14.3876 13.3333 14.5996 13.2455 14.7559 13.0893C14.9122 12.933 14.9999 12.721 14.9999 12.5V5.875Z" fill="currentColor" className="text-grey-400"/>
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <h2 className="text-h6 font-light text-grey-500 mb-3">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string, index: number) => (
                        <div key={index} className="px-2 py-1 rounded-lg text-sm font-light transition-colors bg-tag-selected border border-grey-900">
                          <span className="text-gray-700">
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
          {/* Body Content */}
              {project.body && (
                <div className="prose prose-lg max-w-none mt-8">
                  <BlockContent value={project.body} />
                </div>
              )}
        </div>
      </Layout>
    </>
  );
}
