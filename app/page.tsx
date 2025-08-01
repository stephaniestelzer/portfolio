// Home page

import { client } from "@/sanity/lib/client";
import { Layout, Hero, ProjectCard } from "./components";

export default async function Home() {
  const projects = await client.fetch(`
    *[_type == "project"] | order(date desc) {
      _id,
      title,
      slug,
      tagline,
      coverImage,
      role,
      techStack,
      date,
      categories
    }
  `);

  return (
    <Layout>
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>
          
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 6).map((project: any) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg font-body">
                No projects found. Add some projects in your Sanity Studio to see them here!
              </p>
            </div>
          )}
          
          {projects.length > 6 && (
            <div className="text-center mt-12">
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </a>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
