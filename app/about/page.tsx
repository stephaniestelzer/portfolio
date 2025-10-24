import { Layout } from '../components';
import { Header } from '../components';
import Image from 'next/image';

export default async function About() {

  return (
    <>
      <Header />
      <Layout>
        <div className="min-h-screen pt-8">
          <div className="flex mt-8 mb-8 flex-col justify-center lg:flex-row">
            <div className="w-full lg:w-1/2 px-6 lg:px-12">
                <div className="max-w-2xl space-y-4 lg:space-y-6">
                  <section className="prose">
                    <h3 className="text-h6 text-black">
                      Hi, I'm Stephanie
                    </h3>
                  </section>

                  <section className="prose">
                    <p className="text-p text-gray-600">
                      I am a UX Developer at Disney Experiences, where I design and build content publishing tools for <a href='https://disneyparksblog.com/' target="_blank">disneyparksblog.com</a>, <a href='https://disneyexperiences.com/' target="_blank">disneyexperiences.com,</a> and many other sites across the company. 
                    </p>
                  </section>

                  <section className="prose">
                    <p className="text-p text-gray-600">
                      I am a recent graduate of the <span className='text-orange-600'>University of Florida</span>, where I earned my Bachelor of Science in <a href='https://catalog.ufl.edu/UGRD/colleges-schools/UGENG/DAS_BSDA/'  target="_blank">Digital Arts and Sciences Engineering</a>. My degree is a core computer science curriculum, with a special emphasis on human-computer interaction and digital media.
                    </p>
                  </section>

                  <section className="prose">
                    <p className="text-p text-gray-600 mb-4">
                      Prior to my role at Disney, I have been a...
                    </p>
                    <ul className="space-y-4">
                      <li className="text-p text-gray-600 leading-relaxed">
                        <span className="font-semibold text-black">🎨 Technical Director Intern</span> at <a href='https://animation.paramountpictures.com/' target="_blank">Paramount Animation</a>, where I built tools for the studio's animation pipeline
                      </li>
                      <li className="text-p text-gray-600 leading-relaxed">
                        <span className="font-semibold text-black">💻 Developer Department Manager</span> at <a href="https://theagency.jou.ufl.edu/" target="_blank">The Agency at UF</a>, where I led a team of developers and bridged the gaps between creative and technical departments
                      </li>
                      <li className="text-p text-gray-600 leading-relaxed">
                        <span className="font-semibold text-black">🎯 Software Engineering Intern</span> at <a href="https://corporate.target.com/careers/career-areas/corporate/target-tech" target="_blank">Target</a>, where I built an API for Android devices
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-4 prose">
                    <p className="text-p text-gray-600">
                      I enjoy combining art and technology to create meaningful experiences, and I strive to bring this passion into everything I do.
                    </p>
                  </section>
              </div>
            </div>
          </div>
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