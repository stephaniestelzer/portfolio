import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Header } from '../components';
import { Layout } from '../components';

type Props = {
  params: Promise<{ slug: string }>
};

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
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]`,
    { slug }
  );

  if (!project) return notFound();

  return (
    <>
      <Header />
      <Layout>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Two Column Layout: Content on left, Tags on right */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Column - Made smaller */}
            <div className="flex-1 lg:max-w-2xl">
              {/* Additional Content */}
              <div className="max-w-none mb-8">
                <h1 className="text-h4 font-regular text-grey-700 leading-relaxed">
                  {project.title}
                </h1>
                <h6 className="text-h6 font-light text-grey-200">
                  {project.subtitle}
                </h6>
              </div>
            </div>
            
            {/* Tags Column - Right side on desktop, below content on mobile */}
            {project.tags && project.tags.length > 0 && (
              <div className="lg:w-64 lg:flex-shrink-0">
                <div className="mb-8">
                  <h2 className="text-h6 font-light text-grey-500 mt-8 mb-3">Links</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, index: number) => (
                      <div key={index} className="px-2 py-1 rounded-lg text-sm font-light transition-colors bg-tag-selected border border-grey-900">
                        <span className=" text-gray-700">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-h6 font-light text-grey-500 mb-3">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, index: number) => (
                      <div key={index} className="px-2 py-1 rounded-lg text-sm font-light transition-colors bg-tag-selected border border-grey-900">
                        <span className=" text-gray-700">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
