import { client } from '@/sanity/lib/client';
import { Layout } from '../components';
import { Header } from '../components';
import ProjectFilter from '../components/ProjectFilter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View Stephanie Stelzer's portfolio",
};

// Define the project type based on your schema
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

// Query to get all projects
const projectsQuery = `
  *[_type == "project"] | order(date desc) {
    _id,
    title,
    slug,
    subtitle,
    coverImage,
    links,
    tags,
    body
  }
`;

export default async function ProjectsPage() {
  const projects: Project[] = await client.fetch(projectsQuery);

  return (
    <>
      <Header />
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ProjectFilter projects={projects} />
        </div>
      </Layout>
      <div className="py-8 text-center bg-tag-unselected">
        <p className="text-grey-400 font-light text-p">
          © 2025 Stephanie Stelzer
        </p>
      </div>
    </>
  );
}; 