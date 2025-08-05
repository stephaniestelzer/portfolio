import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

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
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Render more fields as needed */}
    </main>
  );
}
