import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string }
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = params;
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
